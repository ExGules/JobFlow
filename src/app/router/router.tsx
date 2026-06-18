import { createBrowserRouter } from "react-router-dom";
import { AuthPage } from "@/pages/auth";
import { LandingPage } from "@/pages/landing";
import { DashboardPage } from "@/pages/dashboard";
import { ProtectedRoute } from "@/app/router/protected-route";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
  path: "/auth",
  element: <AuthPage />,
  },
  {
  path: "/dashboard",
  element: (
    <ProtectedRoute>
      <DashboardPage />
    </ProtectedRoute>
  ),
},
]);