"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ArrowRight, Sparkles } from "lucide-react";

const ctaButtonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-cta text-cta-foreground shadow-lg shadow-cta-glow hover:bg-cta-hover hover:shadow-xl hover:shadow-cta-glow hover:scale-105",
        secondary:
          "border-2 border-cta bg-transparent text-cta hover:bg-cta hover:text-cta-foreground",
        floating:
          "bg-cta text-cta-foreground shadow-2xl shadow-cta-glow hover:bg-cta-hover fixed bottom-6 left-1/2 -translate-x-1/2 z-50",
      },
      size: {
        default: "h-12 px-8 text-base",
        sm: "h-10 px-6 text-sm",
        lg: "h-14 px-10 text-lg",
        xl: "h-16 px-12 text-xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface CTAButtonProps
  extends Omit<HTMLMotionProps<"button">, "children">,
    VariantProps<typeof ctaButtonVariants> {
  children: React.ReactNode;
  showArrow?: boolean;
  showSparkle?: boolean;
  microCopy?: string;
  pulse?: boolean;
}

const CTAButton = React.forwardRef<HTMLButtonElement, CTAButtonProps>(
  (
    {
      className,
      variant,
      size,
      children,
      showArrow = true,
      showSparkle = false,
      microCopy,
      pulse = false,
      ...props
    },
    ref
  ) => {
    return (
      <div className="relative inline-flex flex-col items-center gap-2">
        {microCopy && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-muted-foreground flex items-center gap-1"
          >
            <Sparkles className="h-3 w-3 text-cta" />
            {microCopy}
          </motion.span>
        )}
        <motion.button
          ref={ref}
          className={cn(ctaButtonVariants({ variant, size, className }))}
          whileHover={{ scale: variant === "floating" ? 1.05 : 1.02 }}
          whileTap={{ scale: 0.98 }}
          {...props}
        >
          {pulse && (
            <motion.span
              className="absolute inset-0 rounded-xl bg-cta"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.7, 0, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}
          {showSparkle && <Sparkles className="h-5 w-5" />}
          <span className="relative z-10">{children}</span>
          {showArrow && (
            <motion.span
              className="relative z-10"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="h-5 w-5" />
            </motion.span>
          )}
        </motion.button>
      </div>
    );
  }
);
CTAButton.displayName = "CTAButton";

export { CTAButton, ctaButtonVariants };
