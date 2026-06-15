import type { PropsWithChildren } from "react";

type CardProps = PropsWithChildren;

export const Card = ({ children }: CardProps) => {
  return (
    <div
      className="
        rounded-xl
        border
        border-[var(--color-border)]
        bg-white
        p-6
        shadow-sm
      "
    >
      {children}
    </div>
  );
};