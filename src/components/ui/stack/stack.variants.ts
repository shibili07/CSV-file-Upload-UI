import { cva, type VariantProps } from "class-variance-authority";

export const stackVariants = cva("flex", {
  variants: {
    direction: {
      vertical: "flex-col",
      horizontal: "flex-row",
    },
    gap: {
      xs: "gap-1",
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-6",
      xl: "gap-8",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
    },
  },
  defaultVariants: {
    direction: "vertical",
    gap: "md",
  },
});

export type StackVariants = VariantProps<typeof stackVariants>;
