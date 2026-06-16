import { createBrowserRouter } from "react-router-dom";
import { AuthPage } from "@/pages/auth";
import { LandingPage } from "@/pages/landing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
  path: "/auth",
  element: <AuthPage />,
},
]);