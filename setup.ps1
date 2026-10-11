# Установка зависимостей
npm install

# Создание необходимых директорий
New-Item -ItemType Directory -Force -Path "src\components"
New-Item -ItemType Directory -Force -Path "src\contexts"
New-Item -ItemType Directory -Force -Path "src\styles"
New-Item -ItemType Directory -Force -Path "src\pages"
New-Item -ItemType Directory -Force -Path "src\hooks"
New-Item -ItemType Directory -Force -Path "src\utils"

# Инициализация TypeScript
npx tsc --init

Write-Host "Установка завершена! Теперь вы можете запустить проект командой: npm run dev" 