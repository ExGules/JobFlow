import { useEffect, useState } from "react";

import { getJobs } from "@/shared/api/jobs";
import { PieChart } from "@mui/x-charts/PieChart";
import type { Job } from "@/entities/job/model/types";
import { getJobStats } from "@/shared/lib/job-stats";
import { Card } from "@/shared/ui/card";
import { PageLayout } from "@/shared/ui/page-layout";

export const AnalyticsPage = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    getJobs().then(setJobs).catch(console.error);
  }, []);

  const { totalJobs, activeJobs, offers, rejections } = getJobStats(jobs);

  const statusCounts = jobs.reduce<Record<string, number>>((acc, job) => {
    acc[job.status] = (acc[job.status] || 0) + 1;
    return acc;
  }, {});

  const pieData = Object.entries(statusCounts).map(
    ([status, count], index) => ({
      id: index,
      value: count,
      label: status,
    }),
  );

  return (
    <PageLayout>
      <div>
        <h1 className="text-3xl font-bold">Аналитика</h1>

        <p className="mt-2 text-[var(--color-text-secondary)]">
          Статистика по вашим вакансиям.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Card>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Всего вакансий
          </p>

          <p className="mt-2 text-3xl font-bold">{totalJobs}</p>
        </Card>

        <Card>
          <p className="text-sm text-[var(--color-text-secondary)]">Активные</p>

          <p className="mt-2 text-3xl font-bold">{activeJobs}</p>
        </Card>

        <Card>
          <p className="text-sm text-[var(--color-text-secondary)]">Офферы</p>

          <p className="mt-2 text-3xl font-bold">{offers}</p>
        </Card>

        <Card>
          <p className="text-sm text-[var(--color-text-secondary)]">Отказы</p>

          <p className="mt-2 text-3xl font-bold">{rejections}</p>
        </Card>
      </div>
      <Card className="mt-8">
        <h2 className="text-xl font-semibold mb-4">
          Распределение по статусам
        </h2>

        {pieData.length === 0 ? (
          <p className="text-[var(--color-text-secondary)]">
            Пока нет данных для отображения.
          </p>
        ) : (
          <PieChart
            series={[
              {
                data: pieData,
                highlightScope: { fade: "global", highlight: "item" },
              },
            ]}
            height={300}
          />
        )}
      </Card>
    </PageLayout>
  );
};
