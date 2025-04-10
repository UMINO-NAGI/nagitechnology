
@echo off
cd /d "%~dp0"
set /p msg=Digite a mensagem do commit: 
git add .
git commit -m "%msg%"
git push
pause
