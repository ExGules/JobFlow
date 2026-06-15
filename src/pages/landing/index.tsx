import { Button } from "@/shared/ui/button";
import { PageLayout } from "@/shared/ui/page-layout";

export const LandingPage = () => {
  return (
    <PageLayout>
      <h1 className="text-4xl font-bold">
        JobFlow
      </h1>

      <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
        Отслеживайте вакансии, проходите собеседования и получайте офферы.
      </p>

      <Button className="mt-8">
        Начать работу
      </Button>
    </PageLayout>
  );
};