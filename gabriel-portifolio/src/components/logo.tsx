import logo from "@/public/imgs/logo.png"
export default function Logo(){
    return(
        <div className="rounded-full">
            <img src={logo.src} alt="Logo" />
        </div>
    )
}