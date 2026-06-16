import { Link } from "react-router-dom";

import { Container } from "@/shared/ui/container";

export const Header = () => {
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

          <Link
            to="/auth"
            className="text-sm font-medium text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-hover)]"
          >
            Войти
          </Link>
        </div>
      </Container>
    </header>
  );
};