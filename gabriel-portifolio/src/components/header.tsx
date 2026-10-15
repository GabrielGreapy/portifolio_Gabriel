'use client'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Logo from './logo';
export default function Header(){
    return(
        <header className="sticky top-0 z-50 backdrop-blur-md bg-[#fbf9f4]/90 border-b border-[#dcd6c8]/80 transition-all">
    <div className="max-w-6xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
      <a className="group flex items-center gap-3.5" href="#">
        <div
          className="w-10 h-10 rounded-full bg-[#1a2e26] text-[#fbf9f4] flex items-center justify-center font-serif italic text-lg font-bold group-hover:bg-[#2e5a44] transition-colors shadow-sm">
          <Logo  />
        </div>
        <div className="flex flex-col">
          <span className="text-base font-bold tracking-tight text-[#16201c]">Gabriel Martins</span>
          <span className="text-xs text-[#515e57] font-mono font-medium">Full Stack &amp; Systems</span>
        </div>
      </a>
      
      <div
        className="hidden sm:inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#ede9e0] border border-[#dcd6c8] text-xs font-semibold text-[#16201c]">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2e5a44] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2e5a44]"></span>
        </span>
        <span className="">Disponível para novos projetos</span>
      </div>
      
      <nav className="flex items-center gap-6 text-sm font-semibold">
        <a className="text-[#515e57] hover:text-[#16201c] transition-colors hidden md:block" href="#projetos">Projetos</a>
        <a className="text-[#515e57] hover:text-[#16201c] transition-colors hidden md:block" href="#sobre">Sobre &amp;
          Stack</a>
        <a className="px-5 py-2.5 rounded-full bg-[#1a2e26] text-[#fbf9f4] text-xs tracking-wider uppercase font-semibold hover:bg-[#243e34] transition-all shadow-sm flex items-center gap-2"
          href="mailto:gabriel.dev@domain.com">
          <span className="">Contato</span>
          <ArrowOutwardIcon />
          
        </a>
      </nav>
    </div>
  </header>
    )
}