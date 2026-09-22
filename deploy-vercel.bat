@echo off
chcp 65001 > nul

:: Garante que o terminal execute exatamente na pasta onde este script está localizado
cd /d "%~dp0"

echo =========================================================
echo    JS Web & Business - Publicar na Vercel (Producao)
echo =========================================================
echo.
echo Pasta atual: %CD%
echo Executando deploy na Vercel...
echo.

npx vercel --prod

echo.
pause
