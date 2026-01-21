"use client";

import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/cta-button";
import { Shield, Clock, CreditCard } from "lucide-react";

const guarantees = [
  {
    icon: Shield,
    text: "30日間返金保証",
  },
  {
    icon: Clock,
    text: "3分で設定完了",
  },
  {
    icon: CreditCard,
    text: "初月無料",
  },
];

export function FinalCTASection() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cta/5 via-background to-cta/10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cta/20 rounded-full blur-3xl" />

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            今すぐ始めて、
            <span className="text-cta block mt-2">ビジネスを変えよう</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground mb-8"
          >
            10,000社以上が選んだソリューション。
            あなたの会社も、今日から変わります。
          </motion.p>

          {/* Guarantees */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-6 mb-10"
          >
            {guarantees.map((guarantee) => (
              <div
                key={guarantee.text}
                className="flex items-center gap-2 text-sm"
              >
                <guarantee.icon className="h-5 w-5 text-cta" />
                <span>{guarantee.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <CTAButton
              size="xl"
              pulse
              showSparkle
              microCopy="今だけ30%OFF - 残り3日"
            >
              無料トライアルを始める
            </CTAButton>
          </motion.div>

          {/* Trust text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xs text-muted-foreground mt-6"
          >
            クレジットカード不要 ・ いつでも解約可能 ・ 全機能が使える
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
