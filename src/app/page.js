import About from "./components/About";
import Cards from "./components/Cards";
import Client from "./components/Clients";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Slider from "./components/Slider";
import Team from "./components/Team";

export default function Home() {
  return (
    <div>
      <div className="relative w-full min-h-screen">
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover z-0"
          style={{
            backgroundImage: "url('/bg.jpg')",
          }}
        />
        
        
        <div className="relative z-20">
          <Navbar />
          <Header />
        </div>
      </div>

      
      <About />
      <Services />
      <Cards />
      <Experience />
      <Client />
      <Team />
      <Slider />
      
      <Footer />
    </div>
  );
}
