export default function Hero(){
    return(
        <section className="py-12 md:py-20 border-b border-[#dcd6c8]/80">
      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-center justify-between gap-12 lg:gap-16">
        
        <div className="flex-1 space-y-7 text-left">
          <div
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#e8eee9] text-[#243e34] border border-[#cbd8cf] text-xs font-mono uppercase tracking-wider font-bold">
            <span className="">PORTFOLIO SELECIONADO</span>
            <span className="text-[#2e5a44]/40">•</span>
            <span className="">2025</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#12201b] leading-[1.1] tracking-tight font-bold">
            Engenharia web refinada, arquitetura limpa e interfaces acolhedoras.
          </h1>
          <p className="text-lg sm:text-xl text-[#515e57] leading-relaxed max-w-2xl font-normal">
            Olá, sou o <strong className="font-bold text-[#12201b]">Gabriel</strong>. Engenheiro Full Stack especializado em
            sistemas resilientes, alta escalabilidade no backend e interfaces ricas com sensibilidade estética.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#1a2e26] text-[#fbf9f4] text-sm sm:text-base font-semibold hover:bg-[#243e34] transition-all shadow-sm hover:shadow-md"
              href="#projetos">
              <span className="">Explorar Projetos</span>
              <span className="material-symbols-outlined text-lg">arrow_downward</span>
            </a>
            <a className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-[#ede9e0] border border-[#dcd6c8] text-[#16201c] text-sm sm:text-base font-semibold hover:bg-[#e4dfd4] transition-colors"
              href="https://github.com" rel="noopener noreferrer" target="_blank">
              <span className="material-symbols-outlined text-lg">code</span>
              <span className="font-mono text-xs sm:text-sm">github.com/gabriel</span>
            </a>
          </div>
        </div>
       
        <div className="relative shrink-0">
          <div
            className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-3xl p-3 bg-gradient-to-b from-[#e8e4da] to-[#dcd6c8] shadow-lg border border-[#dcd6c8]">
            <div
              className="w-full h-full rounded-2xl overflow-hidden bg-[#f5f2eb] relative flex items-center justify-center border border-[#dcd6c8]">
              <img alt="Foto de Gabriel"
                className="w-full h-full object-cover grayscale-[15%] contrast-[102%] hover:scale-105 transition-transform duration-700 ease-out"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKGUatxuNzLo4CWwKP67Ptssfj2HqZxJo6U9qe3Rs8VpSikcgba-5TnqC8ftYxvjWbh8sGD80DCwHjAv62vbfTby5OKU__NBdEgOMvrBV22RLvZ0xk2TH9gY4LREzdrEeDoUdAhif9sR9C9bC4LFXDzmuDZD0KZaQaIfbBQ7XY2QJpwHBm95Ol7mWkh4ZRbJPV2crAfwti4okRG3wRy4JT-dgLSkfdwXTOcsGic1lLXrzWrBUPC6iG9g" />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#12201b]/35 via-transparent to-transparent pointer-events-none">
              </div>
            </div>
            
            <div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#fbf9f4] border border-[#dcd6c8] shadow-md px-4 py-1.5 rounded-full flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2e5a44]"></span>
              <span className="text-xs font-mono text-[#16201c] uppercase tracking-wider font-bold">Open to work</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}