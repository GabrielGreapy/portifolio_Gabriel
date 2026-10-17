import DnsIcon from '@mui/icons-material/Dns';
import LayersIcon from '@mui/icons-material/Layers';

export default function Competences(){
    return(
        <section className="py-16 border-t border-[#dcd6c8]/80" id="sobre">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        <div className="space-y-4">
          <div className="text-xs font-mono uppercase tracking-widest text-[#2e5a44] font-bold">Abordagem &amp; Foco</div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#12201b] leading-snug font-bold">
            Sistemas resilientes, código sustentável.
          </h2>
          <p className="text-base text-[#515e57] leading-relaxed font-normal">
            Prefiro arquiteturas simples, escaláveis e de fácil manutenção a complexidades acidentais. Minha abordagem
            une a solidez e rigor de engenharia de backend com a sensibilidade e acabamento de um design sofisticado.
          </p>
        </div>
        
        <div
          className="bg-white p-8 rounded-3xl border border-[#dcd6c8] space-y-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 text-lg font-bold text-[#12201b]">
            <div className="w-10 h-10 rounded-xl bg-[#e8eee9] text-[#1a2e26] flex items-center justify-center">
              <DnsIcon/>
            </div>
            <span className="">Backend &amp; Dados</span>
          </div>
          <p className="text-sm sm:text-base text-[#515e57] leading-relaxed font-normal">
            Microsserviços de alto rendimento, barramentos de eventos assíncronos, caching de baixa latência e modelagem
            estrita em bancos relacionais e não-relacionais.
          </p>
          <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs text-[#16201c] font-semibold">
            <span className="px-3 py-1.5 rounded-lg bg-[#ede9e0] border border-[#dcd6c8]/60">Node.js / Bun</span>
            <span className="px-3 py-1.5 rounded-lg bg-[#ede9e0] border border-[#dcd6c8]/60">Django REST</span>
            <span className="px-3 py-1.5 rounded-lg bg-[#ede9e0] border border-[#dcd6c8]/60">Docker</span>
            <span className="px-3 py-1.5 rounded-lg bg-[#ede9e0] border border-[#dcd6c8]/60">PostgreSQL</span>
            <span className="px-3 py-1.5 rounded-lg bg-[#ede9e0] border border-[#dcd6c8]/60">FastAPI</span>
            <span className="px-3 py-1.5 rounded-lg bg-[#ede9e0] border border-[#dcd6c8]/60">Firebase & Supabase</span>
          </div>
        </div>
       
        <div
          className="bg-white p-8 rounded-3xl border border-[#dcd6c8] space-y-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 text-lg font-bold text-[#12201b]">
            <div className="w-10 h-10 rounded-xl bg-[#e2e8f0] text-[#1e293b] flex items-center justify-center">
              <LayersIcon />
            </div>
            <span className="">Frontend &amp; Nuvem</span>
          </div>
          <p className="text-sm sm:text-base text-[#515e57] leading-relaxed font-normal">
            Interfaces web fluidas com renderização moderna, acessibilidade nativa, tipografia calculada,
            conteinerização e pipelines de entrega contínua.
          </p>
          <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs text-[#16201c] font-semibold">
            <span className="px-3 py-1.5 rounded-lg bg-[#ede9e0] border border-[#dcd6c8]/60">React / Next.js</span>
            <span className="px-3.5 py-1.5 rounded-lg bg-[#ede9e0] border border-[#dcd6c8]/60">TypeScript</span>
            <span className="px-3 py-1.5 rounded-lg bg-[#ede9e0] border border-[#dcd6c8]/60">Tailwind CSS</span>
            <span className="px-3 py-1.5 rounded-lg bg-[#ede9e0] border border-[#dcd6c8]/60">Material UI</span>
            <span className="px-3 py-1.5 rounded-lg bg-[#ede9e0] border border-[#dcd6c8]/60">React Native</span>
            <span className="px-3 py-1.5 rounded-lg bg-[#ede9e0] border border-[#dcd6c8]/60">AWS</span>
          </div>
        </div>
      </div>
    </section>
    )
}