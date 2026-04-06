import ScrollReveal from "@/components/ScrollReveal";
import { testimonialsSection } from "@/data/siteContent";

function Stars() {
  return (
    <div className="flex gap-1" aria-label="5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FBBC04" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Depoimentos() {
  return (
    <section className="section-cream section-full">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">

        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
            <div>
              <p className="eyebrow eyebrow-line dark text-dark/50 mb-5">
                {testimonialsSection.eyebrow}
              </p>
              <h2 className="heading-serif text-3xl sm:text-4xl text-ink max-w-xl">
                {testimonialsSection.title}
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-7 text-muted sm:text-right">
              {testimonialsSection.description}
            </p>
          </div>
        </ScrollReveal>

        {/* Google-style review cards */}
        <div className="grid gap-5 sm:grid-cols-3">
          {testimonialsSection.reviews.map((review, index) => (
            <ScrollReveal key={review.name} delay={index + 1}>
              <article className="flex flex-col gap-5 rounded-2xl bg-white border border-dark/6 p-7 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.07)] transition-shadow duration-300">
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div className={`h-10 w-10 flex-shrink-0 rounded-full ${review.color} flex items-center justify-center`}>
                    <span className="font-serif text-base font-bold text-ink/60">
                      {review.initial}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-ink">{review.name}</p>
                    <Stars />
                  </div>
                </div>
                {/* Quote */}
                <p className="text-sm leading-7 text-muted flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Consent note */}
        <ScrollReveal delay={2}>
          <p className="mt-8 text-xs text-muted/60 text-center">
            {testimonialsSection.note}
          </p>
        </ScrollReveal>

      </div>
    </section>
  );
}
