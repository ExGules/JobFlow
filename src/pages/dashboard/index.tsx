import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { signOut } from "@/shared/api/auth";
import { createJob, getJobs } from "@/shared/api/jobs";
import { supabase } from "@/shared/api/supabase";
import type { Job } from "@/entities/job/model/types";

import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";
import { PageLayout } from "@/shared/ui/page-layout";

export const DashboardPage = () => {
  const navigate = useNavigate();

  const [jobs, setJobs] = useState<Job[]>([]);
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [notes, setNotes] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Загружаем вакансии при открытии страницы
  useEffect(() => {
    getJobs().then(setJobs).catch(console.error);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut();
      navigate("/auth");
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreateJob = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");

    if (!company || !position) {
      setMessage("Заполните обязательные поля.");
      return;
    }

    try {
      setIsLoading(true);

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) throw new Error("Пользователь не найден.");

      const newJob = await createJob({
        user_id: user.id,
        company,
        position,
        notes,
      });

      // Добавляем новую вакансию в список без перезагрузки
      setJobs((prev) => [newJob, ...prev]);

      setCompany("");
      setPosition("");
      setNotes("");
      setMessage("Вакансия успешно добавлена.");
    } catch (error) {
      console.error(error);
      setMessage(
        error instanceof Error
          ? error.message
          : "Не удалось добавить вакансию.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageLayout>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Панель управления</h1>
          <p className="mt-2 text-[var(--color-text-secondary)]">
            Отслеживайте свои вакансии.
          </p>
        </div>
        <Button type="button" onClick={handleLogout}>
          Выйти
        </Button>
      </div>

      <Card className="mt-8">
        <h2 className="text-xl font-semibold">Добавить вакансию</h2>
        <form onSubmit={handleCreateJob} className="mt-6 space-y-4">
          <Input
            placeholder="Компания"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <Input
            placeholder="Должность"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
          <Input
            placeholder="Заметки"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Добавление..." : "Добавить вакансию"}
          </Button>
        </form>
        {message && <p className="mt-4 text-sm">{message}</p>}
      </Card>

      {/* Список вакансий */}
      <div className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">Мои вакансии ({jobs.length})</h2>
        {jobs.length === 0 ? (
          <p className="text-[var(--color-text-secondary)]">
            Вакансий пока нет.
          </p>
        ) : (
          jobs.map((job) => (
            <Card key={job.id}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{job.company}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    {job.position}
                  </p>
                  {job.notes && <p className="text-sm mt-1">{job.notes}</p>}
                </div>
                <span className="text-sm px-3 py-1 rounded-full bg-[var(--color-bg-secondary)]">
                  {job.status}
                </span>
              </div>
            </Card>
          ))
        )}
      </div>
    </PageLayout>
  );
};
