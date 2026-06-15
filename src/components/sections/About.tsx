import { stats } from "@/lib/data"

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

      <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--muted)", marginBottom: "3rem" }}>
        Hoje, além de codar, coordeno tecnicamente times de até 6 pessoas — mentorando, fazendo code review e
        construindo processos de qualidade. Minha maior entrega recente foi elevar a avaliação do{" "}
        <strong style={{ color: "var(--text)" }}>App do Formando</strong> de 2.8 para 4.0 nas lojas, com mais de
        10 mil usuários ativos.
      </p>

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
