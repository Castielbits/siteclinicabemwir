"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logoComTexto from "@/images/logos/logo-bem-wir-com-texto.png";
import { navLinks, siteConfig } from "@/data/siteContent";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const homeAnchor = (href: string) => (pathname === "/" ? href : `/${href}`);

  const resolveHref = (href: string, kind: "anchor" | "page") => {
    if (kind === "anchor") return homeAnchor(href);
    return href;
  };

  const solid = scrolled || mobileOpen;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`flex items-center justify-between px-6 py-4 transition-all duration-500 sm:px-10 ${
          solid
            ? "bg-cream/95 shadow-[0_1px_0_rgba(95,36,131,0.08)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
          className="flex items-center"
          aria-label="Bem-wir — Voltar ao início"
        >
          <Image
            src={logoComTexto}
            alt="Bem-wir"
            height={32}
            className="h-8 w-auto transition-all duration-500"
            style={{
              filter: solid ? "none" : "brightness(0) invert(1)",
            }}
            priority
          />
        </Link>

        {/* Nav links — desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={resolveHref(link.href, link.kind)}
              className={`eyebrow tracking-[0.18em] transition-colors duration-300 hover:opacity-100 ${
                solid
                  ? "text-ink/60 hover:text-dark"
                  : "text-white/65 hover:text-white"
              }`}
              style={{ fontSize: "0.68rem" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={homeAnchor("#elegibilidade")}
            className={`btn-primary text-xs transition-all duration-300 ${
              solid ? "btn-dark" : "btn-outline-light"
            }`}
          >
            {siteConfig.primaryCtaLabel}
          </Link>
        </nav>

        {/* Hamburger — mobile */}
        <button
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300 md:hidden ${
            solid
              ? "border-dark/12 text-dark"
              : "border-white/25 text-white"
          }`}
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Abrir menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden border-t border-dark/6 bg-cream/98 backdrop-blur-xl transition-all duration-300 md:hidden ${
          mobileOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-5">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={resolveHref(link.href, link.kind)}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-ink/80 transition-colors hover:bg-dark/4 hover:text-dark"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Link
              href={homeAnchor("#elegibilidade")}
              onClick={() => setMobileOpen(false)}
              className="btn-primary btn-dark text-center text-sm"
            >
              {siteConfig.primaryCtaLabel}
            </Link>
            <Link
              href={siteConfig.whatsappUrl}
              onClick={() => setMobileOpen(false)}
              target="_blank"
              rel="noreferrer"
              className="btn-primary btn-outline-dark text-center text-sm"
            >
              {siteConfig.secondaryCtaLabel}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
