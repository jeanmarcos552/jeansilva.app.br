# jeansilva.app.br

Personal portfolio and professional website — live at **[jeansilva.app.br](https://jeansilva.app.br)**

Built with Next.js 16, React 19, Tailwind CSS 4, and TypeScript. Containerised with Docker and deployed via a GitHub Actions CI/CD pipeline.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 (strict) |
| Styling | Tailwind CSS 4 |
| Runtime | React 19 |
| Containerisation | Docker — multi-stage build |
| CI/CD | GitHub Actions |

---

## Architecture

The production image is built in three isolated Docker stages:

```
deps     → installs dependencies from package-lock.json (npm ci)
builder  → compiles the Next.js standalone output
runner   → minimal Alpine image, non-root user, EXPOSE 3000
```

This keeps the final image lean and avoids shipping dev dependencies or build tooling to production.

---

## Running locally

**Prerequisites:** Node.js 20+ or Docker

```bash
# Clone
git clone https://github.com/jeanmarcos552/jeansilva.app.br.git
cd jeansilva.app.br

# Install and run (dev mode)
npm install
npm run dev
# → http://localhost:3000

# Or run with Docker
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

---

## CI/CD pipeline

Every push to `main` triggers a GitHub Actions workflow that runs:

1. **Lint** — ESLint with `eslint-config-next`
2. **Build** — `next build` to catch type and compilation errors

The same Dockerfile used locally is the one deployed to production — no environment drift.

---

## Project structure

```
src/
├── app/          # Next.js App Router — layouts, pages, and route segments
└── ...

public/           # Static assets served directly
Dockerfile        # Multi-stage production build
.github/
└── workflows/    # GitHub Actions CI pipeline
```

---

## About the author

**Jean Marcos Vieira da Silva** — Senior Full Stack Engineer based in Goiânia, Brazil.
10+ years shipping production software: mobile apps with 10k+ MAU, financial sector systems, and platforms for Brazilian federal government (CNJ, CNMP, Ministry of Defense).

- Website: [jeansilva.app.br](https://jeansilva.app.br)
- LinkedIn: [linkedin.com/in/jean-marcos-full-stack](https://www.linkedin.com/in/jean-marcos-full-stack)
- GitHub: [@jeanmarcos552](https://github.com/jeanmarcos552)
- Email: jean.silva552@gmail.com
