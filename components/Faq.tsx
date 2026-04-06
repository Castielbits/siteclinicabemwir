"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { faqs, faqSection } from "@/data/siteContent";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => setOpen((prev) => (prev === i ? null : i));

  return (
    <section id="faq" className="section-cream section-full relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[30vw] h-[30vw] rounded-full bg-blush/20 blur-[70px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 sm:px-10">

        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="eyebrow eyebrow-line dark text-dark/50 justify-center mb-5">
              {faqSection.eyebrow}
            </p>
            <h2 className="heading-serif text-3xl sm:text-4xl text-ink">
              {faqSection.title}
            </h2>
          </div>
        </ScrollReveal>

        <div className="divide-y divide-dark/8">
          {faqs.map((faq, index) => (
            <ScrollReveal key={faq.question} delay={Math.min(index, 3)}>
              <div>
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-start justify-between gap-6 py-6 text-left group"
                  aria-expanded={open === index}
                >
                  <span className="text-base font-semibold text-ink leading-7 group-hover:text-dark transition-colors duration-200">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 mt-1 h-6 w-6 rounded-full border border-dark/12 flex items-center justify-center text-dark/50 transition-colors duration-200 group-hover:border-dark/30 group-hover:text-dark">
                    {open === index
                      ? <Minus size={12} />
                      : <Plus size={12} />
                    }
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    open === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="pb-7 text-base leading-8 text-muted">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
