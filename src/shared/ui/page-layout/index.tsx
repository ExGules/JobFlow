import type { PropsWithChildren } from "react";

import { Container } from "@/shared/ui/container";

type PageLayoutProps = PropsWithChildren;

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <main className="min-h-screen py-10">
      <Container>{children}</Container>
    </main>
  );
};