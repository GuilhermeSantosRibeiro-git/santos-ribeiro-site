import Link, { type LinkProps } from "next/link";
import { whatsappUrl } from "@/lib/site";

export function PrimaryButton({ href = whatsappUrl, children = "Solicitar orçamento" }: { href?: string; children?: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-[#082f63] transition hover:-translate-y-0.5 hover:bg-slate-100"
    >
      {children}
    </a>
  );
}

type SecondaryButtonProps = {
  href?: LinkProps["href"];
  children?: React.ReactNode;
};

export function SecondaryButton({ href = "/contato", children = "Fale com um especialista" }: SecondaryButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-white/35 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
    >
      {children}
    </Link>
  );
}
