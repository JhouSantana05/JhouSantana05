@echo off
chcp 65001 > nul

:: Garante que o terminal execute exatamente na pasta onde este script está localizado
cd /d "%~dp0"

echo =========================================================
echo    JS Web & Business - Publicar no GitHub (JhouSantana05)
echo =========================================================
echo.
echo Pasta atual: %CD%
echo.

echo [1/5] Inicializando repositorio Git local...
git init

echo [2/5] Configurando autor do commit...
git config user.name "Jhones Sandro"
git config user.email "contato.jswebbusiness@gmail.com"

echo [3/5] Configurando link remoto para JhouSantana05/JhouSantana05...
git remote remove origin 2>nul
git remote add origin https://github.com/JhouSantana05/JhouSantana05.git
git branch -M main

echo [4/5] Adicionando todos os arquivos e criando commit...
git add -A
git commit -m "feat: site oficial JS Web & Business com projetos reais e 3D"

echo.
echo [5/5] Enviando arquivos para o GitHub (branch main)...
echo.
git push -u origin main --force

if %ERRORLEVEL% equ 0 (
    echo.
    echo =========================================================
    echo  SUCESSO! Arquivos enviados para:
    echo  https://github.com/JhouSantana05/JhouSantana05
    echo =========================================================
) else (
    echo.
    echo =========================================================
    echo  Verifique se foi solicitada autorizacao na janela do Git.
    echo =========================================================
)

echo.
pause
