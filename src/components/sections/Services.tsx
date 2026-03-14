"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    num: "01",
    title: "Sitios Web con IA",
    desc: "Aprovechamos la inteligencia artificial más avanzada para diseñar y construir sitios únicos, rápidos y perfectamente adaptados a tu marca.",
    tags: ["Claude AI", "Next.js", "TypeScript"],
    glow: "rgba(201,168,76,0.15)",
  },
  {
    num: "02",
    title: "Animaciones & Motion",
    desc: "Animaciones de nivel Awwwards impulsadas por GSAP y WebGL. Tu sitio se moverá como nada que tus visitantes hayan visto antes.",
    tags: ["GSAP", "Three.js", "WebGL"],
    glow: "rgba(124,58,237,0.12)",
  },
  {
    num: "03",
    title: "Rendimiento Extremo",
    desc: "100/100 en Lighthouse. Desplegado en el edge, carga en menos de un segundo. La velocidad es la base de todo lo que construimos.",
    tags: ["Vercel Edge", "Core Web Vitals", "CDN"],
    glow: "rgba(6,182,212,0.12)",
  },
  {
    num: "04",
    title: "Identidad de Marca",
    desc: "Del logo al sistema visual completo, creamos identidades atemporales, audaces y construidas para destacar en cualquier mercado.",
    tags: ["Estrategia", "Diseño Visual", "UI/UX"],
    glow: "rgba(201,168,76,0.1)",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    sectionRef.current?.querySelectorAll(".svc-card").forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 88%" },
          delay: i * 0.06,
        }
      );
    });
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      style={{
        background: "#000",
        padding: "clamp(5rem, 10vw, 9rem) clamp(1.25rem, 6vw, 5rem)",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.5rem" }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "var(--gold)",
              }}
            >
              ── Lo que hacemos
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 5.5vw, 5rem)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
              color: "var(--white)",
            }}
          >
            Servicios creados
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, var(--gold), var(--gold-2))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              para la élite.
            </span>
          </h2>
        </div>

        {/* 2×2 glass cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 500px), 1fr))",
            gap: "1px",
            background: "var(--border)",
          }}
        >
          {services.map((s, i) => (
            <div
              key={s.num}
              className="svc-card"
              style={{
                position: "relative",
                background: "#000",
                padding: "clamp(2.5rem, 5vw, 4rem)",
                cursor: "default",
                overflow: "hidden",
                transition: "background 0.4s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#000";
              }}
            >
              {/* Glow on hover */}
              <div
                className="svc-glow"
                style={{
                  position: "absolute",
                  top: "-30%", right: "-20%",
                  width: "300px", height: "300px",
                  borderRadius: "50%",
                  background: s.glow,
                  filter: "blur(60px)",
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

              {/* Number */}
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.2em",
                  color: "var(--gold)",
                  marginBottom: "2rem",
                }}
              >
                {s.num}
              </div>

              {/* Ghost big number */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-1rem",
                  right: "1.5rem",
                  fontSize: "8rem",
                  fontWeight: 900,
                  fontFamily: "var(--font-mono)",
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(255,255,255,0.04)",
                  lineHeight: 1,
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                {s.num}
              </div>

              <h3
                style={{
                  fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  color: "var(--white)",
                  marginBottom: "1.25rem",
                  lineHeight: 1.1,
                }}
              >
                {s.title}
              </h3>

              <p
                style={{
                  color: "var(--muted)",
                  fontSize: "0.92rem",
                  lineHeight: 1.75,
                  marginBottom: "2rem",
                  maxWidth: "420px",
                }}
              >
                {s.desc}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {s.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
