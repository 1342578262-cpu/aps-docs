@echo off
cd /d "%~dp0"
set "NODE=C:\Users\13425\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
if not exist "%NODE%" (
  echo Node not found: %NODE%
  pause
  exit /b 1
)
echo Exporting single-file HTML...
"%NODE%" build-single-file.mjs
echo.
echo Done: C:\Users\13425\Desktop\AI\1\codex-skill-docs-vitepress\APS-Research-Suite.html
pause
