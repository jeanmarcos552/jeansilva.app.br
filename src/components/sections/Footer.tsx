import { personal } from "@/lib/data"

export function Footer() {
  return (
    <footer
      style={{
        maxWidth: "768px",
        margin: "0 auto",
        padding: "2rem 1.5rem",
        borderTop: "1px solid var(--border)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "0.5rem",
      }}
    >
      <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: "0.75rem", color: "var(--muted)" }}>
        © {new Date().getFullYear()} {personal.fullName}
      </span>
      <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: "0.75rem", color: "var(--muted)" }}>
        Feito com Next.js · Goiânia, GO
      </span>
    </footer>
  )
}
