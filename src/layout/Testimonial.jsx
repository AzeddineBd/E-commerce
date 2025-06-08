// import CardsTestimonial Component
import CardsTestimonial from "../components/cardsTestimonial";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

const Testimonial = () => {
  return (
    <section className="bg-[var(--testimonial-background)] py-16">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h1 className="font-medium text-4xl mb-4">Testimonials</h1>
          <p className="font-medium text-lg text-[var(--text-muted-color)]">
            Some quotes from our happy customers
          </p>
        </div>
        {/* Desktop Testimonial Virsion */}
        <div className="hidden md:flex md:flex-row items-center justify-center gap-4">
          <CardsTestimonial />
          <CardsTestimonial />
          <CardsTestimonial />
        </div>

        {/* Mobile Testimonial Virsion */}

        <div className="md:hidden flex items-center justify-center">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            freeMode={true}
            loop={true}
            style={{ padding: "0 20px" }}
          >
            <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
              <CardsTestimonial />
            </SwiperSlide>
            <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
              <CardsTestimonial />
            </SwiperSlide>
            <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
              <CardsTestimonial />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
