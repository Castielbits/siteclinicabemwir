import ScrollReveal from "@/components/ScrollReveal";
import { conditions, conditionsSection } from "@/data/siteContent";

const dotColors = ["bg-butter", "bg-blush", "bg-sage"] as const;

export default function Problema() {
  return (
    <section id="para-quem" className="section-dark section-full relative overflow-hidden">
      <div className="absolute -top-20 right-0 w-[45vw] h-[45vw] rounded-full bg-blush/5 blur-[110px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 -left-10 w-[30vw] h-[30vw] rounded-full bg-butter/4 blur-[80px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10">

        {/* Header — 2 colunas */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end pb-16">
          <ScrollReveal>
            <p className="eyebrow eyebrow-line light text-white/50 mb-7">
              {conditionsSection.eyebrow}
            </p>
            <h2 className="heading-serif text-3xl text-white sm:text-4xl lg:text-[3.2rem]">
              {conditionsSection.title}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <div className="flex flex-col gap-5 lg:pb-1">
              <p className="text-lg leading-8 text-white/65">
                {conditionsSection.description}
              </p>
              <p className="text-base leading-8 text-white/40 italic">
                &ldquo;{conditionsSection.manifesto}&rdquo;
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Lista editorial de condições */}
        <div className="border-t border-white/10">
          {conditions.map((condition, index) => (
            <ScrollReveal key={condition.title} delay={Math.min(index, 4)}>
              <div className="group grid grid-cols-1 sm:grid-cols-[1fr_1fr] gap-3 sm:gap-10 items-baseline py-7 border-b border-white/8 transition-colors duration-300 hover:border-white/16 cursor-default">
                <div className="flex items-center gap-4">
                  <span className={`h-2 w-2 flex-shrink-0 rounded-full ${dotColors[index % 3]} opacity-80`} />
                  <h4 className="font-serif text-2xl sm:text-3xl font-bold text-white/85 group-hover:text-white transition-colors duration-200 leading-tight">
                    {condition.title}
                  </h4>
                </div>
                <p className="pl-6 sm:pl-0 text-sm leading-7 text-white/40 group-hover:text-white/55 transition-colors duration-200">
                  {condition.summary}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={2}>
          <div className="mt-14 flex justify-center">
            <a href="#elegibilidade" className="btn-primary btn-cream">
              Quero uma avaliação inicial
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
