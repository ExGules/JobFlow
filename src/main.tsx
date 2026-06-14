import React from "react";
import ReactDOM from "react-dom/client";
import "@/app/styles/globals.css";

import { QueryClientProvider } from "@tanstack/react-query";

import App from "./App";

import { queryClient } from "@/app/providers/query-client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);