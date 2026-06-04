import type { Metadata } from "next";
import { SectionHeading } from "@/components/Section";
import { divisions } from "@/lib/site";

export const metadata: Metadata = {
  title: "Quem Somos",
  description: "Conheça a Santos Ribeiro, grupo com atuação integrada em engenharia, infraestrutura, construção, ambiental e SST.",
};

export default function QuemSomos() {
  return (
    <>
      <section className="bg-[#082f63] px-4 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.32em] text-blue-100">Quem Somos</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">Um grupo técnico para viabilizar empreendimentos completos</h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-blue-50">A Santos Ribeiro reúne engenharia, infraestrutura, construção, ambiental e SST em uma estrutura corporativa moderna, voltada a planejamento, execução e conformidade.</p>
        </div>
      </section>
      <section className="px-4 py-20 lg:px-8">
        <SectionHeading eyebrow="Nossa essência" title="Visão multidisciplinar, atendimento próximo e padrão técnico" description="Trabalhamos para gerar segurança técnica, eficiência operacional e clareza em cada etapa do empreendimento." />
        <div className="mx-auto mt-12 grid max-w-7xl gap-6 md:grid-cols-3">
          {[
            ["Missão", "Entregar soluções integradas que conectem projeto, obra, documentação, sustentabilidade e segurança."],
            ["Visão", "Ser referência regional como grupo de engenharia confiável para empresas, investidores e proprietários."],
            ["Valores", "Ética, responsabilidade técnica, transparência, segurança, inovação e compromisso com resultados."],
          ].map(([title, text]) => (
            <article key={title} className="rounded-3xl bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-black text-[#082f63]">{title}</h2>
              <p className="mt-4 leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-slate-100 px-4 py-20 lg:px-8">
        <SectionHeading eyebrow="Estrutura" title="Divisões conectadas para reduzir interfaces e acelerar decisões" />
        <div className="mx-auto mt-12 grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-5">
          {divisions.map((division) => <div key={division.slug} className="rounded-2xl bg-white p-5 text-center font-black text-[#082f63]">{division.title}</div>)}
        </div>
      </section>
    </>
  );
}
