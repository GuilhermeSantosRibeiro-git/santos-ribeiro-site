import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Santos Ribeiro | Engenharia, Infraestrutura e Construção",
    template: "%s | Santos Ribeiro",
  },
  description:
    "Soluções integradas em engenharia, infraestrutura, construção, ambiental e SST para empresas, empreendimentos e propriedades.",
  keywords: [
    "Santos Ribeiro",
    "engenharia",
    "infraestrutura",
    "construtora",
    "licenciamento ambiental",
    "segurança do trabalho",
    "terraplenagem",
    "pavimentação",
  ],
  openGraph: {
    title: "Santos Ribeiro | Soluções Integradas em Engenharia",
    description: "Engenharia, Infraestrutura e Soluções para o Desenvolvimento.",
    url: siteUrl,
    siteName: "Santos Ribeiro",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={inter.variable}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
