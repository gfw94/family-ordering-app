Set-Location $PSScriptRoot
python .\backend\server.py --host 0.0.0.0 --port 8000 --db .\data\main.db
