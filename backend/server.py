import argparse
import json
import sqlite3
from datetime import datetime
from http import HTTPStatus
from http.server import HTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
from urllib.parse import parse_qs, urlparse


ROOT_DIR = Path(__file__).resolve().parents[1]
DEFAULT_DB_PATH = ROOT_DIR / 'data' / 'main.db'
SCHEMA_PATH = Path(__file__).resolve().with_name('schema.sql')


def sanitize_room_key(room_key: str) -> str:
    cleaned = ''.join(char if char.isalnum() or char in ('-', '_') else '-' for char in (room_key or 'family-menu'))
    return cleaned.strip('-_') or 'family-menu'


def ensure_database(db_path: Path) -> None:
    db_path.parent.mkdir(parents=True, exist_ok=True)
    schema_sql = SCHEMA_PATH.read_text(encoding='utf-8')
    with sqlite3.connect(db_path) as connection:
        connection.executescript(schema_sql)
        connection.commit()


def get_connection(db_path: Path) -> sqlite3.Connection:
    connection = sqlite3.connect(db_path)
    connection.row_factory = sqlite3.Row
    return connection


class AppHandler(SimpleHTTPRequestHandler):
    db_path: Path = DEFAULT_DB_PATH

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT_DIR), **kwargs)

    def do_GET(self):
        parsed = urlparse(self.path)
        if parsed.path == '/api/health':
            self._send_json({'ok': True, 'dbPath': str(self.db_path)})
            return
        if parsed.path == '/api/state':
            self._handle_get_state(parsed)
            return
        super().do_GET()

    def do_PUT(self):
        parsed = urlparse(self.path)
        if parsed.path == '/api/state':
            self._handle_put_state(parsed)
            return
        self.send_error(HTTPStatus.NOT_FOUND, 'Unknown API endpoint')

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store')
        super().end_headers()

    def _handle_get_state(self, parsed):
        room_key = self._get_room_key(parsed)
        with get_connection(self.db_path) as connection:
            row = connection.execute(
                'SELECT state_json, updated_at FROM app_state WHERE room_key = ?',
                (room_key,)
            ).fetchone()

        if row is None:
            self._send_json({'roomKey': room_key, 'state': None, 'updatedAt': None})
            return

        state = json.loads(row['state_json'])
        self._send_json({'roomKey': room_key, 'state': state, 'updatedAt': row['updated_at']})

    def _handle_put_state(self, parsed):
        room_key = self._get_room_key(parsed)
        payload = self._read_json_body()
        if payload is None:
            return

        state_json = json.dumps(payload, ensure_ascii=False)
        updated_at = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        with get_connection(self.db_path) as connection:
            connection.execute(
                '''
                INSERT INTO app_state(room_key, state_json, updated_at)
                VALUES (?, ?, ?)
                ON CONFLICT(room_key) DO UPDATE SET
                  state_json = excluded.state_json,
                  updated_at = excluded.updated_at
                ''',
                (room_key, state_json, updated_at)
            )
            connection.commit()

        self._send_json({'ok': True, 'roomKey': room_key, 'updatedAt': updated_at})

    def _get_room_key(self, parsed):
        query = parse_qs(parsed.query)
        return sanitize_room_key(query.get('room', ['family-menu'])[0])

    def _read_json_body(self):
        try:
            content_length = int(self.headers.get('Content-Length', '0'))
            raw = self.rfile.read(content_length) if content_length > 0 else b'{}'
            return json.loads(raw.decode('utf-8'))
        except (ValueError, json.JSONDecodeError):
            self.send_error(HTTPStatus.BAD_REQUEST, 'Invalid JSON body')
            return None

    def _send_json(self, payload, status=HTTPStatus.OK):
        body = json.dumps(payload, ensure_ascii=False).encode('utf-8')
        self.send_response(status)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        self.wfile.write(body)


def parse_args():
    parser = argparse.ArgumentParser(description='Family ordering app SQLite backend server')
    parser.add_argument('--host', default='127.0.0.1')
    parser.add_argument('--port', type=int, default=8000)
    parser.add_argument('--db', default=str(DEFAULT_DB_PATH))
    return parser.parse_args()


def main():
    args = parse_args()
    db_path = Path(args.db).resolve()
    ensure_database(db_path)
    AppHandler.db_path = db_path
    server = HTTPServer((args.host, args.port), AppHandler)
    print(f'Serving on http://{args.host}:{args.port}')
    print(f'Using SQLite database: {db_path}')
    try:
      server.serve_forever()
    except KeyboardInterrupt:
      pass
    finally:
      server.server_close()


if __name__ == '__main__':
    main()
