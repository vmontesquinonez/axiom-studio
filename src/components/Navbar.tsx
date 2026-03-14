"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const links = [
  { label: "Trabajo", href: "#work" },
  { label: "Servicios", href: "#services" },
  { label: "Proceso", href: "#process" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(navRef.current, { y: -70, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power3.out" });
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-500"
        style={{
          padding: "0 clamp(1.25rem, 5vw, 3.5rem)",
          height: scrolled ? "60px" : "76px",
          background: scrolled ? "rgba(0,0,0,0.8)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        }}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2" style={{ textDecoration: "none" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontWeight: 700,
              fontSize: "0.85rem",
              letterSpacing: "0.35em",
              background: "linear-gradient(90deg, var(--gold), var(--gold-2))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            AXIOM
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                style={{ color: "var(--muted)", fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", transition: "color 0.3s" }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "var(--white)"; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "var(--muted)"; }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <a
          href="#contact"
          className="hidden md:flex items-center"
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            padding: "10px 22px",
            textDecoration: "none",
            background: "linear-gradient(135deg, var(--gold), var(--gold-2))",
            color: "#000",
            fontWeight: 600,
            transition: "opacity 0.3s",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
        >
          Iniciar proyecto
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block h-px transition-all duration-300"
              style={{
                width: i === 1 ? (menuOpen ? "100%" : "65%") : "100%",
                background: "var(--white)",
                opacity: i === 1 && menuOpen ? 0 : 1,
                transform: menuOpen ? (i === 0 ? "translateY(8px) rotate(45deg)" : i === 2 ? "translateY(-8px) rotate(-45deg)" : "none") : "none",
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className="fixed inset-0 z-40 flex flex-col justify-center md:hidden transition-all duration-500"
        style={{
          background: "#000",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transform: menuOpen ? "translateY(0)" : "translateY(-100%)",
          padding: "0 2rem",
        }}
      >
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.3em", color: "var(--gold)", marginBottom: "3rem" }}>
          NAV_MENU
        </p>
        <div className="space-y-1" style={{ borderTop: "1px solid var(--border)" }}>
          {links.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-5 py-5"
              style={{ textDecoration: "none", borderBottom: "1px solid var(--border)" }}
            >
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--gold)" }}>0{i + 1}</span>
              <span style={{ fontSize: "2.5rem", fontWeight: 700, color: "var(--white)", letterSpacing: "-0.03em" }}>{l.label}</span>
            </a>
          ))}
        </div>
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="mt-10 flex items-center justify-center py-4"
          style={{
            textDecoration: "none",
            background: "linear-gradient(135deg, var(--gold), var(--gold-2))",
            color: "#000",
            fontWeight: 700,
            fontSize: "0.8rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          Iniciar proyecto
        </a>
      </div>
    </>
  );
}
