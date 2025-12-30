import { type ButtonHTMLAttributes, type ElementType } from "react";
import { buttonVariants, type ButtonVariants } from "./button.variants";
import { cn } from "@/utils/cn";

type ButtonProps =
  ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants & {
    loading?: boolean;
    as?: ElementType;
  };

export function Button({
  loading,
  children,
  className,
  disabled,
  variant,
  size,
  fullWidth,
  as,
  ...props
}: ButtonProps) {
  const Component = as || "button";

  return (
    <Component
      className={cn(buttonVariants({ variant, size, fullWidth }), className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? "Loading..." : children}
    </Component>
  );
}
