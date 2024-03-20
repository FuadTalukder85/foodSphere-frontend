import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "swiper/css";
import Container from "../../components/container/Container";
import { useState } from "react";

import "../../pages/testimonials/Testimonials.css";
import { useGetTestimonialsQuery } from "../../redux/features/testimonialsApi/TestimonialsApi";

const DonorTestimonials = () => {
  const { data, isLoading } = useGetTestimonialsQuery(undefined);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  if (isLoading) {
    return <></>;
  }

  return (
    <div className="tesi-banner">
      <Container>
        <div className="mt-7 md:mt-24 md:py-16">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper bg-[#0000002f]"
            activeIndex={activeSlideIndex}
            onSlideChange={(swiper) => setActiveSlideIndex(swiper.activeIndex)}
            change
          >
            {data.map((testimonialData: any) => (
              <SwiperSlide key={testimonialData._id}>
                <div className="p-16">
                  <img
                    className="mx-auto border-2 border-[#FFB606] rounded-full"
                    src={testimonialData.image}
                    alt=""
                  />
                  <p className="mx-auto text-center md:max-w-[65ch] text-white mt-3">
                    {testimonialData.details}
                  </p>
                  <p className="text-2xl font-bold text-[#FFB606] text-center mt-5">
                    ~ {testimonialData.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default DonorTestimonials;
