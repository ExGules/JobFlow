import { Card } from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { PageLayout } from "@/shared/ui/page-layout";

export const AuthPage = () => {
  return (
    <PageLayout>
      <div className="mx-auto max-w-md">
        <Card>
          <h1 className="text-2xl font-bold">
            Добро пожаловать в JobFlow
          </h1>

          <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
            Войдите в свой аккаунт, чтобы продолжить.
          </p>

          <form className="mt-6 space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Email
              </label>

              <Input
                type="email"
                placeholder="example@mail.com"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Пароль
              </label>

              <Input
                type="password"
                placeholder="Введите пароль"
              />
            </div>

            <Button className="w-full">
              Войти
            </Button>
          </form>

          <p className="mt-4 text-center text-sm text-[var(--color-text-secondary)]">
            Нет аккаунта?{" "}
            <button
              type="button"
              className="font-medium text-[var(--color-primary)]"
            >
              Зарегистрироваться
            </button>
          </p>
        </Card>
      </div>
    </PageLayout>
  );
};