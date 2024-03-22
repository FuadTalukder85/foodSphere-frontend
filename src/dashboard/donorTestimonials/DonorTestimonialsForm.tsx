import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { usePostTestimonialsMutation } from "../../redux/features/testimonialsApi/TestimonialsApi";

const DonorTestimonialsForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [postTestimonials] = usePostTestimonialsMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      await postTestimonials(data);
      reset();
    } catch (error) {
      console.error("Add supply failed:", error);
    }
  };
  return (
    <div className="md:p-10 h-screen bg-[#e8f8f5]">
      <div className="hero">
        <div className="hero-content mt-[5%] flex justify-center items-center w-full">
          <div className="card mx-auto shrink-0 w-full md:w-[600px] shadow-xl border  rounded-xl">
            <h1 className="text-center text-2xl font-bold text-white bg-[#FFB606] rounded-t-lg p-1">
              Add Testimonials
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body p-10">
              {/* name */}
              <div className="form-control">
                <label htmlFor="name" className="label">
                  <span className="label-text text-[#00715D] font-bold">
                    Name *
                  </span>
                </label>
                <input
                  {...register("name")}
                  placeholder="name type here"
                  className="w-full bg-white border py-1 px-3"
                />
              </div>
              {/* img */}
              <div className="form-control mt-3">
                <label htmlFor="image" className="label">
                  <span className="label-text text-[#00715D] font-bold">
                    Image *
                  </span>
                </label>
                <input
                  {...register("image")}
                  placeholder="image here"
                  className="w-full bg-white border py-1 px-3"
                />
              </div>

              {/* description */}
              <div className="form-control mt-3">
                <label htmlFor="details" className="label">
                  <span className="label-text text-[#00715D] font-bold">
                    Donation details *
                  </span>
                </label>
                <textarea
                  {...register("details")}
                  placeholder="details type here"
                  className="w-full py-1 px-3 bg-white"
                ></textarea>
              </div>

              <div className="form-control mt-6 md:w-[45%] mx-auto">
                <button
                  type="submit"
                  className="bg-[#FFB606] hover:bg-[#00715D] transition-all text-white tracking-widest font-bold rounded py-2 px-5"
                >
                  Add Testimonials
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorTestimonialsForm;
