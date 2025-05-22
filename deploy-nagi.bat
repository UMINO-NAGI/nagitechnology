@echo off
title Deploy NAGI Technology para Vercel
echo ============================================
echo  Iniciando deploy do projeto nagitechnology
echo ============================================

:: Passo 1: Verifica se o Vercel CLI está instalado
vercel --version >nul 2>&1
IF ERRORLEVEL 1 (
    echo Vercel CLI não encontrado. Instalando...
    npm install -g vercel
) ELSE (
    echo Vercel CLI já instalado.
)

:: Passo 2: Logar na conta Vercel (se necessário)
echo.
echo >> Caso ainda não esteja logado, a CLI irá pedir seu e-mail.
vercel login

:: Passo 3: Deploy
echo.
echo Publicando o projeto nagitechnology para produção...
vercel --prod --confirm --name nagitechnology

echo.
echo ============================================
echo     Deploy concluído!
echo     Verifique em: https://nagitechnology.vercel.app
echo ============================================
pause