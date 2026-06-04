export const phoneDisplay = "(35) 99944-1663";
export const whatsappNumber = "5535999441663";
export const whatsappMessage = encodeURIComponent(
  "Olá, gostaria de solicitar um orçamento com a Santos Ribeiro.",
);
export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
export const siteUrl = "https://santosribeiro.com.br";

export const divisions = [
  {
    slug: "engenharia",
    label: "Engenharia",
    title: "Santos Ribeiro Engenharia",
    summary:
      "Projetos técnicos, regularização, fiscalização, laudos e gerenciamento com precisão, conformidade e visão de execução.",
    services: [
      "Projetos residenciais",
      "Projetos comerciais",
      "Projetos industriais",
      "Projetos estruturais",
      "Projetos hidrossanitários",
      "Projetos de drenagem",
      "Projetos de terraplenagem",
      "Topografia",
      "Georreferenciamento",
      "Regularização de imóveis",
      "Fiscalização de obras",
      "Gerenciamento de projetos",
      "Laudos técnicos",
    ],
  },
  {
    slug: "infraestrutura",
    label: "Infraestrutura",
    title: "Santos Ribeiro Infraestrutura",
    summary:
      "Execução e apoio operacional para obras urbanas, industriais e loteamentos, com foco em produtividade e segurança.",
    services: [
      "Terraplenagem",
      "Pavimentação",
      "Drenagem",
      "Rede de água",
      "Rede de esgoto",
      "Urbanização",
      "Locação de máquinas",
      "Locação de equipamentos",
    ],
  },
  {
    slug: "construtora",
    label: "Construtora",
    title: "Santos Ribeiro Construtora",
    summary:
      "Construções, reformas, ampliações e galpões conduzidos com planejamento, controle técnico e acabamento profissional.",
    services: [
      "Construção residencial",
      "Construção comercial",
      "Construção industrial",
      "Reformas",
      "Ampliações",
      "Galpões",
    ],
  },
  {
    slug: "ambiental",
    label: "Ambiental",
    title: "Santos Ribeiro Ambiental",
    summary:
      "Consultoria e documentação ambiental para viabilizar empreendimentos com responsabilidade, rastreabilidade e conformidade.",
    services: [
      "Licenciamento ambiental",
      "CAR",
      "PRAD",
      "ESG",
      "Gestão de resíduos",
      "Consultoria ambiental",
    ],
  },
  {
    slug: "sst",
    label: "SST",
    title: "Santos Ribeiro SST",
    summary:
      "Programas, laudos, treinamentos e consultorias em Segurança do Trabalho para reduzir riscos e fortalecer a cultura preventiva.",
    services: ["PGR", "LTCAT", "Treinamentos", "Consultorias", "Segurança do Trabalho"],
  },
] as const;

export const portfolio = [
  {
    title: "Obra corporativa integrada",
    category: "Construção comercial",
    location: "Sul de Minas Gerais",
    description:
      "Planejamento, execução civil e compatibilização de projetos para empreendimento comercial de médio porte.",
  },
  {
    title: "Infraestrutura de loteamento",
    category: "Terraplenagem, drenagem e pavimentação",
    location: "Minas Gerais",
    description:
      "Soluções integradas para preparo de vias, redes de drenagem e urbanização com controle de etapas.",
  },
  {
    title: "Regularização e projetos técnicos",
    category: "Engenharia e documentação",
    location: "Atendimento regional",
    description:
      "Levantamentos, laudos, regularização imobiliária e projetos complementares para imóveis urbanos e rurais.",
  },
] as const;

export const posts = [
  {
    title: "Como integrar projeto, obra e licenciamento para reduzir atrasos",
    excerpt:
      "Entenda por que uma gestão técnica multidisciplinar melhora previsibilidade, custos e tomada de decisão.",
    date: "2026-05-20",
    tag: "Gestão de Obras",
  },
  {
    title: "Regularização de imóveis: quando procurar suporte técnico",
    excerpt:
      "Veja situações em que topografia, georreferenciamento e laudos ajudam a destravar documentações.",
    date: "2026-05-08",
    tag: "Engenharia",
  },
  {
    title: "SST na construção: documentos essenciais para empresas",
    excerpt:
      "PGR, LTCAT e treinamentos formam uma base importante para operação segura e conformidade trabalhista.",
    date: "2026-04-26",
    tag: "SST",
  },
] as const;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/engenharia", label: "Engenharia" },
  { href: "/infraestrutura", label: "Infraestrutura" },
  { href: "/construtora", label: "Construtora" },
  { href: "/ambiental", label: "Ambiental" },
  { href: "/sst", label: "SST" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
] as const;
