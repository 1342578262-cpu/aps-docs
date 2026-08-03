@echo off
cd /d "%~dp0"
set "NODE=C:\Users\13425\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
if not exist "%NODE%" (
  echo Node not found: %NODE%
  pause
  exit /b 1
)
echo Starting VitePress preview server in the background...
powershell -NoProfile -Command "Start-Process -FilePath '%NODE%' -ArgumentList 'node_modules\vitepress\bin\vitepress.js','preview','docs' -WindowStyle Hidden"
timeout /t 4 /nobreak >nul
start "" "http://localhost:4173/"
echo Server is running. Close it with stop-docs.bat
timeout /t 2 /nobreak >nul
