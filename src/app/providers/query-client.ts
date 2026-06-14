// Добавление и настройка QueryClient для использования с React Query в приложении.

import { QueryClient } from "@tanstack/react-query"; 

export const queryClient = new QueryClient({ 
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 1000 * 60,
      refetchOnWindowFocus: false,
    },
  },
});