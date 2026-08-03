@echo off
powershell -NoProfile -Command "$pids = Get-NetTCPConnection -LocalPort 5173,4173 -State Listen -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess -Unique; if ($pids) { $pids | ForEach-Object { Stop-Process -Id $_ -Force -ErrorAction SilentlyContinue }; Write-Host ('Stopped PID: ' + ($pids -join ', ')) } else { Write-Host 'No VitePress server is running.' }"
pause
