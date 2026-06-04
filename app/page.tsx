import Link from "next/link";
import { PrimaryButton, SecondaryButton } from "@/components/Buttons";
import { QuoteForm } from "@/components/QuoteForm";
import { SectionHeading } from "@/components/Section";
import { divisions, portfolio, posts, whatsappUrl } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="bg-grid relative overflow-hidden bg-[#082f63] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_35%),linear-gradient(135deg,rgba(6,31,66,0.2),rgba(6,31,66,0.75))]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-24 md:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-32">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-blue-100">Grupo Santos Ribeiro</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
              Soluções Integradas em Engenharia, Infraestrutura e Construção
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-blue-50">
              Engenharia, Infraestrutura e Soluções para o Desenvolvimento.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href={whatsappUrl}>Solicitar orçamento agora</PrimaryButton>
              <SecondaryButton href="/portfolio">Conhecer portfólio</SecondaryButton>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 backdrop-blur">
            <div className="grid gap-4">
              {divisions.map((division, index) => (
                <Link key={division.slug} href={`/${division.slug}`} className="rounded-2xl bg-white p-5 text-[#082f63] transition hover:-translate-y-1 hover:bg-blue-50">
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">0{index + 1}</span>
                  <h2 className="mt-2 text-xl font-black">{division.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{division.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 lg:px-8">
        <SectionHeading eyebrow="Atuação integrada" title="Cinco divisões para atender todo o ciclo do seu empreendimento" description="Da concepção técnica à execução, regularização, sustentabilidade e segurança ocupacional." />
        <div className="mx-auto mt-12 grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {divisions.map((division) => (
            <article key={division.slug} className="card-shadow rounded-3xl bg-white p-7">
              <h3 className="text-2xl font-black text-[#082f63]">{division.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{division.summary}</p>
              <ul className="mt-5 grid gap-2 text-sm font-semibold text-slate-700">
                {division.services.slice(0, 6).map((service) => (
                  <li key={service} className="flex gap-2"><span className="text-[#0f4c91]">✓</span>{service}</li>
                ))}
              </ul>
              <Link href={`/${division.slug}`} className="mt-6 inline-flex font-black text-[#082f63]">Ver serviços →</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-100 px-4 py-20 lg:px-8">
        <SectionHeading eyebrow="Portfólio" title="Obras e projetos com padrão corporativo" description="Uma área preparada para destacar empreendimentos, fotos, indicadores e cases técnicos da Santos Ribeiro." />
        <div className="mx-auto mt-12 grid max-w-7xl gap-6 md:grid-cols-3">
          {portfolio.map((item) => (
            <article key={item.title} className="rounded-3xl bg-white p-7">
              <div className="mb-6 h-44 rounded-2xl bg-gradient-to-br from-[#082f63] to-slate-300" />
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0f4c91]">{item.category}</p>
              <h3 className="mt-3 text-xl font-black text-slate-950">{item.title}</h3>
              <p className="mt-2 text-sm font-semibold text-slate-500">{item.location}</p>
              <p className="mt-4 leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="Orçamento" title="Fale com a equipe Santos Ribeiro" description="Envie sua demanda e receba orientação inicial para projetos, obras, regularização, licenciamento ou SST." />
          </div>
          <QuoteForm />
        </div>
      </section>

      <section className="bg-[#061f42] px-4 py-20 text-white lg:px-8">
        <SectionHeading eyebrow="Blog" title="Conteúdo técnico para decisões mais seguras" description="Artigos sobre engenharia, obra, documentação, meio ambiente e segurança do trabalho." />
        <div className="mx-auto mt-12 grid max-w-7xl gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="rounded-3xl border border-white/10 bg-white/10 p-7">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-100">{post.tag}</p>
              <h3 className="mt-4 text-xl font-black">{post.title}</h3>
              <p className="mt-4 leading-7 text-blue-100">{post.excerpt}</p>
              <p className="mt-5 text-sm font-bold text-white">{new Date(post.date).toLocaleDateString("pt-BR", { timeZone: "UTC" })}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
