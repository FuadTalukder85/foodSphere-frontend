import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "swiper/css";
import Container from "../../components/container/Container";
import "../../pages/testimonials/Testimonials.css";
import { useGetTestimonialsQuery } from "../../redux/features/testimonialsApi/TestimonialsApi";
import { Link } from "react-router-dom";
import UnderLine from "../../components/underLine/UnderLine";

const DonorTestimonials = () => {
  const { data, isLoading } = useGetTestimonialsQuery(undefined);

  if (isLoading) {
    return <></>;
  }

  return (
    <div>
      <div className="mt-5 flex justify-end px-10">
        <Link to="/dashboard/create-testimonial">
          <button className="bg-[#FFB606] px-6 py-2 rounded-lg font-bold">
            Add Testimonials
          </button>
        </Link>
      </div>
      <UnderLine></UnderLine>

      <div className="tesi-banner">
        <Container>
          <div className="mt-5 md:mt-14 md:py-16">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper bg-[#0000002f]"
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
    </div>
  );
};

export default DonorTestimonials;
