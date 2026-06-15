import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/card";
import { PageLayout } from "@/shared/ui/page-layout";

export const LandingPage = () => {
  return (
    <PageLayout>
      <section className="flex flex-col items-center py-16 text-center">
        <h1 className="text-5xl font-bold tracking-tight">
          JobFlow
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)]">
          Организуйте поиск работы в одном месте.
          Отслеживайте вакансии, собеседования и офферы без таблиц и блокнотов.
        </p>

        <Button className="mt-8">
          Начать работу
        </Button>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        <Card>
          <h3 className="font-semibold">
            Управление вакансиями
          </h3>

          <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
            Храните все вакансии в одном месте и не теряйте важные ссылки.
          </p>
        </Card>

        <Card>
          <h3 className="font-semibold">
            Контроль собеседований
          </h3>

          <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
            Следите за этапами отбора и планируйте следующие шаги.
          </p>
        </Card>

        <Card>
          <h3 className="font-semibold">
            Аналитика откликов
          </h3>

          <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
            Анализируйте количество откликов, интервью и полученных офферов.
          </p>
        </Card>
      </section>
    </PageLayout>
  );
};