"use client";

import { useState } from "react";
import Link from "next/link";
import type { FAQItem } from "@/lib/types";
import { generateFAQSchema } from "@/lib/schema/generators";
import { InlineSchema } from "./SchemaGenerator";

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export function FAQSection({
  faqs,
  title = "Frequently Asked Questions",
  subtitle,
  className = "",
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (faqs.length === 0) return null;

  const schema = generateFAQSchema(faqs);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <InlineSchema schema={schema} />
      <section className={`py-8 ${className}`}>
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-left">
            <p className="masthead-meta mb-4">Reader&rsquo;s questions</p>
            <h2 className="mb-4 font-serif text-4xl md:text-5xl">{title}</h2>
            {subtitle && (
              <p className="text-ink-secondary text-lg">{subtitle}</p>
            )}
          </div>

          <div className="border-t-2 border-ink">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-ink/20">
                <button
                  id={`faq-question-${index}`}
                  className="flex min-h-16 w-full items-center justify-between gap-6 py-6 text-left transition-colors duration-200 hover:text-primary"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-serif text-xl text-current md:text-2xl">
                    {faq.question}
                  </span>
                  <span
                    className="shrink-0 font-serif text-sm text-ink-muted"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}&ensp;
                    {openIndex === index ? "↑" : "↓"}
                  </span>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  aria-hidden={openIndex !== index}
                  className={`grid transition-[grid-template-rows,visibility] duration-300 ${
                    openIndex === index
                      ? "visible grid-rows-[1fr]"
                      : "invisible grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="max-w-2xl pb-7 pr-12 text-ink-secondary leading-relaxed">
                      {faq.answer}
                      {faq.learnMore && (
                        <Link
                          href={faq.learnMore.href}
                          className="mt-3 block text-sm font-semibold text-primary hover:underline"
                          tabIndex={openIndex === index ? 0 : -1}
                        >
                          {faq.learnMore.label ?? "Learn more"} &rarr;
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function FAQList({
  faqs,
  className = "",
}: {
  faqs: FAQItem[];
  className?: string;
}) {
  if (faqs.length === 0) return null;

  const schema = generateFAQSchema(faqs);

  return (
    <>
      <InlineSchema schema={schema} />
      <div className={`space-y-6 ${className}`}>
        {faqs.map((faq, index) => (
          <div key={index}>
            <h3 className="font-medium text-ink mb-2">{faq.question}</h3>
            <p className="text-ink-secondary">{faq.answer}</p>
          </div>
        ))}
      </div>
    </>
  );
}
