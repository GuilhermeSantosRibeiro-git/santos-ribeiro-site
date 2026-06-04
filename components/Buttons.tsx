import Link from "next/link";
import type { ReactNode } from "react";
import { whatsappUrl } from "@/lib/site";

type ExternalButtonProps = {
  href?: string;
  children?: ReactNode;
};

export function PrimaryButton({ href = whatsappUrl, children = "Solicitar orçamento" }: ExternalButtonProps) {
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

type InternalButtonProps = {
  href?: string;
  children?: ReactNode;
};

export function SecondaryButton({ href = "/contato", children = "Fale com um especialista" }: InternalButtonProps) {
  return (
    <Link
      href={href as any}
      className="inline-flex items-center justify-center rounded-full border border-white/35 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
    >
      {children}
    </Link>
  );
}
