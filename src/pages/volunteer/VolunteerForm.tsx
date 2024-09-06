import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { usePostVolunteerMutation } from "../../redux/features/volunteerApi/VolunteerApi";
import volunterImg from "../../assets/img/communityImg/volunteer.jpg";
import Container from "../../components/container/Container";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const VolunteerForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

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
    <Container>
      <div className="p-4 md:p-10 md:flex gap-10 justify-between">
        <div>
          <img src={volunterImg} alt="" />
          <p className="mt-7">
            Consectetur adipisicing elit. Expedita quos quam laboriosam deserunt
            obcaecati eaque officiis minima tempore blanditiis, dolorem.
            Provident illo, id culpa, quibusdam ullam quod nobis consectetur,
            veniam cum, neque vitae delectus in eveniet. Optio sapiente nulla
            minima aspernatur odit nam facilis perferendis.
          </p>
          <p className="mt-3">
            Tpsum dolor sit amet, consectetur adipisicing elit. Porro labore,
            voluptatem assumenda ipsam qui vero molestias, delectus reiciendis
            repellendus dolor fuga beatae!
          </p>
          <p className="flex items-center gap-3 text-xl font-semibold mt-10">
            <span className="text-[#FFB606] text-3xl">
              <IoCall />
            </span>
            Call Us At: 01756-000000{" "}
          </p>
          <p className="flex items-center gap-3 text-xl font-semibold mt-2">
            <span className="text-[#FFB606] text-3xl">
              <MdEmail />
            </span>
            Mail Us At: mail@gmail.com{" "}
          </p>
        </div>
        {/* form */}
        <div className="hero mt-7 md:mt-0">
          <div className="flex justify-center items-center">
            <div className="card mx-auto shrink-0 w-full md:w-[600px] shadow-xl border rounded-xl">
              <h1 className="text-center text-3xl font-bold text-white bg-[#FFB606] rounded-t-lg p-1">
                Registration form
              </h1>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="card-body md:p-10 bg-[#e8f8f5]"
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
                      {...register("firstName", { required: true })}
                      placeholder="Enter first name here.."
                      className="w-full px-3 py-2 font-light focus:outline-none"
                    />
                    {errors.firstName && (
                      <small className="text-red-500 text-left">
                        First name is required
                      </small>
                    )}
                  </div>
                  {/* last name */}
                  <div className="form-control mt-3 w-full">
                    <label htmlFor="lastName" className="label">
                      <span className="label-text text-[#00715D] font-bold">
                        Last name *
                      </span>
                    </label>
                    <input
                      {...register("lastName", { required: true })}
                      placeholder="Enter last name here.."
                      className="w-full px-3 py-2 font-light focus:outline-none"
                    />
                    {errors.lastName && (
                      <small className="text-red-500 text-left">
                        Last name is required
                      </small>
                    )}
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
                    {...register("image", { required: true })}
                    placeholder="image here.."
                    className="w-full px-3 py-2 font-light focus:outline-none"
                  />
                  {errors.image && (
                    <small className="text-red-500 text-left">
                      Image is required
                    </small>
                  )}
                </div>
                {/* Phone number */}
                <div className="form-control mt-3">
                  <label htmlFor="phoneNumber" className="label">
                    <span className="label-text text-[#00715D] font-bold">
                      Phone Number *
                    </span>
                  </label>
                  <input
                    {...register("phoneNumber", { required: true })}
                    placeholder="Enter phone number here.."
                    className="w-full px-3 py-2 font-light focus:outline-none"
                  />
                  {errors.phoneNumber && (
                    <small className="text-red-500 text-left">
                      Number is required
                    </small>
                  )}
                </div>
                {/* Email */}
                <div className="form-control mt-3">
                  <label htmlFor="email" className="label">
                    <span className="label-text text-[#00715D] font-bold">
                      Email Address *
                    </span>
                  </label>
                  <input
                    {...register("email", { required: true })}
                    placeholder="Enter email address here.."
                    className="w-full px-3 py-2 font-light focus:outline-none"
                  />
                  {errors.email && (
                    <small className="text-red-500 text-left">
                      Email is required
                    </small>
                  )}
                </div>
                {/* Address */}
                <div className="form-control mt-3">
                  <label htmlFor="address" className="label">
                    <span className="label-text text-[#00715D] font-bold">
                      Address *
                    </span>
                  </label>
                  <input
                    {...register("address", { required: true })}
                    placeholder="Enter address here.."
                    className="w-full px-3 py-2 font-light focus:outline-none"
                  />
                  {errors.address && (
                    <small className="text-red-500 text-left">
                      Address is required
                    </small>
                  )}
                </div>

                {/* description */}
                <div className="form-control mt-3">
                  <label htmlFor="description" className="label">
                    <span className="label-text text-[#00715D] font-bold">
                      Description *
                    </span>
                  </label>
                  <textarea
                    {...register("description", { required: true })}
                    placeholder="description type here"
                    className="w-full py-1 px-3 bg-white"
                  ></textarea>
                  {errors.description && (
                    <small className="text-red-500 text-left">
                      Description is required
                    </small>
                  )}
                </div>

                <div className="form-control mt-6 w-[35%] mx-auto">
                  <button
                    type="submit"
                    className="bg-[#FFB606] hover:bg-[#00715D] transition-all text-white font-semibold uppercase py-2 px-5"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default VolunteerForm;
