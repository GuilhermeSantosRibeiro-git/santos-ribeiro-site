import type { Metadata } from "next";
import Link from "next/link";
import { QuoteForm } from "@/components/QuoteForm";
import { phoneDisplay, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato",
  description: "Solicite orçamento com a Santos Ribeiro pelo WhatsApp ou formulário de contato.",
};

export default function Contato() {
  return (
    <>
      <section className="bg-[#082f63] px-4 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.32em] text-blue-100">Contato</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">Solicite um orçamento ou atendimento técnico</h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-blue-50">Nossa equipe está pronta para entender seu projeto, obra, regularização, demanda ambiental ou necessidade de SST.</p>
        </div>
      </section>
      <section className="px-4 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <aside className="rounded-3xl bg-slate-100 p-7">
            <h2 className="text-2xl font-black text-[#082f63]">Canais de atendimento</h2>
            <p className="mt-4 leading-7 text-slate-600">Use o WhatsApp para contato rápido ou preencha o formulário de orçamento com os detalhes iniciais.</p>
            <Link href={whatsappUrl} className="mt-6 inline-flex rounded-full bg-[#082f63] px-6 py-4 text-sm font-black text-white">WhatsApp {phoneDisplay}</Link>
            <div className="mt-8 grid gap-4 text-sm text-slate-600">
              <p><strong className="text-slate-950">Atendimento:</strong> Engenharia, Infraestrutura, Construtora, Ambiental e SST.</p>
              <p><strong className="text-slate-950">Região:</strong> Minas Gerais e demandas sob consulta.</p>
            </div>
          </aside>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
