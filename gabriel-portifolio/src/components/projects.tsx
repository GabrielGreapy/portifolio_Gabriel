'use client'
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import type { project } from '../types/projects';
 


export default function Projects(){
    const projects : project[]= [
        {
            upperText : "Visor de Turismo Local",
            title : "ThermoTurismo",
            bottomText : "Armazenamento e Proxy",
            descriptionTitle : "Plataforma de monitoramento de turismo local com arquitetura leve e escalável",
            description : "Sistema para organização de conteúdo visual local, com busca, armazenamento e proxy de dados para melhorar desempenho e experiência do usuário.",
            toolsUsed : ["Next.js", "TypeScript", "GoogleMaps", "APIfy", "Places Google-Api"], 
            img : "@/public/imgs/thermoTurismo.png",

        },
        {
            upperText : "projeto2",
            title : "titulo",
            bottomText : "texto",
            descriptionTitle : "desc",
            description : "descrição longa",
            toolsUsed : ["fer", "ra", "men", "tas"], 
            img : "@/public/imgs/eu.jpg",
        }
    ]




    return(
        <section className="pt-16 pb-20 overflow-hidden" id="projetos">
      
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
                <div>
                <div
                    className="text-xs font-mono uppercase tracking-widest text-[#2e5a44] mb-2 font-bold flex items-center gap-2">
                    <span className="">Estudos de Caso Selecionados</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#12201b] font-bold">
                    Meus Projetos
                </h2>
                </div>
            
                <div className="flex items-center gap-4">
                
                <div
                    className="font-mono text-sm sm:text-base font-semibold text-[#515e57] bg-[#ede9e0] border border-[#dcd6c8] px-4 py-2 rounded-full">
                    <span className="text-[#12201b] font-bold" id="carousel-current-index">01</span>
                    <span className="text-[#515e57]/60"> / </span>
                    <span className="text-[#515e57]" id="carousel-total-count">04</span>
                </div>
                <div className="flex items-center gap-2.5">
                    <button aria-label="Projeto anterior"
                    className="w-12 h-12 rounded-full border border-[#dcd6c8] bg-[#f5f2eb] hover:bg-[#dcd6c8] hover:text-[#243e34] text-[#16201c] flex items-center justify-center transition-all shadow-xs active:scale-95"
                    id="slider-prev">
                    <WestIcon/>
                    </button>
                    <button aria-label="Próximo projeto"
                    className="w-12 h-12 rounded-full border border-[#dcd6c8] bg-[#f5f2eb] hover:bg-[#dcd6c8] hover:text-[#243e34] text-[#16201c] flex items-center justify-center transition-all shadow-xs active:scale-95"
                    id="slider-next">
                    <EastIcon />
                    </button>
                </div>
                </div>
            </div>
            
            <div className="relative -mx-6 lg:-mx-10 px-6 lg:px-10">
                <div className="flex gap-8 overflow-x-auto hide-scrollbar scroll-smooth snap-x snap-mandatory py-4"
                id="projects-carousel">
                { projects.map((project, index) => (
                    <article
                        className="project-slide snap-start shrink-0 w-[88vw] sm:w-[86vw] max-w-[1080px] bg-white rounded-3xl border border-[#dcd6c8] shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col group opacity-100 scale-100">
                        
                        <div
                        className="w-full h-[480px] sm:h-[520px] bg-gradient-to-tr from-[#0f1d17] via-[#1a2e26] to-[#2e5a44] p-8 sm:p-12 text-[#fbf9f4] relative overflow-hidden flex flex-col justify-between">
                        <div className="flex items-center justify-between text-xs sm:text-sm font-mono z-20">
                            <span
                            className="px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[#e8eee9] font-bold shadow-sm">
                            { 1}
                            </span>
                            <span
                            className="px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white font-medium">
                            Rust • Low Latency • High-Throughput
                            </span>
                        </div>
                        
                        <div
                            className="absolute -right-12 -bottom-16 w-80 h-80 rounded-full border border-white/10 pointer-events-none">
                        </div>
                        <div className="absolute right-12 bottom-6 w-56 h-56 rounded-full border border-white/10 pointer-events-none">
                        </div>
                        
                        <div className="absolute inset-0 pointer-events-none opacity-25"
                            style={{ backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.35) 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
                        </div>
                        
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none z-10">
                        </div>
                        <div className="z-20 max-w-2xl relative">
                            <span
                            className="text-xs sm:text-sm font-mono tracking-widest text-[#cbd8cf] uppercase block mb-2 font-bold">
                                { project.upperText}
                            </span>
                            <h3
                            className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-bold tracking-tight drop-shadow-md">
                            { project.title }
                            </h3>
                        </div>
                        </div>
                    
                        <div className="p-8 sm:p-12 flex-1 flex flex-col justify-between gap-8 bg-white">
                        <div className="space-y-4">
                            <div className="flex flex-wrap items-center gap-3">
                            <span
                                className="px-3 py-1 rounded-md bg-[#e8eee9] text-[#1a2e26] font-mono text-xs font-bold uppercase border border-[#cbd8cf]">
                                { project.bottomText}
                                </span>
                            
                            </div>
                            <h4 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#12201b] font-bold">
                                { project.descriptionTitle }
                            </h4>
                            <p className="text-base sm:text-lg text-[#515e57] leading-relaxed max-w-4xl font-normal">
                                {project.description}
                            </p>
                        </div>
                        
                        <div
                            className="pt-6 border-t border-[#dcd6c8]/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                            <div className="flex flex-wrap gap-2.5 font-mono text-xs sm:text-sm text-[#16201c] font-semibold">
                                {project.toolsUsed?.map((tool, toolIndex) => (
                                    <span key={`${tool}-${toolIndex}`} className="px-3.5 py-1.5 rounded-lg bg-[#ede9e0] border border-[#dcd6c8]/60">{tool}</span>
                                ))}
                            
                            
                            </div>
                            <a className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#1a2e26] text-[#fbf9f4] text-sm font-semibold hover:bg-[#243e34] transition-all shadow-sm group-hover:scale-102"
                            href="#">
                            <span className="">Explorar Estudo de Caso</span>
                            <ArrowForwardIosIcon />
                            </a>
                        </div>
                        </div>
                    </article>
                ))
                }
                
                
                </div>
            </div>
            
            <div className="mt-8 flex items-center justify-between text-sm text-[#515e57] font-mono px-2">
                <div className="flex items-center gap-2" id="carousel-dots">
                <button aria-label="Ir para projeto 1" className="h-2 w-8 rounded-full bg-[#2e5a44] transition-all"></button>
                <button aria-label="Ir para projeto 2"
                    className="h-2 w-2.5 rounded-full bg-[#dcd6c8] hover:bg-[#2e5a44]/60 transition-all"></button>
                <button aria-label="Ir para projeto 3"
                    className="h-2 w-2.5 rounded-full bg-[#dcd6c8] hover:bg-[#2e5a44]/60 transition-all"></button>
                <button aria-label="Ir para projeto 4"
                    className="h-2 w-2.5 rounded-full bg-[#dcd6c8] hover:bg-[#2e5a44]/60 transition-all"></button>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#515e57]">
                <span className="material-symbols-outlined text-sm text-[#2e5a44]">swipe</span>
                <span className="">Deslize ou use as setas para navegar</span>
                </div>
            </div>
            </section>
    )
}