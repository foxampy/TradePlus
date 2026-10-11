#!/bin/bash

# Установка зависимостей
npm install

# Создание необходимых директорий
mkdir -p src/components
mkdir -p src/contexts
mkdir -p src/styles
mkdir -p src/pages
mkdir -p src/hooks
mkdir -p src/utils

# Инициализация TypeScript
npx tsc --init

echo "Установка завершена! Теперь вы можете запустить проект командой: npm run dev" 