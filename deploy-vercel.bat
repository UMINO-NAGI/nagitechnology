@echo off
echo ================================
echo  🔄 Deploy NAGI via Vercel CLI
echo ================================

REM Verifica se o vercel está instalado
where vercel >nul 2>&1
if errorlevel 1 (
    echo ❌ Vercel CLI não encontrado.
    echo Instale com: npm install -g vercel
    pause
    exit /b
)

REM Commit opcional
set /p COMMIT_MSG=Mensagem do commit (ou Enter para pular): 
if not "%COMMIT_MSG%"=="" (
    git add .
    git commit -m "%COMMIT_MSG%"
    git push
)

REM Deploy
vercel --prod

echo.
echo ✅ Deploy finalizado com sucesso!
pause
