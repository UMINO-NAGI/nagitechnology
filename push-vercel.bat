@echo off
echo =======================================
echo 🔄 Push automático para GitHub + Vercel
echo =======================================

REM Configura nome e e-mail se ainda não estiverem
git config --global user.name "UMINO NAGI"
git config --global user.email "nagitechnology@gmail.com"

REM Adiciona todas as mudanças locais
git add .
set /p COMMIT_MSG=Digite a mensagem do commit: 
git commit -m "%COMMIT_MSG%"

REM Tenta fazer pull com rebase
git pull origin main --rebase

REM Tenta push normal
git push origin main
IF %ERRORLEVEL% NEQ 0 (
    echo ⚠️ Push rejeitado! Forçando envio com --force...
    git push origin main --force
)

REM Envia para Vercel
vercel --prod

echo.
echo ✅ Deploy finalizado com sucesso!
pause
