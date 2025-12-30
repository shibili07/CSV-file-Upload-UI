import { cva, type VariantProps } from "class-variance-authority";

export const textVariants = cva("text-gray-900", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    muted: {
      true: "text-gray-500",
    },
  },
  defaultVariants: {
    size: "base",
    weight: "normal",
  },
});

export type TextVariants = VariantProps<typeof textVariants>;
