"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import {
  eligibilityOptions,
  eligibilitySection,
  siteConfig,
} from "@/data/siteContent";

type FormData = {
  nome: string;
  email: string;
  whatsapp: string;
  queixa: string;
  tempo: string;
  tratamentos: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialForm: FormData = {
  nome: "",
  email: "",
  whatsapp: "",
  queixa: "",
  tempo: "",
  tratamentos: "",
};

export default function Elegibilidade() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.nome.trim()) newErrors.nome = "Nome é obrigatório";
    if (!form.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email inválido";
    }
    if (!form.whatsapp.trim()) newErrors.whatsapp = "WhatsApp é obrigatório";
    if (!form.queixa) newErrors.queixa = "Selecione sua principal queixa";
    if (!form.tempo) newErrors.tempo = "Selecione o tempo da condição";
    if (!form.tratamentos) {
      newErrors.tratamentos = "Selecione uma opção";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  const fieldClass = (field: keyof FormData) =>
    `${field === "queixa" || field === "tempo" || field === "tratamentos" ? "field-select appearance-none pr-12" : "field-input"} ${
      errors[field] ? "!border-red-400 !bg-red-50" : ""
    }`;

  return (
    <section
      id="elegibilidade"
      className="section-dark section-full"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          {/* Left — info */}
          <div>
            <ScrollReveal>
              <p className="eyebrow eyebrow-line light text-white/50">
                {eligibilitySection.eyebrow}
              </p>
              <h2 className="heading-serif mt-6 text-3xl text-white sm:text-4xl lg:text-[2.8rem]">
                {eligibilitySection.title}
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/65">
                {eligibilitySection.description}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <div className="mt-10 space-y-5">
                <div className="border-l-2 border-white/15 pl-6">
                  <p className="eyebrow text-white/40 mb-2" style={{ fontSize: "0.6rem" }}>
                    prioridade desta fase
                  </p>
                  <p className="text-sm leading-7 text-white/60">
                    A triagem inicial é o principal caminho de entrada do site.
                    WhatsApp continua disponível como canal de apoio.
                  </p>
                </div>
                <div className="border-l-2 border-white/15 pl-6">
                  <p className="eyebrow text-white/40 mb-2" style={{ fontSize: "0.6rem" }}>
                    assinatura
                  </p>
                  <p className="font-serif text-xl font-bold text-white">
                    {siteConfig.tagline}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white/55">
                    {eligibilitySection.note}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — form */}
          <ScrollReveal delay={2}>
            <div className="rounded-2xl bg-cream p-8 text-ink shadow-[0_30px_80px_rgba(0,0,0,0.25)] sm:p-10">
              {submitted ? (
                <div className="flex min-h-[480px] flex-col items-start justify-center">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-sage/40">
                    <CheckCircle2 size={32} className="text-dark" />
                  </div>
                  <p className="eyebrow mt-8 text-dark/40" style={{ fontSize: "0.62rem" }}>
                    envio concluído
                  </p>
                  <h3 className="mt-3 font-serif text-3xl font-bold text-ink">
                    Recebemos suas informações.
                  </h3>
                  <p className="mt-4 max-w-lg text-base leading-8 text-muted">
                    Nossa equipe fará a leitura inicial do seu caso e entrará em
                    contato pelo WhatsApp ou email informado para orientar o
                    próximo passo.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm(initialForm);
                    }}
                    className="btn-primary btn-dark mt-8"
                  >
                    Enviar nova resposta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="font-serif text-2xl font-bold text-ink mb-8">
                    Preencha para avaliação inicial
                  </h3>
                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="md:col-span-2">
                      <label className="mb-2 block text-sm font-semibold text-ink/70">
                        Nome completo *
                      </label>
                      <input
                        type="text"
                        name="nome"
                        value={form.nome}
                        onChange={handleChange}
                        placeholder="Seu nome completo"
                        className={fieldClass("nome")}
                      />
                      {errors.nome ? (
                        <p className="mt-2 text-xs text-red-500">{errors.nome}</p>
                      ) : null}
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-ink/70">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        className={fieldClass("email")}
                      />
                      {errors.email ? (
                        <p className="mt-2 text-xs text-red-500">{errors.email}</p>
                      ) : null}
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-ink/70">
                        WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="whatsapp"
                        value={form.whatsapp}
                        onChange={handleChange}
                        placeholder="(31) 99999-9999"
                        className={fieldClass("whatsapp")}
                      />
                      {errors.whatsapp ? (
                        <p className="mt-2 text-xs text-red-500">
                          {errors.whatsapp}
                        </p>
                      ) : null}
                    </div>

                    <div className="md:col-span-2">
                      <label className="mb-2 block text-sm font-semibold text-ink/70">
                        Qual a sua principal queixa? *
                      </label>
                      <div className="relative">
                        <select
                          name="queixa"
                          value={form.queixa}
                          onChange={handleChange}
                          className={fieldClass("queixa")}
                        >
                          {eligibilityOptions.complaints.map((option) => (
                            <option key={option.value || "placeholder"} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-dark/40">
                          ▾
                        </span>
                      </div>
                      {errors.queixa ? (
                        <p className="mt-2 text-xs text-red-500">{errors.queixa}</p>
                      ) : null}
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-ink/70">
                        Há quanto tempo convive com essa condição? *
                      </label>
                      <div className="relative">
                        <select
                          name="tempo"
                          value={form.tempo}
                          onChange={handleChange}
                          className={fieldClass("tempo")}
                        >
                          {eligibilityOptions.durations.map((option) => (
                            <option key={option.value || "placeholder"} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-dark/40">
                          ▾
                        </span>
                      </div>
                      {errors.tempo ? (
                        <p className="mt-2 text-xs text-red-500">{errors.tempo}</p>
                      ) : null}
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-ink/70">
                        Já realizou outros tratamentos? *
                      </label>
                      <div className="relative">
                        <select
                          name="tratamentos"
                          value={form.tratamentos}
                          onChange={handleChange}
                          className={fieldClass("tratamentos")}
                        >
                          {eligibilityOptions.previousTreatments.map((option) => (
                            <option key={option.value || "placeholder"} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-dark/40">
                          ▾
                        </span>
                      </div>
                      {errors.tratamentos ? (
                        <p className="mt-2 text-xs text-red-500">
                          {errors.tratamentos}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div className="mt-8">
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary btn-dark w-full disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {loading ? (
                        "Enviando..."
                      ) : (
                        <>
                          Enviar para avaliação
                          <Send size={16} />
                        </>
                      )}
                    </button>
                    <p className="mt-3 text-center text-xs leading-6 text-muted">
                      Seus dados serão usados apenas para retorno clínico inicial
                      e não serão compartilhados com terceiros.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
