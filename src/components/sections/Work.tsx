"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    num: "001",
    title: "Alteza Bienes Raíces",
    category: "Plataforma Inmobiliaria",
    year: "2026",
    desc: "Plataforma inmobiliaria full-stack con búsqueda potenciada por IA, panel CRM y exhibición cinematográfica de propiedades premium.",
    gradient: "linear-gradient(135deg, rgba(201,168,76,0.25) 0%, rgba(201,168,76,0.05) 50%, transparent 100%)",
    accent: "#c9a84c",
  },
  {
    num: "002",
    title: "NovaTech SaaS",
    category: "Landing SaaS",
    year: "2025",
    desc: "Landing page SaaS con WebGL, sistemas de partículas y demos 3D de producto impulsados por scroll.",
    gradient: "linear-gradient(135deg, rgba(6,182,212,0.2) 0%, rgba(6,182,212,0.04) 50%, transparent 100%)",
    accent: "#06b6d4",
  },
  {
    num: "003",
    title: "Obsidian Studio",
    category: "Agencia Creativa",
    year: "2025",
    desc: "Portafolio de agencia creativa premiado, con tipografía fluida y efectos de shader GLSL personalizados.",
    gradient: "linear-gradient(135deg, rgba(124,58,237,0.25) 0%, rgba(124,58,237,0.05) 50%, transparent 100%)",
    accent: "#7c3aed",
  },
];

export default function Work() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    sectionRef.current?.querySelectorAll(".work-card").forEach((card) => {
      gsap.fromTo(
        card,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: card, start: "top 88%" } }
      );
    });
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      style={{
        background: "#050505",
        padding: "clamp(5rem, 10vw, 9rem) clamp(1.25rem, 6vw, 5rem)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            marginBottom: "clamp(3rem, 6vw, 5rem)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "var(--gold)",
            }}
          >
            ── Trabajos destacados
          </span>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem" }}>
            <h2
              style={{
                fontSize: "clamp(2.5rem, 5.5vw, 5rem)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 0.95,
                color: "var(--white)",
              }}
            >
              Proyectos que
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg, var(--gold), var(--gold-2))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                hablan fuerte.
              </span>
            </h2>
            <a
              href="#contact"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--muted)",
                textDecoration: "none",
                borderBottom: "1px solid var(--border)",
                paddingBottom: "2px",
                transition: "color 0.3s, border-color 0.3s",
                alignSelf: "flex-end",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--gold)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--muted)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              }}
            >
              Ver todos →
            </a>
          </div>
        </div>

        {/* Project cards — stacked rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--border)" }}>
          {projects.map((p) => (
            <div
              key={p.num}
              className="work-card group"
              style={{
                position: "relative",
                background: "#050505",
                overflow: "hidden",
                cursor: "pointer",
                transition: "background 0.4s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.015)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#050505";
              }}
            >
              {/* Gradient background */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: p.gradient,
                  opacity: 0,
                  transition: "opacity 0.5s",
                  pointerEvents: "none",
                }}
                ref={(el) => {
                  if (!el) return;
                  el.parentElement?.addEventListener("mouseenter", () => el.style.opacity = "1");
                  el.parentElement?.addEventListener("mouseleave", () => el.style.opacity = "0");
                }}
              />

              {/* Ghost number */}
              <div
                style={{
                  position: "absolute",
                  right: "clamp(1.5rem, 4vw, 4rem)",
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "clamp(6rem, 15vw, 14rem)",
                  fontWeight: 900,
                  fontFamily: "var(--font-mono)",
                  color: "transparent",
                  WebkitTextStroke: `1px ${p.accent}20`,
                  lineHeight: 1,
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                {p.num}
              </div>

              {/* Content */}
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: "clamp(2rem, 5vw, 5rem)",
                  padding: "clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 4vw, 4rem)",
                  flexWrap: "wrap",
                }}
              >
                {/* Left: meta */}
                <div style={{ minWidth: "180px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.75rem" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.65rem",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: p.accent,
                      }}
                    >
                      {p.category}
                    </span>
                    <span style={{ color: "var(--border)", fontSize: "0.7rem" }}>·</span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.65rem",
                        color: "var(--muted)",
                      }}
                    >
                      {p.year}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                      fontWeight: 700,
                      letterSpacing: "-0.03em",
                      color: "var(--white)",
                      lineHeight: 1.1,
                      transition: "color 0.3s",
                    }}
                    ref={(el) => {
                      if (!el) return;
                      el.parentElement?.parentElement?.addEventListener("mouseenter", () => {
                        el.style.color = p.accent;
                      });
                      el.parentElement?.parentElement?.addEventListener("mouseleave", () => {
                        el.style.color = "var(--white)";
                      });
                    }}
                  >
                    {p.title}
                  </h3>
                </div>

                {/* Right: description */}
                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: "0.92rem",
                    lineHeight: 1.75,
                    maxWidth: "460px",
                    flex: 1,
                  }}
                >
                  {p.desc}
                </p>

                {/* Arrow */}
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "all 0.3s",
                  }}
                  ref={(el) => {
                    if (!el) return;
                    el.parentElement?.parentElement?.addEventListener("mouseenter", () => {
                      el.style.background = p.accent;
                      el.style.borderColor = p.accent;
                      (el.querySelector("span") as HTMLElement).style.color = "#000";
                    });
                    el.parentElement?.parentElement?.addEventListener("mouseleave", () => {
                      el.style.background = "transparent";
                      el.style.borderColor = "var(--border)";
                      (el.querySelector("span") as HTMLElement).style.color = "var(--muted)";
                    });
                  }}
                >
                  <span style={{ color: "var(--muted)", fontSize: "1rem", transition: "color 0.3s" }}>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
