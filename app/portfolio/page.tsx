import type { Metadata } from "next";
import { SectionHeading } from "@/components/Section";
import { portfolio } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfólio",
  description: "Portfólio de obras, projetos e soluções integradas da Santos Ribeiro.",
};

export default function Portfolio() {
  return (
    <>
      <section className="bg-[#082f63] px-4 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.32em] text-blue-100">Portfólio</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">Área para portfólio de obras e projetos Santos Ribeiro</h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-blue-50">Apresente fotos, escopo, localização, indicadores e diferenciais técnicos de cada entrega.</p>
        </div>
      </section>
      <section className="px-4 py-20 lg:px-8">
        <SectionHeading eyebrow="Cases" title="Projetos em destaque" description="Cards prontos para receber imagens reais, dados de metragem, prazos, clientes e depoimentos." />
        <div className="mx-auto mt-12 grid max-w-7xl gap-6 md:grid-cols-3">
          {portfolio.map((item) => (
            <article key={item.title} className="card-shadow overflow-hidden rounded-3xl bg-white">
              <div className="h-56 bg-gradient-to-br from-[#082f63] via-[#0f4c91] to-slate-300" />
              <div className="p-7">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0f4c91]">{item.category}</p>
                <h2 className="mt-3 text-2xl font-black text-slate-950">{item.title}</h2>
                <p className="mt-2 text-sm font-bold text-slate-500">{item.location}</p>
                <p className="mt-4 leading-7 text-slate-600">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
