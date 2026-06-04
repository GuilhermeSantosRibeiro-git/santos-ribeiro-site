import Link from "next/link";
import { PrimaryButton, SecondaryButton } from "@/components/Buttons";
import { QuoteForm } from "@/components/QuoteForm";
import { SectionHeading } from "@/components/Section";
import { whatsappUrl } from "@/lib/site";

export function DivisionPage({ title, summary, services }: { title: string; summary: string; services: readonly string[] }) {
  return (
    <>
      <section className="bg-grid bg-[#082f63] px-4 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.32em] text-blue-100">Divisão Santos Ribeiro</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-blue-50">{summary}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton href={whatsappUrl}>Solicitar orçamento</PrimaryButton>
            <SecondaryButton href="/contato">Agendar atendimento</SecondaryButton>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 lg:px-8">
        <SectionHeading eyebrow="Serviços" title="Soluções especializadas com atendimento consultivo" description="Atuação técnica para clientes residenciais, comerciais, industriais, rurais, incorporadores, empresas e gestores públicos." />
        <div className="mx-auto mt-12 grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service} className="rounded-2xl border border-slate-200 bg-white p-5 font-bold text-slate-800 shadow-sm">
              <span className="mr-2 text-[#0f4c91]">✓</span>{service}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-100 px-4 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          {[
            ["Diagnóstico", "Entendimento da demanda, análise documental, visita técnica e definição de escopo."],
            ["Planejamento", "Cronograma, equipe, orçamento orientativo e compatibilização técnica entre disciplinas."],
            ["Entrega", "Execução ou documentação com acompanhamento, registros e comunicação transparente."],
          ].map(([step, text]) => (
            <article key={step} className="rounded-3xl bg-white p-7">
              <h2 className="text-2xl font-black text-[#082f63]">{step}</h2>
              <p className="mt-4 leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#0f4c91]">Próximo passo</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">Conte sua necessidade para nossa equipe</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">Preencha o formulário ou chame no WhatsApp para receber retorno sobre escopo, prazo e viabilidade.</p>
            <Link href="/portfolio" className="mt-8 inline-flex rounded-full border border-[#082f63] px-6 py-3 text-sm font-black text-[#082f63]">Ver portfólio</Link>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
