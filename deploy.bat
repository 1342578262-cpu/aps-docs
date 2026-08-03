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
if errorlevel 1 goto commit
goto checkpush

:commit
for /f "delims=" %%A in ('powershell -NoProfile -Command "Get-Date -Format yyyy-MM-dd_HH-mm"') do set "MSG=update %%A"
"%GIT%" -C "%PROJ%" -c %SD% commit -m "%MSG%"

:checkpush
"%GIT%" -C "%PROJ%" -c %SD% rev-list --count origin/main..main > "%TEMP%\deploy_count.txt" 2>nul
set "UNPUSHED="
set /p UNPUSHED=<"%TEMP%\deploy_count.txt"
if not defined UNPUSHED set "UNPUSHED=1"
if "%UNPUSHED%"=="0" (
  echo No changes to deploy.
  pause
  exit /b 0
)

for /l %%I in (1,1,3) do (
  "%GIT%" -C "%PROJ%" -c %SD% -c credential.helper=manager push origin main
  if not errorlevel 1 (
    set "PUSHED=1"
    goto pushed
  )
  echo Push attempt %%I failed. Retrying...
  timeout /t 5 /nobreak >nul
)
echo.
echo Push failed after 3 attempts. Check network and run deploy.bat again.
pause
exit /b 1

:pushed
echo.
echo Deploy pushed. Check Actions on GitHub.
pause
