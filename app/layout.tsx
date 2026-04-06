import type { Metadata } from "next";
import { Playfair_Display, Mulish } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-mulish",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bem-wir | Cuidado integrado para dor crônica e sofrimento persistente",
    template: "%s | Bem-wir",
  },
  description:
    "Clínica de cuidado integrado que combina fisioterapia especializada em neurociências, psicologia e neuromodulação para dor crônica, TEPT, depressão e dores orofaciais persistentes.",
  keywords: [
    "fibromialgia",
    "neuromodulação",
    "fisioterapia neurológica",
    "psicologia",
    "dor crônica",
    "TEPT",
    "depressão",
    "dores orofaciais",
    "tratamento integrado",
    "bem-wir",
  ],
  authors: [{ name: "Bem-wir Clínica" }],
  openGraph: {
    title: "Bem-wir | Dor crônica não se resolve em partes",
    description:
      "Cuidado integrado que une fisioterapia especializada em neurociências, psicologia e neuromodulação.",
    type: "website",
    locale: "pt_BR",
    siteName: "Bem-wir Clínica",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bem-wir | Cuidado integrado para dor crônica",
    description:
      "Fisioterapia especializada em neurociências, psicologia e neuromodulação.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  name: "Bem-wir",
  description:
    "Clínica de tratamento integrado que combina fisioterapia especializada em neurociências com psicologia",
  slogan: "ciência e empatia na gestão do bem-estar",
  medicalSpecialty: [
    "Fisioterapia em Neurociências",
    "Psicologia",
    "Neuromodulação",
  ],
  telephone: "+55 31 99999-9999",
  address: {
    "@type": "PostalAddress",
    addressCountry: "BR",
    addressLocality: "Placeholder",
  },
  sameAs: ["https://www.instagram.com/bemwir"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${mulish.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className={mulish.className}>
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
