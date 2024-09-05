import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { usePostSupplyMutation } from "../../redux/features/supplyAppi/SupplyApi";
import { useAppSelector } from "../../redux/Hook";
import { useCurrentUser } from "../../redux/features/auth/AuthSlice";
import { useGetUserQuery } from "../../redux/features/auth/AuthApi";

const AddSupplies = () => {
  const user = useAppSelector(useCurrentUser);
  // console.log(user);
  const { data, isLoading } = useGetUserQuery(undefined);

  const findCurrentUser = (data: any[], currentUser: any) => {
    return data.find((user) => user?.email === currentUser?.email);
  };

  let username = "";

  if (!isLoading && data) {
    const matchedUser = findCurrentUser(data, user);

    if (matchedUser) {
      username = matchedUser.name;
      console.log("Found the currentUser:", matchedUser);
    } else {
      console.log("No matching user found for currentUser:", user);
    }
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [postSupply] = usePostSupplyMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const postSupplies = { username, user, ...data };

    try {
      await postSupply(postSupplies);
      reset();
    } catch (error) {
      console.error("Add supply failed:", error);
    }
  };

  return (
    <div className="md:p-10 h-screen bg-[#e8f8f5]">
      <div className="hero">
        <div className="hero-content mt-[5%] flex justify-center items-center w-full">
          <div className="card mx-auto shrink-0 w-full md:w-[600px] shadow-xl border rounded-xl">
            <h1 className="text-center text-2xl font-bold text-white bg-[#FFB606] rounded-t-lg p-1">
              Add Supply
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body md:p-10"
            >
              {/* img */}
              <div className="form-control mt-3">
                <label htmlFor="image" className="label">
                  <span className="label-text text-[#00715D] font-bold">
                    Image *
                  </span>
                </label>
                <input
                  {...register("image", { required: true })}
                  placeholder="image here"
                  className="w-full bg-white border py-1 px-3 focus:outline-none"
                />
                {errors.image && (
                  <small className="text-red-500 text-left">
                    Image is required
                  </small>
                )}
              </div>
              {/* category */}
              <div className="form-control">
                <label htmlFor="category" className="label">
                  <span className="label-text text-[#00715D] font-bold">
                    Category *
                  </span>
                </label>
                <input
                  {...register("category", { required: true })}
                  placeholder="Category type here"
                  className="w-full bg-white border py-1 px-3 focus:outline-none"
                />
                {errors.category && (
                  <small className="text-red-500 text-left">
                    Category is required
                  </small>
                )}
              </div>
              {/* title */}
              <div className="form-control">
                <label htmlFor="title" className="label">
                  <span className="label-text text-[#00715D] font-bold">
                    Supply title *
                  </span>
                </label>
                <input
                  {...register("title", { required: true })}
                  placeholder="Title type here"
                  className="w-full bg-white border py-1 px-3 focus:outline-none"
                />
                {errors.title && (
                  <small className="text-red-500 text-left">
                    Title is required
                  </small>
                )}
              </div>
              {/* Quantity */}
              <div className="form-control">
                <label htmlFor="quantity" className="label">
                  <span className="label-text text-[#00715D] font-bold">
                    Supply Quantity *
                  </span>
                </label>
                <input
                  {...register("quantity", { required: true })}
                  type="number"
                  min="1"
                  placeholder="Quantity type here"
                  className="w-full bg-white border py-1 px-3 focus:outline-none"
                />
                {errors.quantity && (
                  <small className="text-red-500 text-left">
                    Quantity is required
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
                  placeholder="Description type here"
                  className="w-full py-1 px-3 bg-white focus:outline-none"
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
                  className="bg-[#FFB606] hover:bg-[#00715D] transition-all text-white tracking-widest font-bold rounded py-2 px-5"
                >
                  Add Supply
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSupplies;
