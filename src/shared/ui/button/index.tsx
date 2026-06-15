import type { ButtonHTMLAttributes } from "react";
import { clsx } from "clsx";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        `
        inline-flex
        items-center
        justify-center
        rounded-lg
        px-4
        py-2
        text-sm
        font-medium
        transition-colors

        bg-[var(--color-primary)]
        text-white

        hover:bg-[var(--color-primary-hover)]

        disabled:cursor-not-allowed
        disabled:opacity-50
        `,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};