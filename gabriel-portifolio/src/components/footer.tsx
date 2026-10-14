export default function Footer(){
    return(
        <footer className="w-full border-t border-[#dcd6c8]/80 bg-[#fbf9f4] py-10">
            <div
            className="max-w-6xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs sm:text-sm font-mono text-[#515e57]">
            <div className="flex items-center gap-2.5">
                <span className="font-bold text-[#12201b]">© 2025 Gabriel</span>
                <span className="">•</span>
                <span className="">Remoto</span>
            </div>
            <div className="flex items-center gap-8 font-medium">
                <a className="hover:text-[#2e5a44] transition-colors" href="https://github.com/GabrielGreapy" rel="noopener noreferrer"
                target="_blank">GitHub</a>
                <a className="hover:text-[#2e5a44] transition-colors" href="www.linkedin.com/in/gabriel-martins-878529365" rel="noopener noreferrer"
                target="_blank">LinkedIn</a>
                <a className="hover:text-[#2e5a44] transition-colors" href="mailto:gabrielmartinswebdev@gmail.com">Email</a>
            </div>
            </div>
        </footer>
    )
}