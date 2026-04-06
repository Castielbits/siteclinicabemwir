"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import camada1 from "@/images/Camada 1.png";
import camada2 from "@/images/Camada 2.png";
import camada3 from "@/images/Camada 3.png";
import camada4 from "@/images/Camada 4.png";
import camada5 from "@/images/Camada 5.png";
import camada6 from "@/images/Camada 6.png";
import camada7 from "@/images/Camada 7.png";
import camada8 from "@/images/Camada 8.png";

const diferenciais = [
  {
    icon: camada5,
    title: "Cuidado Emocional",
    desc: "Escuta ativa e acolhimento em cada etapa do tratamento.",
    accent: "#fde9a2",
  },
  {
    icon: camada6,
    title: "Fisioterapia Especializada",
    desc: "Técnicas de ponta baseadas em neurociências para tratar a dor.",
    accent: "#fbdad0",
  },
  {
    icon: camada7,
    title: "Equilíbrio Mental",
    desc: "Psicologia da dor e regulação emocional integradas ao tratamento.",
    accent: "#d4e198",
  },
  {
    icon: camada8,
    title: "Neuromodulação",
    desc: "Modulação direta nos circuitos neurais responsáveis pela dor.",
    accent: "#e8dff5",
  },
  {
    icon: camada1,
    title: "Teleconsulta",
    desc: "Atendimento online com toda a qualidade do presencial.",
    accent: "#fde9a2",
  },
  {
    icon: camada4,
    title: "Equipe Integrada",
    desc: "Fisioterapeuta e psicóloga atuando juntas pelo seu resultado.",
    accent: "#fbdad0",
  },
  {
    icon: camada3,
    title: "Plano Personalizado",
    desc: "Diagnóstico e protocolo exclusivos para o seu perfil.",
    accent: "#d4e198",
  },
  {
    icon: camada2,
    title: "Sigilo e Segurança",
    desc: "Seus dados e histórico clínico protegidos com total privacidade.",
    accent: "#e8dff5",
  },
];

export default function Icones() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".animate-on-scroll")
              .forEach((el, i) => {
                setTimeout(() => el.classList.add("visible"), i * 75);
              });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="animate-on-scroll inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-0.5" style={{ background: "#5f2483" }} />
            <span
              className="text-sm font-medium uppercase tracking-widest"
              style={{ color: "#5f2483" }}
            >
              Nossos diferenciais
            </span>
            <span className="w-6 h-0.5" style={{ background: "#5f2483" }} />
          </div>
          <h2
            className="animate-on-scroll font-montserrat font-black text-4xl md:text-5xl leading-tight"
            style={{ color: "#2d2d2d" }}
          >
            O que nos torna{" "}
            <span style={{ color: "#5f2483" }}>únicos</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {diferenciais.map((item) => (
            <div
              key={item.title}
              className="animate-on-scroll group rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{
                background: "white",
                boxShadow: "0 2px 20px rgba(95,36,131,0.07)",
                borderTop: `4px solid ${item.accent}`,
              }}
            >
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: item.accent }}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>

              <h3
                className="font-montserrat font-bold text-sm md:text-base mb-2 leading-snug"
                style={{ color: "#2d2d2d" }}
              >
                {item.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: "#666666" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
