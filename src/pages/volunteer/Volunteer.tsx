import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { usePostVolunteerMutation } from "../../redux/features/volunteerApi/VolunteerApi";
const Volunteer = () => {
  const { register, handleSubmit, reset } = useForm();

  const [postVolunteer] = usePostVolunteerMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      await postVolunteer(data);
      reset();
    } catch (error) {
      console.error("Add volunteer failed:", error);
    }
  };
  return (
    <div className="p-10">
      <div className="hero">
        <div className="hero-content flex justify-center items-center">
          <div className="card mx-auto shrink-0 md:w-[600px] shadow-xl border  rounded-xl">
            <h1 className="text-center text-3xl font-bold text-white bg-[#FFB606] rounded-t-lg p-1">
              Registration form
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body p-10 bg-[#e8f8f5]"
            >
              {/* first name */}
              <div className="flex justify-between gap-5">
                <div className="form-control mt-3 w-full">
                  <label htmlFor="firstName" className="label">
                    <span className="label-text text-[#00715D] font-bold">
                      First name *
                    </span>
                  </label>
                  <input
                    {...register("firstName")}
                    placeholder="Enter first name here.."
                    className="w-full bg-white border py-1 px-3"
                  />
                </div>
                {/* last name */}
                <div className="form-control mt-3 w-full">
                  <label htmlFor="lastName" className="label">
                    <span className="label-text text-[#00715D] font-bold">
                      Last name *
                    </span>
                  </label>
                  <input
                    {...register("lastName")}
                    placeholder="Enter last name here.."
                    className="w-full bg-white border py-1 px-3"
                  />
                </div>
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
                  placeholder="image here.."
                  className="w-full bg-white border py-1 px-3"
                />
              </div>
              {/* Phone number */}
              <div className="form-control mt-3">
                <label htmlFor="phoneNumber" className="label">
                  <span className="label-text text-[#00715D] font-bold">
                    Phone Number *
                  </span>
                </label>
                <input
                  {...register("phoneNumber")}
                  placeholder="Enter phone number here.."
                  className="w-full bg-white border py-1 px-3"
                />
              </div>
              {/* Email */}
              <div className="form-control mt-3">
                <label htmlFor="email" className="label">
                  <span className="label-text text-[#00715D] font-bold">
                    Email Address *
                  </span>
                </label>
                <input
                  {...register("email")}
                  placeholder="Enter email address here.."
                  className="w-full bg-white border py-1 px-3"
                />
              </div>
              {/* Address */}
              <div className="form-control mt-3">
                <label htmlFor="address" className="label">
                  <span className="label-text text-[#00715D] font-bold">
                    Address *
                  </span>
                </label>
                <input
                  {...register("address")}
                  placeholder="Enter address here.."
                  className="w-full bg-white border py-1 px-3"
                />
              </div>

              {/* description */}
              <div className="form-control mt-3">
                <label htmlFor="description" className="label">
                  <span className="label-text text-[#00715D] font-bold">
                    Description *
                  </span>
                </label>
                <textarea
                  {...register("description")}
                  placeholder="description type here"
                  className="w-full py-1 px-3 bg-white"
                ></textarea>
              </div>

              <div className="form-control mt-6 w-[35%] mx-auto">
                <button
                  type="submit"
                  className="bg-[#FFB606] hover:bg-[#00715D] transition-all text-white tracking-widest font-bold rounded py-2 px-5"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
