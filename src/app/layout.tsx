import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/Header"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jean Marcos — Desenvolvedor Sênior React Native & React",
  description:
    "Desenvolvedor Sênior com 10+ anos de experiência em React Native, React e TypeScript. Baseado em Goiânia, GO.",
  keywords: ["React Native", "React", "TypeScript", "Next.js", "Desenvolvedor Sênior", "Goiânia"],
  authors: [{ name: "Jean Marcos Vieira da Silva" }],
  openGraph: {
    title: "Jean Marcos — Desenvolvedor Sênior",
    description: "10+ anos de experiência em produtos digitais em produção.",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
