# Базовый образ с Node.js и браузерами для Playwright
FROM mcr.microsoft.com/playwright:v1.54.2-jammy

# Папка внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci --verbose

# Копируем весь проект
COPY . .

# Запускаем тесты
CMD ["npx", "playwright", "test", "--reporter=allure-playwright"]
