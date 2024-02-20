import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "swiper/css";
import Container from "../../components/container/Container";

import "./Testimonials.css";
import TestimonialsSlideOne from "./TestimonialsSlideOne";
import TestimonialsSlideTwo from "./TestimonialsSlideTwo";
import TestimonialsSlideThree from "./TestimonialsSlideThree";
import TestimonialsSlideFour from "./TestimonialsSlideFour";
import TestimonialsSlideFive from "./TestimonialsSlideFive";
import TestimonialsSlideSix from "./TestimonialsSlideSix";

const Testimonials = () => {
  return (
    <div className="tesi-banner">
      <Container>
        <div className="mt-7 md:mt-24 md:py-16">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper bg-[#0000002f]"
          >
            <SwiperSlide>
              <TestimonialsSlideOne></TestimonialsSlideOne>
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialsSlideTwo></TestimonialsSlideTwo>
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialsSlideThree></TestimonialsSlideThree>
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialsSlideFour></TestimonialsSlideFour>
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialsSlideFive></TestimonialsSlideFive>
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialsSlideSix></TestimonialsSlideSix>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
