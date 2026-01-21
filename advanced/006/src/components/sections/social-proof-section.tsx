"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "田中 太郎",
    role: "株式会社ABC 代表取締役",
    content:
      "導入後、売上が2倍になりました。特にデータ分析機能が素晴らしく、これまで気づかなかった改善点が明確になりました。",
    rating: 5,
  },
  {
    name: "佐藤 花子",
    role: "XYZ株式会社 マーケティング部長",
    content:
      "チームの生産性が劇的に向上。月100時間以上の業務時間削減に成功し、より創造的な仕事に時間を使えるようになりました。",
    rating: 5,
  },
  {
    name: "鈴木 一郎",
    role: "DEF株式会社 CTO",
    content:
      "サポートの対応が迅速で、導入時の不安がすぐに解消されました。今では社内の必須ツールになっています。",
    rating: 5,
  },
];

const stats = [
  { value: "10,000+", label: "導入企業数" },
  { value: "98%", label: "継続率" },
  { value: "4.9", label: "平均評価", suffix: "/5" },
  { value: "150%", label: "平均売上UP" },
];

export function SocialProofSection() {
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
            導入企業様の声
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            多くの企業様にご満足いただいています。
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-background rounded-2xl shadow-sm"
            >
              <div className="text-3xl md:text-4xl font-bold text-cta">
                {stat.value}
                {stat.suffix && (
                  <span className="text-xl text-muted-foreground">
                    {stat.suffix}
                  </span>
                )}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-cta/30 mb-4" />
                  <p className="text-foreground mb-4">{testimonial.content}</p>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-cta text-cta"
                      />
                    ))}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
