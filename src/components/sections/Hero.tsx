"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const stats = [
  { val: "12+", label: "Proyectos" },
  { val: "100", label: "Lighthouse" },
  { val: "<1s", label: "Carga" },
  { val: "24h", label: "Respuesta" },
];

const marqueeText = "NEXT.JS · GSAP · THREE.JS · CLAUDE AI · WEBGL · TYPESCRIPT · TAILWIND · VERCEL · ";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.15 });

    tl.fromTo(badgeRef.current,
      { y: 10, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
    )
      .fromTo(".hero-word",
        { y: 120, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.08, ease: "power4.out" },
        "-=0.2"
      )
      .fromTo(".hero-sub",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.55"
      )
      .fromTo(".hero-ctas",
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        "-=0.5"
      )
      .fromTo(".hero-stats",
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        "-=0.3"
      );

    // Animate orbs
    gsap.to(".orb-gold", {
      scale: 1.15, opacity: 0.7, duration: 4, ease: "power1.inOut", repeat: -1, yoyo: true,
    });
    gsap.to(".orb-purple", {
      scale: 1.1, opacity: 0.5, duration: 5, ease: "power1.inOut", repeat: -1, yoyo: true, delay: 1.5,
    });

    // Pulse status dot
    gsap.to(".pulse-dot", {
      scale: 1.8, opacity: 0, duration: 1.4, ease: "power1.out", repeat: -1,
    });

    // Ticker marquee
    if (tickerRef.current) {
      const el = tickerRef.current;
      el.innerHTML = el.innerHTML + el.innerHTML;
      gsap.to(el, { x: "-50%", duration: 22, ease: "none", repeat: -1 });
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: "#000" }}
    >
      {/* BG Orb gold — top right */}
      <div
        className="orb-gold absolute pointer-events-none"
        style={{
          top: "-10%", right: "-15%",
          width: "700px", height: "700px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,168,76,0.18) 0%, transparent 70%)",
          filter: "blur(60px)",
          opacity: 0.6,
        }}
      />
      {/* BG Orb purple — bottom left */}
      <div
        className="orb-purple absolute pointer-events-none"
        style={{
          bottom: "0", left: "-20%",
          width: "600px", height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)",
          filter: "blur(80px)",
          opacity: 0.4,
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 flex-1 flex flex-col justify-center"
        style={{ padding: "clamp(120px, 16vw, 160px) clamp(1.25rem, 6vw, 5rem) clamp(3rem, 6vw, 5rem)" }}
      >
        {/* Status badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-3 self-start mb-14 relative"
          style={{
            padding: "8px 16px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid var(--border)",
          }}
        >
          <span className="relative flex items-center justify-center w-2 h-2">
            <span
              className="pulse-dot absolute inline-flex w-2 h-2 rounded-full"
              style={{ background: "rgba(74,222,128,0.4)" }}
            />
            <span className="relative inline-flex w-2 h-2 rounded-full" style={{ background: "#4ade80" }} />
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.68rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--muted)",
            }}
          >
            SISTEMA ACTIVO · IA ONLINE · v2.0
          </span>
        </div>

        {/* Main headline */}
        <div style={{ lineHeight: 0.9, marginBottom: "clamp(2rem, 4vw, 3.5rem)" }}>
          {["Construimos", "Experiencias", "Digitales."].map((word, i) => (
            <div key={word} className="overflow-hidden">
              <div className="hero-word">
                <h1
                  style={{
                    fontSize: "clamp(4rem, 11vw, 10.5rem)",
                    fontWeight: 800,
                    letterSpacing: "-0.04em",
                    color: i === 2 ? "transparent" : "var(--white)",
                    background: i === 2
                      ? "linear-gradient(90deg, var(--gold) 0%, var(--gold-2) 50%, var(--gold) 100%)"
                      : undefined,
                    WebkitBackgroundClip: i === 2 ? "text" : undefined,
                    WebkitTextFillColor: i === 2 ? "transparent" : undefined,
                    backgroundClip: i === 2 ? "text" : undefined,
                  }}
                >
                  {word}
                </h1>
              </div>
            </div>
          ))}
        </div>

        {/* Subtext + CTAs */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-16">
          <p
            className="hero-sub"
            style={{
              color: "var(--muted)",
              fontSize: "clamp(1rem, 1.6vw, 1.05rem)",
              lineHeight: 1.8,
              maxWidth: "400px",
            }}
          >
            Sitios web de nueva generación potenciados por IA. Animaciones de élite,
            rendimiento extremo — diseñados para convertir.
          </p>

          <div className="hero-ctas flex items-center gap-4 flex-shrink-0">
            <a
              href="#contact"
              className="group relative overflow-hidden"
              style={{
                padding: "14px 32px",
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontWeight: 700,
                background: "linear-gradient(135deg, var(--gold), var(--gold-2))",
                color: "#000",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Iniciar Proyecto
            </a>
            <a
              href="#work"
              style={{
                padding: "14px 32px",
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontWeight: 600,
                border: "1px solid var(--border)",
                color: "var(--muted)",
                textDecoration: "none",
                display: "inline-block",
                transition: "color 0.3s, border-color 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--white)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--muted)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              }}
            >
              Ver trabajo →
            </a>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div
        className="hero-stats relative z-10"
        style={{
          borderTop: "1px solid var(--border)",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
      >
        {stats.map((s, i) => (
          <div
            key={s.label}
            style={{
              padding: "clamp(1.5rem, 3vw, 2.5rem) clamp(1.25rem, 4vw, 3rem)",
              borderRight: i < 3 ? "1px solid var(--border)" : "none",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                background: "linear-gradient(135deg, var(--gold), var(--gold-2))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "4px",
              }}
            >
              {s.val}
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--muted)",
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Marquee ticker */}
      <div
        style={{
          borderTop: "1px solid var(--border)",
          padding: "14px 0",
          overflow: "hidden",
        }}
      >
        <div
          ref={tickerRef}
          className="flex whitespace-nowrap"
          style={{ willChange: "transform" }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.1)",
            }}
          >
            {marqueeText}
          </span>
        </div>
      </div>
    </section>
  );
}
