import { PageLayout } from "@/shared/ui/page-layout";

export const DashboardPage = () => {
  return (
    <PageLayout>
      <h1 className="text-3xl font-bold">
        Панель управления
      </h1>

      <p className="mt-4 text-[var(--color-text-secondary)]">
        Вы успешно вошли в систему.
      </p>
    </PageLayout>
  );
};