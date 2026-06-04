import type { Metadata } from "next";
import { SectionHeading } from "@/components/Section";
import { posts } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description: "Artigos técnicos da Santos Ribeiro sobre engenharia, infraestrutura, construção, ambiental e SST.",
};

export default function Blog() {
  return (
    <>
      <section className="bg-[#082f63] px-4 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.32em] text-blue-100">Blog</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">Conteúdo técnico para quem planeja, executa e regulariza</h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-blue-50">Uma área editorial pronta para SEO, educação do cliente e geração de oportunidades qualificadas.</p>
        </div>
      </section>
      <section className="px-4 py-20 lg:px-8">
        <SectionHeading eyebrow="Artigos" title="Últimas publicações" description="Posts iniciais com temas estratégicos para atrair clientes de engenharia, obra, meio ambiente e SST." />
        <div className="mx-auto mt-12 grid max-w-7xl gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="rounded-3xl bg-white p-7 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0f4c91]">{post.tag}</p>
              <h2 className="mt-4 text-2xl font-black text-slate-950">{post.title}</h2>
              <p className="mt-4 leading-7 text-slate-600">{post.excerpt}</p>
              <time className="mt-6 block text-sm font-bold text-slate-500" dateTime={post.date}>{new Date(post.date).toLocaleDateString("pt-BR", { timeZone: "UTC" })}</time>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
