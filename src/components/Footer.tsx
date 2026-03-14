"use client";
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#000", borderTop: "1px solid var(--border)" }}>
      {/* Top section */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "clamp(3rem, 6vw, 5rem) clamp(1.25rem, 6vw, 5rem)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "3rem",
        }}
      >
        {/* Brand */}
        <div style={{ gridColumn: "span 1" }}>
          <div style={{ marginBottom: "1rem" }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                fontSize: "1.1rem",
                letterSpacing: "0.3em",
                background: "linear-gradient(90deg, var(--gold), var(--gold-2))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              AXIOM
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "1.25rem" }}>
            <span
              style={{
                width: "6px", height: "6px", borderRadius: "50%",
                background: "#4ade80",
                boxShadow: "0 0 8px rgba(74,222,128,0.5)",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--muted)",
              }}
            >
              Sistemas activos
            </span>
          </div>
          <p style={{ color: "var(--muted)", fontSize: "0.88rem", lineHeight: 1.75, maxWidth: "240px" }}>
            Construimos sitios web de nueva generación potenciados por inteligencia artificial.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--muted)",
              marginBottom: "1.5rem",
            }}
          >
            Navegación
          </p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column" as const, gap: "0.9rem" }}>
            {["Trabajo", "Servicios", "Proceso", "Contacto"].map((item, i) => (
              <li key={item}>
                <a
                  href={`#${["work", "services", "process", "contact"][i]}`}
                  style={{
                    color: "var(--muted)",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "var(--white)"; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "var(--muted)"; }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--muted)",
              marginBottom: "1.5rem",
            }}
          >
            Servicios
          </p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column" as const, gap: "0.9rem" }}>
            {["Sitios Web con IA", "Animaciones & Motion", "Rendimiento Extremo", "Identidad de Marca"].map((item) => (
              <li key={item}>
                <span style={{ color: "var(--muted)", fontSize: "0.9rem" }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--muted)",
              marginBottom: "1.5rem",
            }}
          >
            Contacto
          </p>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "0.9rem" }}>
            <a
              href="mailto:vmontesquinonez@gmail.com"
              style={{ color: "var(--white)", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.3s" }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "var(--gold)"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "var(--white)"; }}
            >
              vmontesquinonez@gmail.com
            </a>
            <a
              href="tel:+523334488366"
              style={{ color: "var(--muted)", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.3s" }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "var(--white)"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "var(--muted)"; }}
            >
              +52 333 448 8366
            </a>
            <div style={{ display: "flex", gap: "1.25rem", marginTop: "0.5rem" }}>
              {["Twitter", "Instagram", "LinkedIn"].map((s) => (
                <a
                  key={s}
                  href="#"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6rem",
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
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "1.5rem clamp(1.25rem, 6vw, 5rem)",
          borderTop: "1px solid var(--border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          flexWrap: "wrap" as const,
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.62rem",
            letterSpacing: "0.12em",
            color: "var(--muted)",
          }}
        >
          © {year} AXIOM Studio. Todos los derechos reservados.
        </p>
        <div style={{ display: "flex", gap: "2rem" }}>
          {["Privacidad", "Términos"].map((item) => (
            <a
              key={item}
              href="#"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.62rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--muted)",
                textDecoration: "none",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "var(--white)"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "var(--muted)"; }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
