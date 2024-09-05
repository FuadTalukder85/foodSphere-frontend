import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { usePostDonateMutation } from "../../redux/features/donateApi/DonateApi";
const DonationForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [postDonate] = usePostDonateMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      await postDonate(data);
      reset();
    } catch (error) {
      console.error("Donation failed:", error);
    }
  };

  return (
    <div className="bg-[#F9F9F9] pt-5">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body md:p-5">
        <div className="flex gap-3 justify-between w-full">
          <h3 className="text-xl font-normal">Donor information</h3>
          <div className="form-control">
            <div className="flex border rounded-lg overflow-hidden w-64">
              <span className="bg-gray-100 px-3 flex items-center text-gray-500">
                $
              </span>
              <input
                {...register("ammount", { required: true })}
                type="number"
                placeholder="Amount"
                className="w-full px-3 py-2 font-light focus:outline-none"
              />
              <span className="bg-gray-100 px-3 flex items-center text-gray-500">
                .00
              </span>
            </div>
            {errors.ammount && (
              <small className="text-red-500 text-left">
                Please enter Amount
              </small>
            )}
          </div>
        </div>
        {/* name */}
        <div className="flex gap-3 justify-between w-full mt-5">
          <div className="form-control">
            <input
              {...register("firstName", { required: true })}
              placeholder="First Name"
              className="w-[350px] bg-white border text-md font-light py-3 px-3 focus:outline-none"
            />
            {errors.firstName && (
              <small className="text-red-500 text-left">
                Please enter your First Name
              </small>
            )}
          </div>
          <div className="form-control">
            <input
              {...register("lastName", { required: true })}
              placeholder="Last Name"
              className="w-[350px] bg-white border text-md font-light py-3 px-3 focus:outline-none"
            />
            {errors.lastName && (
              <small className="text-red-500 text-left">
                Please enter your Last Name
              </small>
            )}
          </div>
        </div>
        {/* email & phone */}
        <div className="flex gap-3 justify-between w-full">
          <div className="form-control">
            <input
              {...register("email", { required: true })}
              placeholder="Email"
              className="w-[350px] bg-white border text-md font-light py-3 px-3 focus:outline-none"
            />
            {errors.email && (
              <small className="text-red-500 text-left">
                Please enter your Email
              </small>
            )}
          </div>
          <div className="form-control">
            <input
              {...register("number", { required: true })}
              placeholder="Phone"
              className="w-[350px] bg-white border text-md font-light py-3 px-3 focus:outline-none"
            />
            {errors.number && (
              <small className="text-red-500 text-left">
                Please enter your Number
              </small>
            )}
          </div>
        </div>

        {/* address */}
        <div className="flex gap-3 justify-between w-full">
          <div className="form-control">
            <input
              {...register("address", { required: true })}
              placeholder="Address"
              className="w-[350px] bg-white border text-md font-light py-3 px-3 focus:outline-none"
            />
            {errors.address && (
              <small className="text-red-500 text-left">
                Please enter your Address
              </small>
            )}
          </div>
          <div className="form-control">
            <input
              {...register("city", { required: true })}
              placeholder="City"
              className="w-[350px] bg-white border text-md font-light py-3 px-3 focus:outline-none"
            />
            {errors.city && (
              <small className="text-red-500 text-left">
                Please enter your City
              </small>
            )}
          </div>
        </div>

        {/* description */}
        <div className="form-control">
          <textarea
            {...register("description", { required: true })}
            placeholder="Additional Note"
            className="w-full py-2 pb-10 px-3 bg-white text-md font-light border focus:outline-none"
          ></textarea>
          {errors.description && (
            <small className="text-red-500 text-left">
              Please enter your Description
            </small>
          )}
        </div>

        <div className="form-control mt-6 w-[35%] mx-auto">
          <button
            type="submit"
            className="bg-[#FFB606] hover:bg-[#00715D] transition-all text-white font-bold rounded py-2 px-5"
          >
            Donate Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default DonationForm;
