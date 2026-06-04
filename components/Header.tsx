import Link from "next/link";
import { navigation, phoneDisplay, whatsappUrl } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Santos Ribeiro Home">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#082f63] text-lg font-black text-white">SR</span>
          <span>
            <span className="block text-base font-black uppercase tracking-[0.18em] text-[#082f63]">Santos Ribeiro</span>
            <span className="block text-xs font-semibold text-slate-500">Engenharia • Infraestrutura • Construção</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 text-sm font-semibold text-slate-700 xl:flex" aria-label="Navegação principal">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[#082f63]">
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-[#082f63] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#061f42] md:inline-flex"
        >
          WhatsApp {phoneDisplay}
        </a>
      </div>
    </header>
  );
}
