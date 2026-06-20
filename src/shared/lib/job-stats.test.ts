import { describe, it, expect } from "vitest";
import { getJobStats } from "./job-stats";
import type { Job } from "@/entities/job/model/types";

const mockJobs: Job[] = [
  {
    id: "1",
    user_id: "u1",
    company: "NSKras",
    position: "Frontend",
    status: "Откликнулся",
    notes: "",
    applied_at: "2026-01-01",
    created_at: "2026-01-01",
  },
  {
    id: "2",
    user_id: "u1",
    company: "Yandex",
    position: "Backend",
    status: "Оффер",
    notes: "",
    applied_at: "2026-01-02",
    created_at: "2026-01-02",
  },
  {
    id: "3",
    user_id: "u1",
    company: "Avito",
    position: "Fullstack",
    status: "Отказ",
    notes: "",
    applied_at: "2026-01-03",
    created_at: "2026-01-03",
  },
];

describe("getJobStats", () => {
  it("корректно считает общее количество вакансий", () => {
    const stats = getJobStats(mockJobs);
    expect(stats.totalJobs).toBe(3);
  });

  it("корректно считает активные вакансии (без оффера и отказа)", () => {
    const stats = getJobStats(mockJobs);
    expect(stats.activeJobs).toBe(1);
  });

  it("корректно считает офферы", () => {
    const stats = getJobStats(mockJobs);
    expect(stats.offers).toBe(1);
  });

  it("корректно считает отказы", () => {
    const stats = getJobStats(mockJobs);
    expect(stats.rejections).toBe(1);
  });

  it("возвращает нули для пустого списка вакансий", () => {
    const stats = getJobStats([]);
    expect(stats).toEqual({
      totalJobs: 0,
      activeJobs: 0,
      offers: 0,
      rejections: 0,
    });
  });
});