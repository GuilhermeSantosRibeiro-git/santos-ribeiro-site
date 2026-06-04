import Link from "next/link";
import { divisions, navigation, phoneDisplay, whatsappUrl } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-[#061f42] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <p className="text-xl font-black uppercase tracking-[0.2em]">Santos Ribeiro</p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-blue-100">
            Engenharia, Infraestrutura e Soluções para o Desenvolvimento. Atuamos de forma integrada para transformar projetos em ativos sólidos, seguros e sustentáveis.
          </p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-bold text-[#082f63]">
            Chamar no WhatsApp {phoneDisplay}
          </a>
        </div>
        <div>
          <p className="font-bold">Divisões</p>
          <div className="mt-4 grid gap-2 text-sm text-blue-100">
            {divisions.map((division) => (
              <Link key={division.slug} href={`/${division.slug}`} className="hover:text-white">
                {division.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-bold">Páginas</p>
          <div className="mt-4 grid gap-2 text-sm text-blue-100">
            {navigation.slice(1).map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-blue-100">
        © {new Date().getFullYear()} Santos Ribeiro. Todos os direitos reservados.
      </div>
    </footer>
  );
}
