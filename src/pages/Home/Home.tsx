import { About } from "../../components/About";
import { Contact } from "../../components/Contact";
import { FAQ } from "../../components/FAQ";
import { FutureProducts } from "../../components/FutureProducts";
import { Gallery } from "../../components/Gallery";
import { Hero } from "../../components/Hero";
import { Process } from "../../components/Process";
import { Products } from "../../components/Products";
import { Testimonials } from "../../components/Testimonials";
import { WhyUs } from "../../components/WhyUs";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Products />
      <WhyUs />
      <Process />
      <FutureProducts />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home;
