'use client';

import { useState } from 'react';
import type { FAQItem } from '@/lib/types';
import { generateFAQSchema } from '@/lib/schema/generators';
import { InlineSchema } from './SchemaGenerator';

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
  className?: string;
}

/**
 * FAQ Section with accordion UI and JSON-LD schema
 */
export function FAQSection({
  faqs,
  title = 'Frequently Asked Questions',
  subtitle,
  className = '',
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
      <section className={`py-16 ${className}`}>
        <div className="max-w-3xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">{title}</h2>
            {subtitle && <p className="text-text-secondary text-lg">{subtitle}</p>}
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-white/10 rounded-xl overflow-hidden bg-dark-100/50"
              >
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-dark-200/50 transition-colors duration-200"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-medium text-text-primary">{faq.question}</span>
                  <span
                    className={`text-2xl text-text-secondary transition-transform duration-200 ${
                      openIndex === index ? 'rotate-45' : ''
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 text-text-secondary leading-relaxed">
                    {faq.answer}
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

/**
 * Simple FAQ list without accordion (for static pages)
 */
export function FAQList({ faqs, className = '' }: { faqs: FAQItem[]; className?: string }) {
  if (faqs.length === 0) return null;

  const schema = generateFAQSchema(faqs);

  return (
    <>
      <InlineSchema schema={schema} />
      <div className={`space-y-6 ${className}`}>
        {faqs.map((faq, index) => (
          <div key={index}>
            <h3 className="font-medium text-text-primary mb-2">{faq.question}</h3>
            <p className="text-text-secondary">{faq.answer}</p>
          </div>
        ))}
      </div>
    </>
  );
}
