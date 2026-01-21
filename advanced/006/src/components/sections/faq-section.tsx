"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CTAButton } from "@/components/ui/cta-button";

const faqs = [
  {
    question: "無料トライアルはありますか？",
    answer:
      "はい、30日間の無料トライアルをご用意しています。クレジットカードの登録は不要で、全機能をお試しいただけます。",
  },
  {
    question: "導入にどのくらい時間がかかりますか？",
    answer:
      "最短3分で初期設定が完了します。専門知識は不要で、ガイドに従って進めるだけで簡単に始められます。",
  },
  {
    question: "どのような企業に向いていますか？",
    answer:
      "スタートアップから大企業まで、あらゆる規模の企業様にご利用いただいています。特に、業務効率化や売上アップを目指す企業様に最適です。",
  },
  {
    question: "サポート体制はどうなっていますか？",
    answer:
      "24時間365日、専任のサポートチームが対応いたします。チャット、メール、電話でのお問い合わせが可能です。",
  },
  {
    question: "解約はいつでもできますか？",
    answer:
      "はい、いつでも解約可能です。解約手続きはマイページから簡単に行えます。解約後も30日間はデータを保持しますので、再開も簡単です。",
  },
  {
    question: "セキュリティは大丈夫ですか？",
    answer:
      "SOC 2 Type II認証を取得しており、銀行レベルの暗号化でデータを保護しています。定期的なセキュリティ監査も実施しています。",
  },
];

export function FAQSection() {
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
            よくあるご質問
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ご不明な点がございましたら、お気軽にお問い合わせください。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6">
            その他のご質問は、お気軽にお問い合わせください。
          </p>
          <CTAButton variant="secondary" showArrow={false}>
            お問い合わせ
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
}
