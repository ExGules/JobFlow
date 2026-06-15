import { PageLayout } from "@/shared/ui/page-layout";
import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";

export const LandingPage = () => {
  return (
    <PageLayout>
      <h1 className="text-4xl font-bold">
        JobFlow
      </h1>

      <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
        Отслеживайте вакансии, проходите собеседования и получайте офферы.
      </p>

      <div className="mt-8 max-w-md">
        <Card>
          <Input
            placeholder="Поиск вакансии..."
          />

          <Button className="mt-4 w-full">
            Начать работу
          </Button>
        </Card>
      </div>
    </PageLayout>
  );
};