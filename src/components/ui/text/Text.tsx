import { type HTMLAttributes } from "react";
import { textVariants, type TextVariants } from "./text.variants";
import { cn } from "@/utils/cn";

type TextProps = HTMLAttributes<HTMLParagraphElement> & TextVariants;

export function Text({
  className,
  size,
  weight,
  muted,
  ...props
}: TextProps) {
  return (
    <p
      className={cn(textVariants({ size, weight, muted }), className)}
      {...props}
    />
  );
}
