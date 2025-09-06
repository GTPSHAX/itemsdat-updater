@echo off
setlocal

echo Select runtime [0]:
echo [0] BunJS
echo [1] NodeJS

set /p runtime="> "

if exist ".\node_modules\" (
  if "%runtime%"=="1" (
    echo Starting NodeJS runtime...
    npm start
  ) else (
    echo Starting BunJS runtime...
    bun run start
  )
) else (
  if "%runtime%"=="1" (
    echo No dependencies found. Installing dependencies with npm...
    npm install
    echo Starting NodeJS runtime...
    npm start
  ) else (
    echo No dependencies found. Installing dependencies with bun...
    bun install
    echo Starting BunJS runtime...
    bun run start
  )
)

endlocal