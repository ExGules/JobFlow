import type { Job } from "@/entities/job/model/types";

export const getJobStats = (jobs: Job[]) => {
  const totalJobs = jobs.length;

  const activeJobs = jobs.filter(
    (job) => !["Оффер", "Отказ"].includes(job.status),
  ).length;

  const offers = jobs.filter((job) => job.status === "Оффер").length;

  const rejections = jobs.filter((job) => job.status === "Отказ").length;

  return { totalJobs, activeJobs, offers, rejections };
};