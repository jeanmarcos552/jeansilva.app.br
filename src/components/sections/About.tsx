import { stats, achievements } from "@/lib/data"

export function About() {
  return (
    <section
      id="sobre"
      style={{
        maxWidth: "768px",
        margin: "0 auto",
        padding: "6rem 1.5rem",
      }}
    >
      <SectionLabel>Sobre</SectionLabel>

      <h2 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "1.25rem", letterSpacing: "-0.02em" }}>
        Mais de uma década construindo{" "}
        <span style={{ color: "var(--accent)" }}>produtos que importam</span>
      </h2>

      <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--muted)", marginBottom: "1rem" }}>
        Comecei a programar em 2015 e desde então trabalhei em e-commerces, plataformas governamentais, produtos
        financeiros e apps mobile com dezenas de milhares de usuários. Em 2018 adotei React como padrão; em 2021
        passei a focar principalmente em React Native.
      </p>

      <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--muted)", marginBottom: "1.5rem" }}>
        Atualmente na <strong style={{ color: "var(--text)" }}>B2</strong>, lidero o desenvolvimento de aplicações
        React Native e web com Laravel, entregando soluções escaláveis para times multifuncionais. Já passei por
        startups e agências, o que me deu visão ampla: sei escrever código limpo, refatorar legado e fazer escolhas
        técnicas que fazem sentido pro negócio.
      </p>

      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: "0.625rem",
          margin: 0,
          marginBottom: "3rem",
          padding: 0,
        }}
      >
        {achievements.map((item) => (
          <li
            key={item}
            style={{
              display: "flex",
              gap: "0.625rem",
              fontSize: "0.9375rem",
              color: "var(--muted)",
              lineHeight: 1.6,
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="2.5"
              style={{ flexShrink: 0, marginTop: "0.15rem" }}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1px",
          border: "1px solid var(--border)",
          borderRadius: "8px",
          overflow: "hidden",
          backgroundColor: "var(--border)",
        }}
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            style={{
              backgroundColor: "var(--surface)",
              padding: "1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: "1.625rem",
                fontWeight: 700,
                color: "var(--accent)",
                letterSpacing: "-0.02em",
              }}
            >
              {stat.value}
            </span>
            <span style={{ fontSize: "0.8125rem", color: "var(--muted)" }}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: "var(--font-geist-mono)",
        fontSize: "0.75rem",
        color: "var(--accent)",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        marginBottom: "0.75rem",
      }}
    >
      {children}
    </p>
  )
}
