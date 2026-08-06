@echo off
cd /d "%~dp0"
set "NODE=C:\Users\13425\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
if not exist "%NODE%" (
  echo Node not found: %NODE%
  pause
  exit /b 1
)
echo Building VitePress site...
"%NODE%" --max-old-space-size=4096 node_modules\vitepress\bin\vitepress.js build docs
echo.
echo Build finished. Now open it with start-preview.bat
pause
