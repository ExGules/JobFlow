import { Link } from "react-router-dom";

import { Container } from "@/shared/ui/container";

export const Header = () => {
  return (
    <header className="border-b">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            to="/"
            className="text-xl font-bold"
          >
            JobFlow
          </Link>

          <Link
            to="/login"
            className="text-sm font-medium"
          >
            Войти
          </Link>
        </div>
      </Container>
    </header>
  );
};