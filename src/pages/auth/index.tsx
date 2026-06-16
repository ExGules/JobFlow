import { useState } from "react";
import { Card } from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { PageLayout } from "@/shared/ui/page-layout";
import { useNavigate } from "react-router-dom";
import { signIn, signUp } from "@/shared/api/auth";

export const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");
    setIsLoading(true);

    try {
      if (isRegister) {
        await signUp(email, password);

        alert("Аккаунт успешно создан. Теперь выполните вход.");
        setEmail("");
        setPassword("");
        setIsRegister(false);
      } else {
        await signIn(email, password);

        navigate("/dashboard");
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : "Произошла ошибка");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <PageLayout>
      <div className="mx-auto max-w-md">
        <Card>
          <h1 className="text-2xl font-bold">Добро пожаловать в JobFlow</h1>

          <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
            {isRegister
              ? "Создайте аккаунт для начала работы."
              : "Войдите в свой аккаунт, чтобы продолжить."}
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium">Email</label>

              <Input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="example@mail.com"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Пароль</label>

              <Input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Введите пароль"
              />
            </div>

            <Button className="w-full" disabled={isLoading}>
              {isLoading
                ? "Загрузка..."
                : isRegister
                  ? "Зарегистрироваться"
                  : "Войти"}
            </Button>
            {error && <p className="text-sm text-red-600">{error}</p>}
          </form>

          <p className="mt-4 text-center text-sm text-[var(--color-text-secondary)]">
            {isRegister ? "Уже есть аккаунт?" : "Нет аккаунта?"}{" "}
            <button
              type="button"
              onClick={() => setIsRegister(!isRegister)}
              className="font-medium text-[var(--color-primary)]"
            >
              {isRegister ? "Войти" : "Зарегистрироваться"}
            </button>
          </p>
        </Card>
      </div>
    </PageLayout>
  );
};
