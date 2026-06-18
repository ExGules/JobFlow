import { Navigate } from "react-router-dom";

import { useAuthStore } from "@/features/auth/model/auth-store";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

export const ProtectedRoute = ({
  children,
}: ProtectedRouteProps) => {
  const user = useAuthStore((state) => state.user);
  const isLoading = useAuthStore((state) => state.isLoading);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Загрузка...
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return children;
};