import { useNavigate } from "react-router-dom";

import { signOut } from "@/shared/api/auth";

import { Button } from "@/shared/ui/button";
import { PageLayout } from "@/shared/ui/page-layout";

export const DashboardPage = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut();

      navigate("/auth");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PageLayout>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Панель управления
          </h1>

          <p className="mt-2 text-[var(--color-text-secondary)]">
            Вы успешно вошли в систему.
          </p>
        </div>

        <Button
          type="button"
          onClick={handleLogout}
        >
          Выйти
        </Button>
      </div>
    </PageLayout>
  );
};