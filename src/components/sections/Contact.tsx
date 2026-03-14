"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
    );
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  const inp: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid var(--border)",
    color: "var(--white)",
    padding: "14px 18px",
    fontSize: "0.9rem",
    outline: "none",
    fontFamily: "var(--font-sans)",
    transition: "border-color 0.3s, background 0.3s",
  };
  const lbl: React.CSSProperties = {
    display: "block",
    fontFamily: "var(--font-mono)",
    fontSize: "0.65rem",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--muted)",
    marginBottom: "8px",
  };
  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = "rgba(201,168,76,0.5)";
    e.target.style.background = "rgba(201,168,76,0.03)";
  };
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = "var(--border)";
    e.target.style.background = "rgba(255,255,255,0.03)";
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        background: "#050505",
        padding: "clamp(5rem, 10vw, 9rem) clamp(1.25rem, 6vw, 5rem)",
        borderTop: "1px solid var(--border)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background orb */}
      <div
        style={{
          position: "absolute",
          bottom: "-20%", right: "-10%",
          width: "600px", height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr",
            gap: "clamp(3rem, 8vw, 8rem)",
            alignItems: "start",
          }}
        >
          {/* Left: Info */}
          <div>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "var(--gold)",
                display: "block",
                marginBottom: "2rem",
              }}
            >
              ── Hablemos
            </span>
            <h2
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 0.95,
                marginBottom: "2rem",
              }}
            >
              <span style={{ color: "var(--white)" }}>
                Comienza
                <br />
                tu próximo
                <br />
              </span>
              <span
                style={{
                  background: "linear-gradient(90deg, var(--gold), var(--gold-2))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                proyecto.
              </span>
            </h2>
            <p
              style={{
                color: "var(--muted)",
                fontSize: "0.95rem",
                lineHeight: 1.8,
                marginBottom: "3rem",
              }}
            >
              Cuéntanos tu visión. Respondemos en menos de 24 horas con una propuesta personalizada.
            </p>

            {/* Contact items */}
            <div
              style={{
                display: "flex",
                flexDirection: "column" as const,
                gap: "0",
                borderTop: "1px solid var(--border)",
              }}
            >
              {[
                { k: "Email", v: "vmontesquinonez@gmail.com" },
                { k: "Teléfono", v: "+52 333 448 8366" },
                { k: "Desde", v: "$15,000 MXN" },
              ].map((item) => (
                <div
                  key={item.k}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "1.1rem 0",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "var(--muted)",
                    }}
                  >
                    {item.k}
                  </span>
                  <span style={{ color: "var(--white)", fontSize: "0.9rem" }}>{item.v}</span>
                </div>
              ))}
            </div>

            {/* Social */}
            <div style={{ display: "flex", gap: "1.5rem", marginTop: "2rem" }}>
              {["Twitter", "Instagram", "LinkedIn"].map((s) => (
                <a
                  key={s}
                  href="#"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    textDecoration: "none",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "var(--gold)"; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "var(--muted)"; }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid var(--border)",
              padding: "clamp(2rem, 5vw, 4rem)",
            }}
          >
            {sent ? (
              <div style={{ textAlign: "center", padding: "4rem 2rem" }}>
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    margin: "0 auto 2rem",
                    border: "1px solid var(--gold)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    color: "var(--gold)",
                  }}
                >
                  ✓
                </div>
                <h3 style={{ color: "var(--white)", fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem" }}>
                  Mensaje recibido.
                </h3>
                <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>
                  Nos pondremos en contacto en menos de 24 horas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" as const, gap: "1.25rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                  <div>
                    <label style={lbl}>Nombre</label>
                    <input required type="text" placeholder="Juan Pérez" style={inp} onFocus={onFocus} onBlur={onBlur} />
                  </div>
                  <div>
                    <label style={lbl}>Correo</label>
                    <input required type="email" placeholder="juan@empresa.com" style={inp} onFocus={onFocus} onBlur={onBlur} />
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                  <div>
                    <label style={lbl}>Empresa</label>
                    <input type="text" placeholder="Tu empresa" style={inp} onFocus={onFocus} onBlur={onBlur} />
                  </div>
                  <div>
                    <label style={lbl}>Presupuesto</label>
                    <select style={{ ...inp, cursor: "pointer", appearance: "none" }} onFocus={onFocus} onBlur={onBlur}>
                      <option value="">Selecciona</option>
                      <option>$15,000 – $30,000 MXN</option>
                      <option>$30,000 – $60,000 MXN</option>
                      <option>$60,000 – $100,000 MXN</option>
                      <option>$100,000+ MXN</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label style={lbl}>Tipo de proyecto</label>
                  <select style={{ ...inp, cursor: "pointer", appearance: "none" }} onFocus={onFocus} onBlur={onBlur}>
                    <option value="">Selecciona un servicio</option>
                    <option>Sitio Web con IA</option>
                    <option>Animaciones & Motion</option>
                    <option>Marca completa + Sitio Web</option>
                    <option>Rendimiento & Optimización</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div>
                  <label style={lbl}>Cuéntanos tu proyecto</label>
                  <textarea
                    required rows={5}
                    placeholder="Describe tu visión, objetivos y plazos..."
                    style={{ ...inp, resize: "vertical" }}
                    onFocus={onFocus}
                    onBlur={onBlur}
                  />
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" as const }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", color: "var(--muted)", letterSpacing: "0.1em" }}>
                    SIN SPAM · SOLO TU PROYECTO
                  </span>
                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      padding: "14px 32px",
                      fontSize: "0.75rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      fontWeight: 700,
                      background: loading ? "rgba(201,168,76,0.5)" : "linear-gradient(135deg, var(--gold), var(--gold-2))",
                      color: "#000",
                      border: "none",
                      cursor: loading ? "not-allowed" : "pointer",
                      minWidth: "180px",
                      transition: "opacity 0.3s",
                    }}
                    onMouseEnter={(e) => { if (!loading) (e.currentTarget as HTMLElement).style.opacity = "0.85"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
                  >
                    {loading ? "Enviando..." : "Enviar Mensaje →"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
