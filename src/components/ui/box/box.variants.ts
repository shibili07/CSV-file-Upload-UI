import { cva, type VariantProps } from "class-variance-authority";

export const boxVariants = cva("w-full", {
  variants: {
    padding: {
      none: "p-0",
      sm: "p-2",
      md: "p-4",
      lg: "p-6",
    },
    border: {
      none: "border-0",
      default: "border border-gray-200",
      subtle: "border border-gray-100",
    },
    background: {
      transparent: "bg-transparent",
      white: "bg-white",
      muted: "bg-gray-50",
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
    },
  },
  defaultVariants: {
    padding: "md",
    border: "none",
    background: "transparent",
    rounded: "none",
  },
});

export type BoxVariants = VariantProps<typeof boxVariants>;
