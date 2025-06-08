import NavBar from "../components/NavBar";
import Hero from "../layout/Hero";
import Products from "../layout/Products";
import About from "../layout/About";
import Testimonial from "../layout/Testimonial";
import Popular from "../layout/Popular";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <section>
      <NavBar />
      <Hero />
      <Products />
      <About />
      <Testimonial />
      <Popular />
      <Footer />
    </section>
  );
};

export default Home;
