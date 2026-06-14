// Настройка маршрутизатора для приложения с использованием React Router v6.

import { createBrowserRouter } from "react-router-dom";

import { LandingPage } from "@/pages/landing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
]);