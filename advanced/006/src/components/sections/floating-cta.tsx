"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CTAButton } from "@/components/ui/cta-button";
import { X } from "lucide-react";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px
      if (window.scrollY > 500 && !isDismissed) {
        setIsVisible(true);
      } else if (window.scrollY <= 500) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-background via-background to-transparent md:bg-none"
        >
          <div className="max-w-lg mx-auto flex items-center gap-4 p-4 bg-card/95 backdrop-blur-lg rounded-2xl shadow-2xl shadow-cta/20 border border-border/50">
            <div className="flex-1">
              <div className="text-sm font-medium">今だけ30%OFF</div>
              <div className="text-xs text-muted-foreground">
                残り3日で終了
              </div>
            </div>
            <CTAButton size="sm" showArrow>
              無料で始める
            </CTAButton>
            <button
              onClick={handleDismiss}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="閉じる"
            >
              <X className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
