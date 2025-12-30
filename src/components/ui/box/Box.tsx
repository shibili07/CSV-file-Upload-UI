import { type ElementType, type HTMLAttributes } from "react";
import { boxVariants, type BoxVariants } from "./box.variants";
import { cn } from "@/utils/cn";

type BoxProps<T extends ElementType = "div"> = {
  as?: T;
} & BoxVariants &
  HTMLAttributes<HTMLElement>;

export function Box<T extends ElementType = "div">({
  as,
  className,
  padding,
  border,
  background,
  rounded,
  ...props
}: BoxProps<T>) {
  const Component = as || "div";

  return (
    <Component
      className={cn(
        boxVariants({ padding, border, background, rounded }),
        className
      )}
      {...props}
    />
  );
}
