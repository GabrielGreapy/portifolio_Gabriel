import Image from "next/image";
import Header from "@/src/components/header";
import Footer from "@/src/components/footer";
import Hero from "@/src/components/hero";
import Projects from "@/src/components/projects";
export default function Home() {
  return (
    <div>
      <Header />
      <main className="w-full flex-1 max-w-6xl mx-auto px-6 lg:px-10 pt-12 pb-24">
        <Hero />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
