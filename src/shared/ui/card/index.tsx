import type { PropsWithChildren } from "react";

type CardProps = PropsWithChildren<{
  className?: string;
}>;

export const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div
      className={`
        rounded-xl
        border
        border-[var(--color-border)]
        bg-white
        p-6
        shadow-sm
        ${className}
      `}
    >
      {children}
    </div>
  );
};