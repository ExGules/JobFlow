import { createBrowserRouter } from "react-router-dom";

import { LandingPage } from "@/pages/landing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
]);