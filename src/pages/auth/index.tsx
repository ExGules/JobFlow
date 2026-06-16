import { useState } from "react";
import { Card } from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { PageLayout } from "@/shared/ui/page-layout";

export const AuthPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isRegister, setIsRegister] = useState(false);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log({
            email,
            password,
            mode: isRegister ? "register" : "login",
        })
    };
  return (
    <PageLayout>
      <div className="mx-auto max-w-md">
        <Card>
          <h1 className="text-2xl font-bold">
            Добро пожаловать в JobFlow
          </h1>

          <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
            {isRegister
            ? "Создайте аккаунт для начала работы."
            : "Войдите в свой аккаунт, чтобы продолжить."}
          </p>

          <form
          onSubmit={handleSubmit}
          className="mt-6 space-y-4"
          >
            <div>
              <label className="mb-2 block text-sm font-medium">
                Email
              </label>

              <Input
              type="email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
            }
            placeholder="example@mail.com"
            />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Пароль
              </label>

              <Input
              type="password"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
            }
            placeholder="Введите пароль"
            />
            </div>

            <Button className="w-full">
            {isRegister
            ? "Зарегистрироваться"
            : "Войти"}
            </Button>
          </form>

          <p className="mt-4 text-center text-sm text-[var(--color-text-secondary)]">
            Нет аккаунта?{" "}
            <button
            type="button"
            onClick={() =>
                setIsRegister(!isRegister)
            }
            className="font-medium text-[var(--color-primary)]"
            >
            {isRegister
            ? "Уже есть аккаунт?"
            : "Зарегистрироваться"}
            </button>
          </p>
        </Card>
      </div>
    </PageLayout>
  );
};