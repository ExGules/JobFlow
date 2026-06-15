import type { InputHTMLAttributes } from "react";
import { clsx } from "clsx";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  className,
  ...props
}: InputProps) => {
  return (
    <input
      className={clsx(
        `
        w-full
        rounded-lg
        border
        border-[var(--color-border)]
        bg-white

        px-4
        py-2

        text-sm

        outline-none

        transition-colors

        focus:border-[var(--color-primary)]
        `,
        className
      )}
      {...props}
    />
  );
};