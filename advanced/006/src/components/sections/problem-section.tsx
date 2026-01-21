"use client";

import { motion } from "framer-motion";
import { AlertCircle, Clock, TrendingDown, Users } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    title: "売上が伸び悩んでいる",
    description: "新規顧客の獲得コストが上がり続け、利益率が低下している。",
  },
  {
    icon: Clock,
    title: "業務に時間がかかりすぎる",
    description: "手作業が多く、本来やるべきことに集中できない。",
  },
  {
    icon: Users,
    title: "チームの生産性が低い",
    description: "情報共有がうまくいかず、同じミスを繰り返してしまう。",
  },
  {
    icon: AlertCircle,
    title: "競合に追い抜かれそう",
    description: "DX化が進まず、市場での競争力が落ちている。",
  },
];

export function ProblemSection() {
  return (
    <section className="py-20 md:py-32 bg-muted/50">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            こんなお悩み、ありませんか？
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            多くの企業が抱える課題を、私たちは解決してきました。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4 p-6 bg-background rounded-2xl shadow-sm border border-border/50"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <problem.icon className="h-6 w-6 text-destructive" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">{problem.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
