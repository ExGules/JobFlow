import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { supabase } from "@/shared/api/supabase";
import { Container } from "@/shared/ui/container";

export const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setIsAuthenticated(!!user);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setIsAuthenticated(!!session?.user);
      },
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  return (
    <header className="border-b border-[var(--color-border)] bg-white">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            to="/"
            className="text-xl font-bold text-[var(--color-text)]"
          >
            JobFlow
          </Link>

          <nav className="flex items-center gap-6">
            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  className="text-sm font-medium text-[var(--color-text)] transition-colors hover:text-[var(--color-primary)]"
                >
                  Вакансии
                </Link>
                <Link
                  to="/analytics"
                  className="text-sm font-medium text-[var(--color-text)] transition-colors hover:text-[var(--color-primary)]"
                >
                  Аналитика
                </Link>
              </>
            ) : (
              <Link
                to="/auth"
                className="text-sm font-medium text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-hover)]"
              >
                Войти
              </Link>
            )}
          </nav>
        </div>
      </Container>
    </header>
  );
};