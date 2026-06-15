import { skills } from "@/lib/data"
import { SectionLabel } from "./About"

export function Skills() {
  return (
    <section
      id="habilidades"
      style={{
        maxWidth: "768px",
        margin: "0 auto",
        padding: "6rem 1.5rem",
        borderTop: "1px solid var(--border)",
      }}
    >
      <SectionLabel>Habilidades</SectionLabel>

      <h2
        style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "2.5rem", letterSpacing: "-0.02em" }}
      >
        Stack técnica
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {skills.map((group) => (
          <div key={group.category}>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "var(--muted)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              {group.category}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {group.items.map((item) => (
                <span
                  key={item}
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontSize: "0.8125rem",
                    padding: "0.25rem 0.625rem",
                    backgroundColor: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "4px",
                    color: "var(--text)",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
