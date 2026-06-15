import { PageLayout } from "@/shared/ui/page-layout";

export const LandingPage = () => {
  return (
    <PageLayout>
      <h1 className="text-4xl font-bold">JobFlow</h1>

      <p className="mt-4 text-lg text-gray-600">
        Отслеживайте вакансии, проходите собеседования и получайте офферы.
      </p>
    </PageLayout>
  );
};