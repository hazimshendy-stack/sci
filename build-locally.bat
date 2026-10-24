@echo off
cd /d %~dp0
echo Installing PWA package...
call npm install vite-plugin-pwa --save-dev
echo Building application...
call npm run build
echo Build complete!
pause
