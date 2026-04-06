import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import NeuralNetworkBackground from "@/components/NeuralNetworkBackground";
import { heroContent, siteConfig } from "@/data/siteContent";

const dotColors = ["bg-butter", "bg-blush", "bg-sage", "bg-butter"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden section-dark flex min-h-screen items-center pt-24 pb-20">
      <NeuralNetworkBackground />

      {/* Organic color blobs */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-[50vw] h-[50vw] rounded-full bg-butter/6 blur-[100px]" />
        <div className="absolute -bottom-16 -left-16 w-[40vw] h-[40vw] rounded-full bg-blush/5 blur-[80px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 sm:px-10 flex flex-col items-center text-center">

        <ScrollReveal>
          <p className="eyebrow eyebrow-line light text-white/50 justify-center">
            {heroContent.eyebrow}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <h1 className="heading-serif mt-8 text-5xl sm:text-6xl lg:text-[5rem] text-white">
            {heroContent.title}
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
            {heroContent.intro}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={3}>
          <p className="mt-4 max-w-xl text-base leading-7 text-white/45">
            {heroContent.body}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={4}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="#elegibilidade" className="btn-primary btn-cream">
              {siteConfig.primaryCtaLabel}
              <ArrowRight size={16} />
            </Link>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary btn-outline-light"
            >
              {siteConfig.secondaryCtaLabel}
              <ArrowUpRight size={16} />
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={5}>
          <div className="mt-14 flex flex-wrap justify-center gap-3">
            {heroContent.badges.map((item, i) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-xs font-semibold tracking-wide text-white/70"
              >
                <span className={`h-1.5 w-1.5 rounded-full flex-shrink-0 ${dotColors[i % dotColors.length]}`} />
                {item}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10" aria-hidden="true">
        <div className="h-9 w-px bg-white/15" />
        <span className="eyebrow text-white/25" style={{ fontSize: "0.52rem" }}>rolar</span>
      </div>
    </section>
  );
}
