"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { num: "01", title: "Descubrimiento", desc: "Una sesión de estrategia de 1 hora define tu marca, objetivos y audiencia. Esto da forma a todo lo que sigue.", time: "1–2 días" },
  { num: "02", title: "Diseño", desc: "Wireframes, moodboards y prototipos interactivos. Ves la visión completa antes de que se escriba una línea de código.", time: "3–5 días" },
  { num: "03", title: "Desarrollo", desc: "Nuestro proceso asistido por IA entrega código listo para producción en días, no meses. Limpio, escalable, ultrarrápido.", time: "1–3 semanas" },
  { num: "04", title: "Lanzamiento", desc: "Desplegamos, probamos y optimizamos. Un sitio que trabaja más duro que cualquier equipo que hayas contratado.", time: "1–2 días" },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    sectionRef.current?.querySelectorAll(".proc-step").forEach((step, i) => {
      gsap.fromTo(
        step,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: step, start: "top 88%" },
          delay: i * 0.1,
        }
      );
    });
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      style={{
        background: "#000",
        padding: "clamp(5rem, 10vw, 9rem) clamp(1.25rem, 6vw, 5rem)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "var(--gold)",
              display: "block",
              marginBottom: "1.5rem",
            }}
          >
            ── Cómo trabajamos
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
              Proceso simple.
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg, var(--gold), var(--gold-2))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Resultados extraordinarios.
              </span>
            </h2>
            <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.75, maxWidth: "300px" }}>
              De la idea al lanzamiento en 2 a 6 semanas.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1px",
            background: "var(--border)",
          }}
        >
          {steps.map((s, i) => (
            <div
              key={s.num}
              className="proc-step"
              style={{
                background: "#000",
                padding: "clamp(2rem, 4vw, 3rem)",
                position: "relative",
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
              {/* Hover glow */}
              <div
                style={{
                  position: "absolute",
                  top: 0, left: 0,
                  width: "100%", height: "2px",
                  background: "linear-gradient(90deg, var(--gold), var(--gold-2))",
                  transform: "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 0.4s ease",
                }}
                ref={(el) => {
                  if (!el) return;
                  el.parentElement?.addEventListener("mouseenter", () => el.style.transform = "scaleX(1)");
                  el.parentElement?.addEventListener("mouseleave", () => el.style.transform = "scaleX(0)");
                }}
              />

              {/* Top row: number + time */}
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "2rem" }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    background: "linear-gradient(135deg, var(--gold), var(--gold-2))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    lineHeight: 1,
                  }}
                >
                  {s.num}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    padding: "4px 10px",
                    border: "1px solid var(--border)",
                  }}
                >
                  {s.time}
                </span>
              </div>

              <h3
                style={{
                  fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "var(--white)",
                  marginBottom: "1rem",
                }}
              >
                {s.title}
              </h3>
              <p style={{ color: "var(--muted)", fontSize: "0.88rem", lineHeight: 1.75 }}>
                {s.desc}
              </p>

              {/* Connector arrow (not last) */}
              {i < steps.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    right: "-12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 2,
                    display: "none",
                  }}
                  className="md:block"
                />
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            marginTop: "4rem",
            paddingTop: "3rem",
            borderTop: "1px solid var(--border)",
            display: "flex",
            flexDirection: "column" as const,
            gap: "1.5rem",
            alignItems: "center",
          }}
        >
          <p style={{ color: "var(--muted)", fontSize: "1rem", textAlign: "center" }}>
            El primer paso es una llamada de 30 minutos sin costo.
          </p>
          <a
            href="#contact"
            style={{
              padding: "14px 36px",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontWeight: 700,
              border: "1px solid rgba(201,168,76,0.4)",
              color: "var(--gold)",
              textDecoration: "none",
              display: "inline-block",
              transition: "all 0.3s",
              position: "relative" as const,
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "linear-gradient(135deg, var(--gold), var(--gold-2))";
              el.style.color = "#000";
              el.style.borderColor = "transparent";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "transparent";
              el.style.color = "var(--gold)";
              el.style.borderColor = "rgba(201,168,76,0.4)";
            }}
          >
            Agendar llamada gratuita →
          </a>
        </div>
      </div>
    </section>
  );
}
