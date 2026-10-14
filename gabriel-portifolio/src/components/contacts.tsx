export default function Contacts(){
    return(
        <section
      className="mt-10 py-12 px-8 sm:px-12 rounded-3xl bg-gradient-to-br from-[#ede9e0] via-[#f5f2eb] to-[#e8eee9] border border-[#dcd6c8] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 shadow-sm">
      <div className="space-y-3 max-w-xl">
        <span className="text-xs font-mono uppercase tracking-widest text-[#2e5a44] font-bold">Vamos conversar</span>
        <h3 className="font-serif text-3xl sm:text-4xl text-[#12201b] font-bold">
          Tem um novo desafio ou projeto em mente?
        </h3>
        <p className="text-base text-[#515e57] leading-relaxed font-normal">
          Estou disponível para novas oportunidades estratégicas, arquitetura de software sob demanda e consultorias
          técnicas.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto">
        
        <button
          className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-white border border-[#dcd6c8] text-[#16201c] text-sm sm:text-base font-semibold hover:bg-[#fbf9f4] transition-colors shadow-xs group"
          id="copy-email-btn">
          <span className="material-symbols-outlined text-lg text-[#2e5a44]">content_copy</span>
          <span className="" id="email-text-label">gabriel.dev@domain.com</span>
        </button>
        <a className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#1a2e26] text-[#fbf9f4] text-sm sm:text-base font-semibold hover:bg-[#243e34] transition-all shadow-sm hover:shadow-md"
          href="mailto:gabriel.dev@domain.com">
          <span className="">Enviar Mensagem</span>
          <span className="material-symbols-outlined text-base">arrow_forward</span>
        </a>
      </div>
    </section>
    )
}