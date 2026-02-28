import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import Presentation from "@/components/Presentation";
import Services from "@/components/Services";
import FeaturedEvents from "@/components/FeaturedEvents";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main>
      <Header />
      <HeroSlider />
      <Presentation />
      <Services />
      <FeaturedEvents />
      <Portfolio />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
