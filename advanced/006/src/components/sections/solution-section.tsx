"use client";

import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/cta-button";
import { Check, Rocket, BarChart3, Zap } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "かんたん導入",
    description: "専門知識不要。3分で設定完了し、すぐに使い始められます。",
  },
  {
    icon: BarChart3,
    title: "データ分析",
    description: "AIが自動でデータを分析し、最適な施策を提案します。",
  },
  {
    icon: Zap,
    title: "業務自動化",
    description: "繰り返し作業を自動化し、年間1,000時間以上を削減。",
  },
];

const benefits = [
  "売上平均150%アップを実現",
  "業務時間を50%削減",
  "顧客満足度98%を維持",
  "24時間365日サポート",
];

export function SolutionSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-cta">すべて解決</span>できます
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            10,000社以上の導入実績を持つソリューションで、
            あなたのビジネスを成長させます。
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-8 rounded-2xl bg-gradient-to-b from-muted/50 to-transparent border border-border/50"
            >
              <div className="w-16 h-16 rounded-2xl bg-cta/10 flex items-center justify-center mx-auto mb-6">
                <feature.icon className="h-8 w-8 text-cta" />
              </div>
              <h3 className="font-semibold text-xl mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Benefits list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-cta/20 flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-cta" />
                </div>
                <span className="font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <CTAButton size="lg" microCopy="クレジットカード不要">
            今すぐ無料で試す
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
}
