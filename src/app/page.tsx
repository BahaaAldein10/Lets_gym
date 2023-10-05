import Navbar from "@/components/Navbar";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Gallery from "@/pages/Gallery";
import Hero from "@/pages/Hero";
import Pricing from "@/pages/Pricing";
import Services from "@/pages/Services";

function Home() {
  return (
    <>
      <main className="w-full sm:h-screen sm:bg-[url('/banner.png')] sm:bg-cover sm:bg-center">
        <Navbar />
        <Hero />
      </main>
      <About />
      <Services />
      <Gallery />
      <Pricing />
      <Contact />
    </>
  );
}
export default Home;
