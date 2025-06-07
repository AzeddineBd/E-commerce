// import Images
import bgImg from "../assets/bg-image.jpg";
import plant from "../assets/plant.png";
// Import Components
import Button from "../components/button";

const Hero = () => {
  return (
    <section>
      <div
        style={{ backgroundImage: `url(${bgImg})` }}
        className="w-full h-screen bg-no-repeat bg-cover bg-center"
      >
        <div className="flex flex-col items-center justify-center h-full text-center p-4">
          <div className="bg-[rgba(255,255,255,0.8)] p-4 rounded-md">
            <div>
              <img src={plant} alt="plant" className="mb-4 mx-auto" />
            </div>
            <h1 className="text-4xl font-medium mb-4">The nature candle</h1>
            <p className="text-lg font-light md:w-128 w-80 mx-auto mb-8">
              All handmade with natural soy wax, Candleaf is a companion for all
              your pleasure moments{" "}
            </p>
            <Button size="large" variant="primary">
              Discovery our collection
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
