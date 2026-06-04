import { phoneDisplay, whatsappUrl } from "@/lib/site";

export function QuoteForm() {
  return (
    <form className="card-shadow grid gap-4 rounded-3xl bg-white p-6" action={whatsappUrl}>
      <div>
        <label className="text-sm font-bold text-slate-700" htmlFor="name">Nome</label>
        <input id="name" name="name" className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#082f63]" placeholder="Seu nome" />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-bold text-slate-700" htmlFor="phone">Telefone</label>
          <input id="phone" name="phone" className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#082f63]" placeholder={phoneDisplay} />
        </div>
        <div>
          <label className="text-sm font-bold text-slate-700" htmlFor="division">Divisão</label>
          <select id="division" name="division" className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#082f63]">
            <option>Engenharia</option>
            <option>Infraestrutura</option>
            <option>Construtora</option>
            <option>Ambiental</option>
            <option>SST</option>
          </select>
        </div>
      </div>
      <div>
        <label className="text-sm font-bold text-slate-700" htmlFor="message">Como podemos ajudar?</label>
        <textarea id="message" name="message" rows={5} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#082f63]" placeholder="Descreva seu projeto, obra ou necessidade técnica." />
      </div>
      <button className="rounded-full bg-[#082f63] px-6 py-4 text-sm font-black text-white transition hover:bg-[#061f42]" type="submit">
        Enviar solicitação pelo WhatsApp
      </button>
    </form>
  );
}
