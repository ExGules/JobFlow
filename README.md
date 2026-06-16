                                                                             Спринт 1:

Что сделано 14.06.2026:

Создан проект на React + TypeScript + Vite : JobFlow
Подключён Tailwind CSS v4
Настроены alias через @
Подключён React Query : query-client.ts
Настроен React Router : router.tsx
Создана первая страница : landing/ index.tsx
Начата структура проекта по FSD Light:

src/
app/
├── providers/
└──query-client.ts
├── router/
└──router.tsx
├── styles/
└── globals.css
assets/
pages/
├── landing/
└──index.tsx
├── dashboard/
├── jobs/
├── analytics/
├── auth/
widgets/
features/
entities/
shared/
├── api/
├── hooks/
├── lib/
├── types/
├── constants/
├── ui/container/
└──index.tsx
App.tsx
main.tsx

Сделан первый UI-компонент (Container): ui/container/index.tsx

                                                                            Спринт 2:

Что сделано 15.06.2026:

Создан компонент PageLayout
src/shared/ui/page-layout/index.tsx
В нем:
-единый каркас страниц приложения
-подключение общих элементов интерфейса
-обеспечение одинаковой структуры всех экранов

В дальнейшем через него будут отображаться:

-Dashboard-
-Jobs-
-Analytics-
-Auth-

Создан Header
src/widgets/header/index.tsx
Реализована базовая шапка приложения:

-логотип JobFlow-
-ссылка на страницу авторизации (Вход)-

Header подключён в PageLayout и отображается на всех страницах.
В проект добавлена единая цветовая палитра.
Определены CSS-переменные:

--color-primary
--color-primary-hover
--color-background
--color-surface
--color-text
--color-text-secondary
--color-border

Создание базовых UI-компонентов:

--Button--
src/shared/ui/button/index.tsx
Используется для всех действий пользователя

--Input--
src/shared/ui/input/index.tsx
Используется для форм авторизации, поиска и создания вакансий.

--Card--
src/shared/ui/card/index.tsx
Используется для отображения:
вакансий
аналитики
карточек статистики
форм
Создание Landing Page v1

Добавлены:

Hero-блок
название проекта
описание
кнопку действия
Блок преимуществ

Отображает основные возможности приложения:

управление вакансиями
контроль собеседований
аналитика откликов

                                                                            Спринт 3:

Что сделано 16.06.2026:

--UI--
Страница авторизации
Переключение режимов:
Вход ↔ Регистрация
Управляемая форма

--Supabase--
Создан проект
Подключён клиент Supabase
Настроены переменные окружения
VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY

--Логика--
Регистрация пользователя
supabase.auth.signUp()
Вход пользователя
supabase.auth.signInWithPassword()
Обработка ошибок
Состояние загрузки
Очистка формы после регистрации

--Навигация--
Переход:
/ → /auth → /dashboard

Пользователь открыл сайт
↓
Перешёл на страницу входа
↓
Зарегистрировался
↓
Вошёл в систему
↓
Попал в Dashboard
