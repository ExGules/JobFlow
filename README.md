

# JobFlow

Веб-приложение для отслеживания отклика на вакансии: статус, заметки и аналитика поиска работы в одном месте.

## Стек технологий

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- Supabase (Auth + PostgreSQL + Row Level Security)
- React Router
- React Hook Form + Zod
- Zustand
- Framer Motion
- MUI X Charts
- Vitest + Testing Library

## Функциональность

- Регистрация и вход через Supabase Auth
- Защищённые маршруты (доступ только для авторизованных пользователей)
- Создание, изменение статуса и удаление вакансий
- Row Level Security: каждый пользователь видит только свои данные
- Страница аналитики со статистикой и круговой диаграммой по статусам
- Плавные анимации появления и удаления карточек
- Адаптивный интерфейс

## Архитектура

Проект построен по принципам Feature-Sliced Design (light-версия):

\```
src/
├── app/          # инициализация приложения, провайдеры, роутинг
├── pages/        # страницы (landing, auth, dashboard, analytics)
├── widgets/      # композитные блоки интерфейса (header)
├── entities/     # бизнес-сущности (job)
├── shared/       # переиспользуемые UI-компоненты, API, утилиты
\```

## Установка и запуск

\```bash
git clone https://github.com/your-username/jobflow.git
cd jobflow
npm install
\```

Создайте файл `.env` со следующими переменными:

\```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
\```

Запуск в режиме разработки:

\```bash
npm run dev
\```

Запуск тестов:

\```bash
npm run test
\```

## Скриншоты

_(добавить после деплоя)_

## Демо

_(ссылка на Vercel после деплоя)_