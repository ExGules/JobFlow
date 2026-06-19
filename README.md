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

                                                                           Спринт 4:

Что сделано 18.06.2026
--AuthStore--

Создал глобальное состояние:
src/features/auth/model/auth-store.ts
AuthProvider

Создал:
src/app/providers/auth-provider.tsx
Он:

При запуске:
supabase.auth.getUser()
записывает пользователя в Zustand.
Отслеживает изменения:
supabase.auth.onAuthStateChange()
реагирует на:
Вход
Выход
Обновление сессии
Восстановление после F5

Проверил:

F5 работает

Создал
src/app/router/protected-route.tsx
Очистил LocalStorage
Открыл /dashboard
Перекинуло на /auth

Выход из системы:
Кнопка выйти
supabase.auth.signOut() завершил сессию
Очистка состояния Zustand
Редирект на /auth

                                                                        Спринт 5:

Что сделано 20.06.2026

---Supabase---

Создана таблица jobs с полями id, user_id, company, position, status, notes, applied_at, created_at
Настроены RLS политики — каждый пользователь видит только свои вакансии

API (jobs.ts)

createJob() — создание вакансии с привязкой к пользователю
getJobs() — получение вакансий текущего пользователя, отсортированных по дате

Dashboard

Форма добавления вакансии (компания, должность, заметки)
После добавления вакансия сразу появляется в списке без перезагрузки страницы
Список карточек с названием компании, должностью, заметками и статусом

Авторизация ✅
Защита маршрутов ✅
Выход из аккаунта ✅
Подключение Supabase ✅
Создание вакансий ✅
Отображение вакансий ✅
