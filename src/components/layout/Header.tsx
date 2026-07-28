"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/content";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<"RU" | "KZ">("RU");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-border shadow-[0_1px_0_0_rgba(220,231,248,0.8)]"
          : "bg-white/60 backdrop-blur-sm border-b border-transparent"
      )}
    >
      <Container className="flex h-[76px] items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/brand/logo-icon.png"
            alt=""
            width={34}
            height={38}
            className="h-9 w-auto"
            priority
          />
          <span className="font-heading text-[19px] font-extrabold tracking-tight text-ink">
            SkillBridge<span className="text-primary">KZ</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Основная навигация">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-[15px] font-medium text-ink/80 transition-colors hover:bg-soft hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button
            type="button"
            onClick={() => setLang((l) => (l === "RU" ? "KZ" : "RU"))}
            className="flex h-10 items-center rounded-full border border-border px-1 text-sm font-semibold text-ink/70"
            aria-label="Переключить язык"
          >
            <span
              className={cn(
                "flex h-8 w-9 items-center justify-center rounded-full transition-colors",
                lang === "RU" && "bg-soft text-primary"
              )}
            >
              RU
            </span>
            <span
              className={cn(
                "flex h-8 w-9 items-center justify-center rounded-full transition-colors",
                lang === "KZ" && "bg-soft text-primary"
              )}
            >
              KZ
            </span>
          </button>
          <Button href="#hero-cta" size="md">
            Открыть платформу
          </Button>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-ink lg:hidden"
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {/* Mobile slide-out navigation */}
      <div
        className={cn(
          "fixed inset-x-0 top-[76px] z-40 origin-top overflow-hidden bg-white transition-[max-height,opacity] duration-300 ease-out lg:hidden",
          menuOpen ? "max-h-[calc(100vh-76px)] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <Container className="flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3.5 text-base font-medium text-ink hover:bg-soft"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 flex items-center justify-between rounded-xl border border-border px-4 py-3">
            <span className="text-sm font-medium text-ink/70">Язык</span>
            <button
              type="button"
              onClick={() => setLang((l) => (l === "RU" ? "KZ" : "RU"))}
              className="text-sm font-semibold text-primary"
            >
              {lang === "RU" ? "Переключить на KZ" : "Switch to RU"}
            </button>
          </div>
          <Button href="#hero-cta" size="lg" className="mt-3 w-full" onClick={() => setMenuOpen(false)}>
            Открыть платформу
          </Button>
        </Container>
      </div>
    </header>
  );
}
