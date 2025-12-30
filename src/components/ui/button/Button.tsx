import { type ButtonHTMLAttributes } from "react";
import { buttonVariants, type ButtonVariants } from "./button.variants";
import { cn } from "@/utils/cn";

type ButtonProps =
  ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants & {
    loading?: boolean;
  };

export function Button({
  loading,
  children,
  className,
  disabled,
  variant,
  size,
  fullWidth,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, fullWidth }), className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
