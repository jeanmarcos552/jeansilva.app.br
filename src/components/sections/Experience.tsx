import { experiences } from "@/lib/data"
import { SectionLabel } from "./About"

export function Experience() {
  return (
    <section
      id="experiencia"
      style={{
        maxWidth: "768px",
        margin: "0 auto",
        padding: "6rem 1.5rem",
        borderTop: "1px solid var(--border)",
      }}
    >
      <SectionLabel>Experiência</SectionLabel>

      <h2
        style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "2.5rem", letterSpacing: "-0.02em" }}
      >
        Histórico profissional
      </h2>

      <div style={{ position: "relative" }}>
        {/* Vertical line */}
        <div
          style={{
            position: "absolute",
            left: "7px",
            top: "8px",
            bottom: "8px",
            width: "1px",
            backgroundColor: "var(--border)",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {experiences.map((exp) => (
            <div key={exp.company} style={{ paddingLeft: "2rem", position: "relative" }}>
              {/* Dot */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: "6px",
                  width: "15px",
                  height: "15px",
                  borderRadius: "50%",
                  backgroundColor: exp.current ? "var(--accent)" : "var(--border)",
                  border: `2px solid ${exp.current ? "var(--accent)" : "var(--border)"}`,
                  boxShadow: exp.current ? "0 0 0 3px rgba(59,130,246,0.15)" : "none",
                }}
              />

              <div style={{ marginBottom: "0.375rem", display: "flex", alignItems: "baseline", gap: "0.5rem", flexWrap: "wrap" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--text)" }}>{exp.role}</h3>
                {exp.current && (
                  <span
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: "0.6875rem",
                      padding: "0.125rem 0.5rem",
                      backgroundColor: "rgba(59,130,246,0.1)",
                      color: "var(--accent)",
                      borderRadius: "999px",
                      border: "1px solid rgba(59,130,246,0.2)",
                    }}
                  >
                    atual
                  </span>
                )}
              </div>

              <p style={{ fontSize: "0.875rem", color: "var(--muted)", marginBottom: "0.875rem" }}>
                {exp.company} · {exp.location} · {exp.period}
              </p>

              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {exp.highlights.map((h, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: "0.9rem",
                      lineHeight: 1.65,
                      color: "var(--muted)",
                      paddingLeft: "1rem",
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        color: "var(--accent)",
                        fontWeight: 700,
                      }}
                    >
                      ›
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
