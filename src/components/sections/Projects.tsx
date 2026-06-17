import { projects, type ProjectStatus } from "@/lib/data"
import { SectionLabel } from "./About"

const statusConfig: Record<ProjectStatus, { label: string; color: string; bg: string; border: string }> = {
  online: {
    label: "Online",
    color: "#4ade80",
    bg: "rgba(74,222,128,0.08)",
    border: "rgba(74,222,128,0.2)",
  },
  concluido: {
    label: "Concluído · em evolução",
    color: "#38bdf8",
    bg: "rgba(56,189,248,0.08)",
    border: "rgba(56,189,248,0.2)",
  },
  "em-desenvolvimento": {
    label: "Em desenvolvimento",
    color: "#facc15",
    bg: "rgba(250,204,21,0.08)",
    border: "rgba(250,204,21,0.2)",
  },
  "em-breve": {
    label: "Em breve",
    color: "#94a3b8",
    bg: "rgba(148,163,184,0.08)",
    border: "rgba(148,163,184,0.2)",
  },
}

export function Projects() {
  return (
    <section
      id="projetos"
      style={{
        maxWidth: "768px",
        margin: "0 auto",
        padding: "6rem 1.5rem",
        borderTop: "1px solid var(--border)",
      }}
    >
      <SectionLabel>Projetos</SectionLabel>

      <h2
        style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "0.75rem", letterSpacing: "-0.02em" }}
      >
        O que estou construindo
      </h2>
      <p style={{ fontSize: "0.9rem", color: "var(--muted)", marginBottom: "2.5rem", lineHeight: 1.7 }}>
        Projetos públicos desenvolvidos para demonstrar as mesmas práticas que aplico em produção: CI/CD, testes,
        observabilidade e arquitetura limpa.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {projects.map((project) => {
          const status = statusConfig[project.status]
          return (
            <div
              key={project.title}
              style={{
                padding: "1.5rem",
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                transition: "border-color 0.15s",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "0.625rem",
                  gap: "0.75rem",
                  flexWrap: "wrap",
                }}
              >
                <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--text)" }}>{project.title}</h3>

                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexShrink: 0 }}>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.375rem",
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: "0.6875rem",
                      padding: "0.2rem 0.5rem",
                      backgroundColor: status.bg,
                      color: status.color,
                      borderRadius: "999px",
                      border: `1px solid ${status.border}`,
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor: status.color,
                      }}
                    />
                    {status.label}
                  </span>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "var(--muted)", display: "flex", transition: "color 0.15s" }}
                      aria-label="GitHub"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
                      </svg>
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "var(--muted)", display: "flex", transition: "color 0.15s" }}
                      aria-label="Ver ao vivo"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              <p style={{ fontSize: "0.875rem", color: "var(--muted)", lineHeight: 1.65, marginBottom: "1rem" }}>
                {project.description}
              </p>

              {project.highlights && (
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    margin: 0,
                    marginBottom: "1rem",
                    padding: 0,
                  }}
                >
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      style={{
                        display: "flex",
                        gap: "0.5rem",
                        fontSize: "0.8125rem",
                        color: "var(--muted)",
                        lineHeight: 1.6,
                      }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--accent)"
                        strokeWidth="2.5"
                        style={{ flexShrink: 0, marginTop: "0.2rem" }}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: "0.75rem",
                      padding: "0.125rem 0.5rem",
                      backgroundColor: "rgba(255,255,255,0.04)",
                      border: "1px solid var(--border)",
                      borderRadius: "3px",
                      color: "var(--muted)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
