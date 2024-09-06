import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { usePostTestimonialsMutation } from "../../redux/features/testimonialsApi/TestimonialsApi";

const DonorTestimonialsForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
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
                  {...register("name", { required: true })}
                  placeholder="Type your name"
                  className="w-full bg-white border py-1 px-3 focus:outline-none"
                />
                {errors.name && (
                  <small className="text-red-500 text-left">
                    Please enter Amount
                  </small>
                )}
              </div>
              {/* img */}
              <div className="form-control mt-3">
                <label htmlFor="image" className="label">
                  <span className="label-text text-[#00715D] font-bold">
                    Image *
                  </span>
                </label>
                <input
                  {...register("image", { required: true })}
                  placeholder="Image here"
                  className="w-full bg-white border py-1 px-3 focus:outline-none"
                />
                {errors.image && (
                  <small className="text-red-500 text-left">
                    Please enter Image
                  </small>
                )}
              </div>

              {/* description */}
              <div className="form-control mt-3">
                <label htmlFor="details" className="label">
                  <span className="label-text text-[#00715D] font-bold">
                    Donation details *
                  </span>
                </label>
                <textarea
                  {...register("details", { required: true })}
                  placeholder="Details type here"
                  className="w-full py-1 px-3 bg-white focus:outline-none"
                ></textarea>
                {errors.details && (
                  <small className="text-red-500 text-left">
                    Details enter Amount
                  </small>
                )}
              </div>

              <div className="form-control mt-6 md:w-[45%] mx-auto">
                <button
                  type="submit"
                  className="bg-[#FFB606] hover:bg-[#00715D] transition-all text-white font-semibold uppercase py-2 px-5"
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
