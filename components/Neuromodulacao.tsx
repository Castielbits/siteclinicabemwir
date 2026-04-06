import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";
import { neuroHighlights, neuroSpotlight } from "@/data/siteContent";

export default function Neuromodulacao() {
  return (
    <section id="neuromodulacao" className="section-dark section-full">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <ScrollReveal>
              <SectionHeader
                eyebrow={neuroSpotlight.eyebrow}
                title={neuroSpotlight.title}
                description={neuroSpotlight.description}
                inverted
              />
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <p className="mt-8 max-w-xl text-base leading-8 text-white/55">
                {neuroSpotlight.note}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <Link
                href="/neuromodulacao"
                className="btn-primary btn-cream mt-8 inline-flex"
              >
                {neuroSpotlight.ctaLabel}
                <ArrowRight size={16} />
              </Link>
            </ScrollReveal>
          </div>

          <div className="grid gap-6">
            {neuroHighlights.map((item, index) => (
              <ScrollReveal key={item.title} delay={index + 1}>
                <article className="border-l-2 border-white/15 pl-8 py-2">
                  <h3 className="font-serif text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/55">
                    {item.text}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
