import { type HTMLAttributes } from "react";
import { stackVariants, type StackVariants } from "./stack.variants";
import { cn } from "@/utils/cn";

type StackProps = HTMLAttributes<HTMLDivElement> & StackVariants;

export function Stack({
  className,
  direction,
  gap,
  align,
  justify,
  ...props
}: StackProps) {
  return (
    <div
      className={cn(
        stackVariants({ direction, gap, align, justify }),
        className
      )}
      {...props}
    />
  );
}
