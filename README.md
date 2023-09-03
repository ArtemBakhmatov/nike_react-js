# React + Vite
Установка:
1. npm create vite@latest ./ -- --template react
2. npm install -D tailwindcss postcss autoprefixer
3. npx tailwindcss init -p
4. В файл tailwind.config.js всталяем код из сайта tailwindcss (откуда копировали npm пакеты):

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

5. Добавляем директивы в index.css:
@tailwind base;
@tailwind components;
@tailwind utilities;
