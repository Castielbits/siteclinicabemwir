import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import BotanicalLineArt from "@/components/BotanicalLineArt";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SectionHeader from "@/components/SectionHeader";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  neuroFlow,
  neuroIndications,
  neuroMechanisms,
  neuroPageContent,
  siteConfig,
} from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Neuromodulação",
  description:
    "Entenda como a neuromodulação entra no método Bem-wir e por que ela não é tratada como um recurso isolado.",
  openGraph: {
    title: "Bem-wir | Neuromodulação",
    description:
      "Explicação clara sobre como a neuromodulação atua e como ela se integra à fisioterapia especializada em neurociências e à psicologia.",
  },
};

export default function NeuromodulacaoPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 sm:pt-32">
        <section className="section-pad overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="relative overflow-hidden rounded-[40px] bg-[linear-gradient(135deg,rgba(255,255,255,0.98)_0%,rgba(240,235,246,0.96)_54%,rgba(249,247,252,0.98)_100%)] p-6 shadow-[0_24px_60px_rgba(95,36,131,0.1)] sm:p-8 lg:p-10">
              <BotanicalLineArt className="absolute -right-2 top-8 hidden h-56 w-28 opacity-55 lg:block" />
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div>
                  <div className="inline-flex items-center gap-3 rounded-full bg-[rgba(95,36,131,0.9)] px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--color-paper)]">
                    <span className="h-2 w-2 rounded-full bg-[color:var(--color-butter)]" />
                    {neuroPageContent.heroEyebrow}
                  </div>
                  <h1 className="headline-balance mt-7 font-montserrat text-4xl font-black leading-[0.98] text-[color:var(--color-ink)] sm:text-5xl lg:text-6xl">
                    {neuroPageContent.heroTitle}
                  </h1>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--color-muted)]">
                    {neuroPageContent.heroIntro}
                  </p>
                  <p className="mt-3 max-w-xl text-base leading-8 text-[color:var(--color-muted)]">
                    {neuroPageContent.heroNote}
                  </p>
                  <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                    <Link href="/#elegibilidade" className="button-primary">
                      {siteConfig.primaryCtaLabel}
                      <ArrowRight size={18} />
                    </Link>
                    <a
                      href={siteConfig.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="button-secondary"
                    >
                      {siteConfig.secondaryCtaLabel}
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-[1.02fr_0.98fr]">
                  <div className="warm-portrait relative min-h-[360px] overflow-hidden rounded-[28px] border border-white/22">
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(23,16,10,0.2))]" />
                    <div className="absolute left-5 top-5 rounded-full bg-[rgba(95,36,131,0.72)] px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-paper)]">
                      recurso integrado
                    </div>
                    <div className="absolute bottom-5 left-5 right-5 rounded-[22px] bg-[rgba(255,248,240,0.9)] p-5">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--color-olive-deep)]/58">
                        em contexto
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[color:var(--color-muted)]">
                        A pergunta central não é apenas “o que a neuromodulação
                        faz?”, mas “em que momento ela realmente ajuda?”.
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    {neuroMechanisms.map((item) => (
                      <article
                        key={item.title}
                        className="rounded-[20px] bg-[rgba(255,250,242,0.86)] p-5 shadow-[0_14px_28px_rgba(69,54,36,0.08)]"
                      >
                        <h2 className="font-montserrat text-xl font-black text-[color:var(--color-ink)]">
                          {item.title}
                        </h2>
                        <p className="mt-2 text-sm leading-7 text-[color:var(--color-muted)]">
                          {item.text}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad overflow-hidden">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:items-start">
            <div>
              <SectionHeader
                eyebrow="Indicação clínica"
                title={neuroPageContent.indicationsTitle}
                description={neuroPageContent.indicationsDescription}
              />
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {neuroIndications.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[20px] bg-[rgba(255,250,242,0.88)] p-5 shadow-[0_12px_24px_rgba(69,54,36,0.06)]"
                  >
                    <h3 className="font-montserrat text-xl font-black text-[color:var(--color-ink)]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[color:var(--color-muted)]">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] bg-[color:var(--color-brand)] p-6 text-[color:var(--color-paper)] shadow-[0_20px_45px_rgba(95,36,131,0.18)] sm:p-8">
              <SectionHeader
                eyebrow="Integração"
                title={neuroPageContent.integrationTitle}
                description={neuroPageContent.integrationText}
                inverted
              />
              <div className="mt-8 rounded-[22px] bg-white/10 p-5">
                <p className="font-montserrat text-2xl font-black">
                  O recurso só faz sentido quando conversa com o caso inteiro.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad olive-pattern bg-[color:var(--color-brand)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <SectionHeader
              eyebrow="Percurso"
              title={neuroPageContent.flowTitle}
              description={neuroPageContent.flowDescription}
              inverted
            />

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {neuroFlow.map((item) => (
                <article
                  key={item.number}
                  className="rounded-[22px] bg-[rgba(255,250,242,0.1)] p-5 text-white"
                >
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white/58">
                    etapa {item.number}
                  </p>
                  <h2 className="mt-3 font-montserrat text-2xl font-black">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-white/74">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
            <SectionHeader
              eyebrow="Próximo passo"
              title={neuroPageContent.finalTitle}
              description={neuroPageContent.finalText}
              align="center"
            />
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/#elegibilidade" className="button-primary">
                {siteConfig.primaryCtaLabel}
                <ArrowRight size={18} />
              </Link>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="button-secondary"
              >
                {siteConfig.secondaryCtaLabel}
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
