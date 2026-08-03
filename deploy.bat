@echo off
cd /d "%~dp0"
set "PROJ=%~dp0"
set "PROJ=%PROJ:~0,-1%"
set "GIT=C:\Users\13425\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\git\cmd\git.exe"
set "SD=safe.directory=%PROJ:\=/%"
if not exist "%GIT%" (
  echo Git not found: %GIT%
  pause
  exit /b 1
)
"%GIT%" -C "%PROJ%" -c %SD% add -A
"%GIT%" -C "%PROJ%" -c %SD% diff --cached --quiet
if errorlevel 1 goto push
echo No changes to deploy.
pause
exit /b 0

:push
for /f "delims=" %%A in ('powershell -NoProfile -Command "Get-Date -Format yyyy-MM-dd_HH-mm"') do set "MSG=update %%A"
"%GIT%" -C "%PROJ%" -c %SD% commit -m "%MSG%"
"%GIT%" -C "%PROJ%" -c %SD% -c credential.helper=manager push origin main
echo.
echo Deploy pushed. Check Actions on GitHub.
pause
