export const personal = {
  name: "Jean Marcos",
  fullName: "Jean Marcos Vieira da Silva",
  title: "Product Engineer",
  stack: ["Node.js, TypeScript, React, Next.js, NestJS", "AI, LLMs & Agents", "Mobile & Web"],
  location: "Goiânia, GO",
  email: "jean.silva552@gmail.com",
  github: "https://github.com/jeanmarcos552",
  linkedin: "https://www.linkedin.com/in/jean-marcos-full-stack/",
  summary:
    "Engenheiro Full Stack com 10+ anos de experiência construindo aplicações web e mobile de alta performance — do backend robusto à interface que o usuário realmente usa.",
  openToWork: "Aberto a oportunidades remotas, híbridas ou presenciais em Goiânia.",
}

export const stats = [
  { value: "10+", label: "anos de experiência" },
  { value: "10k+", label: "usuários ativos" },
  { value: "2.8 → 4.0", label: "avaliação nas lojas" },
  { value: "6", label: "devs liderados" },
]

export const achievements = [
  "Aplicações mobile publicadas em produção.",
  "Refatoração de sistemas legados em PHP puro para Laravel moderno.",
  "Integração de câmera, QR Code e leitura facial em apps React Native.",
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

export type ProjectStatus = "online" | "concluido" | "em-desenvolvimento" | "em-breve"

export type Project = {
  title: string
  description: string
  stack: string[]
  status: ProjectStatus
  github: string | null
  live: string | null
  highlights?: string[]
}

export const projects: Project[] = [
  {
    title: "Portfolio",
    description:
      "Este site. Construído com Next.js 16, TypeScript e Tailwind CSS. Deploy automatizado na Vercel.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "online",
    github: "https://github.com/jeanmarcos552/portfolio",
    live: null,
  },
  {
    title: "Design System Mobile",
    description:
      "Biblioteca de UI própria que serve de base para um app financeiro em React Native: 40+ componentes tipados, temáveis e composáveis, pensados para escalar features com consistência e velocidade.",
    highlights: [
      "Compound Components no Card (Card.Root, Card.Header, Card.Content, Card.Badge, Card.Collapsible) — composição flexível, sem prop drilling.",
      "API de formulários namespaced (Input.Text, Input.Select, Input.Date, Input.Radio, Input.Switch) integrada a react-hook-form + Zod.",
      "Sistema de tema tipado com variantes de fundo, borda e sombra; animações fluidas com Reanimated e TypeScript strict.",
    ],
    stack: ["React Native", "TypeScript", "Compound Components", "react-hook-form", "Zod", "Reanimated"],
    status: "concluido",
    github: "https://github.com/jeanmarcos552/jean-app-front/tree/main/src/components/ui",
    live: null,
  },
  {
    title: "WebSocket Boilerplate",
    description:
      "Boilerplate de servidor WebSocket em tempo real com Node.js, TypeScript, Express e Socket.IO. Arquitetura em camadas pronta para produção, usada para broadcast de check-in de eventos (Laravel → React Native).",
    highlights: [
      "Arquitetura em camadas (controllers, services, repositories e validators sobre um core de infraestrutura) inspirada em Clean Architecture.",
      "Autenticação de sockets via JWT (middleware) com salas por evento e endpoint REST protegido por X-API-KEY para broadcast server-to-server.",
      "Pronto para produção: Docker/Compose, Nginx com WSS/TLS, Helmet, logging estruturado com Pino e healthcheck.",
    ],
    stack: ["Node.js", "TypeScript", "Socket.IO", "Express", "JWT", "Docker"],
    status: "concluido",
    github: "https://github.com/jeanmarcos552/node-ws-boilerplate",
    live: null,
  },
  {
    title: "CV Reviewer Agent",
    description:
      "Agente de IA que analisa compatibilidade entre currículo e vaga com streaming de resposta em tempo real.",
    stack: ["Next.js", "TypeScript", "Claude API", "Tailwind CSS"],
    status: "em-breve",
    github: null,
    live: null,
  },
]
