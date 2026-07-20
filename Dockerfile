FROM python:3.12-slim

WORKDIR /app

COPY index.html ./
COPY app.js ./
COPY styles.css ./
COPY backend ./backend

EXPOSE 8000

CMD ["python", "backend/server.py", "--host", "0.0.0.0", "--port", "8000", "--db", "/data/main.db"]