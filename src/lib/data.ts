export const personal = {
  name: "Jean Marcos",
  fullName: "Jean Marcos Vieira da Silva",
  title: "Desenvolvedor Sênior",
  stack: ["React Native", "React", "TypeScript"],
  location: "Goiânia, GO",
  email: "jean.silva552@gmail.com",
  github: "https://github.com/jeanmarcos552",
  linkedin: "https://www.linkedin.com/in/jean-marcos-full-stack/",
  summary:
    "Desenvolvedor com mais de 10 anos de experiência em produtos digitais em produção. Focado em React Native e React desde 2018, TypeScript como padrão. Coordeno tecnicamente times de até 6 pessoas com foco em mentoria, code review e cultura de qualidade.",
}

export const stats = [
  { value: "10+", label: "anos de experiência" },
  { value: "10k+", label: "usuários ativos" },
  { value: "2.8 → 4.0", label: "avaliação nas lojas" },
  { value: "6", label: "devs liderados" },
]

export const skills = [
  {
    category: "Mobile",
    items: ["React Native", "Expo", "EAS Build", "Push Notifications", "Deep Linking", "Apple Store", "Google Play"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "Redux", "Zustand", "Tailwind CSS", "SSR / SSG"],
  },
  {
    category: "Backend",
    items: ["Node.js", "NestJS", "APIs RESTful", "Laravel", "Firebase", "MySQL", "Prisma"],
  },
  {
    category: "Testes & QA",
    items: ["Jest", "React Testing Library", "Detox", "Cypress"],
  },
  {
    category: "DevOps",
    items: ["GitHub Actions", "Fastlane", "Docker", "Git / GitFlow", "CI/CD"],
  },
  {
    category: "Observabilidade",
    items: ["Sentry", "Crashlytics", "Datadog"],
  },
  {
    category: "IA Generativa",
    items: ["Anthropic API (Claude)", "LangChain", "Function Calling", "Agentes de IA"],
  },
]

export const experiences = [
  {
    role: "Desenvolvedor Sênior React / React Native",
    company: "B2 Agência",
    location: "Goiânia, GO",
    period: "Mar 2021 — atual",
    current: true,
    highlights: [
      "Referência técnica de portfólio com 10+ apps mobile, coordenando time de 4 a 6 devs com mentoria e code review.",
      "Elevei avaliação do App do Formando (10k+ usuários/mês) de 2.8 para 4.0 via refatoração, melhorias de performance e processo de QA.",
      "Implantei CI/CD com GitHub Actions + Fastlane, reduzindo publicação nas lojas de dias a minutos por release.",
      "Introduzi Git/GitFlow, testes automatizados (Jest, Detox) e observabilidade (Sentry, Datadog) na equipe.",
    ],
  },
  {
    role: "Desenvolvedor Sênior Frontend (PJ)",
    company: "Quasar Flash",
    location: "São Paulo, SP",
    period: "Jul 2021 — Abr 2023",
    current: false,
    highlights: [
      "Produtos web para o setor financeiro em React.js e Next.js com foco em SSR/SSG e performance.",
      "Gestão de estado com Redux/Zustand, estilização com Tailwind CSS, padronização com Docker e CI/CD.",
    ],
  },
  {
    role: "Desenvolvedor Full Stack Pleno",
    company: "Interagi Tecnologia",
    location: "Goiânia, GO",
    period: "Mar 2018 — Fev 2021",
    current: false,
    highlights: [
      "Soluções para órgãos públicos federais (CNMP, CNJ, IPEA, Ministério da Defesa) com foco em escalabilidade e segurança.",
      "Stack: PHP, React.js, MySQL. Liderança técnica de frentes e automação de rotinas internas.",
    ],
  },
  {
    role: "Desenvolvedor Full Stack",
    company: "B/300",
    location: "Goiânia, GO",
    period: "Jun 2015 — Fev 2018",
    current: false,
    highlights: [
      "E-commerces e plataformas web com foco em SEO e performance.",
      "Stack: PHP, React.js, JavaScript, MySQL.",
    ],
  },
]

export type ProjectStatus = "online" | "em-desenvolvimento" | "em-breve"

export const projects = [
  {
    title: "Portfolio",
    description:
      "Este site. Construído com Next.js 16, TypeScript e Tailwind CSS. Deploy automatizado na Vercel.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "online" as ProjectStatus,
    github: "https://github.com/jeanmarcos552/portfolio",
    live: null,
  },
  {
    title: "Finance Tracker Mobile",
    description:
      "App mobile para controle financeiro com autenticação, gráficos, push notifications e deep linking.",
    stack: ["React Native", "Expo", "Zustand", "Supabase", "TypeScript"],
    status: "em-desenvolvimento" as ProjectStatus,
    github: "https://github.com/jeanmarcos552/jean-app-front",
    live: null,
  },
  {
    title: "Dashboard Financeiro",
    description:
      "API REST com NestJS + Prisma e frontend Next.js com autenticação, gráficos e Docker Compose.",
    stack: ["NestJS", "Prisma", "Next.js", "PostgreSQL", "Docker"],
    status: "em-desenvolvimento" as ProjectStatus,
    github: "https://github.com/jeanmarcos552/finances-node",
    live: null,
  },
  {
    title: "CV Reviewer Agent",
    description:
      "Agente de IA que analisa compatibilidade entre currículo e vaga com streaming de resposta em tempo real.",
    stack: ["Next.js", "TypeScript", "Claude API", "Tailwind CSS"],
    status: "em-breve" as ProjectStatus,
    github: null,
    live: null,
  },
]
