import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { usePostSupplyMutation } from "../../redux/features/supplyAppi/SupplyApi";

const AddSupplies = () => {
  const { register, handleSubmit, reset } = useForm();
  const [postSupply] = usePostSupplyMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      await postSupply(data);
      reset();
    } catch (error) {
      console.error("Add supply failed:", error);
    }
  };

  return (
    <div className="p-10 h-screen bg-[#e8f8f5]">
      <div className="hero">
        <div className="hero-content mt-[5%] flex justify-center items-center">
          <div className="card mx-auto shrink-0 md:w-[600px] shadow-xl border  rounded-xl">
            <h1 className="text-center text-2xl font-bold text-white bg-[#FFB606] rounded-t-lg p-1">
              Add Supply
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body p-10">
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
              {/* category */}
              <div className="form-control">
                <label htmlFor="category" className="label">
                  <span className="label-text text-[#00715D] font-bold">
                    Category *
                  </span>
                </label>
                <input
                  {...register("category")}
                  placeholder="category type here"
                  className="w-full bg-white border py-1 px-3"
                />
              </div>
              {/* title */}
              <div className="form-control">
                <label htmlFor="title" className="label">
                  <span className="label-text text-[#00715D] font-bold">
                    Supply title *
                  </span>
                </label>
                <input
                  {...register("title")}
                  placeholder="title type here"
                  className="w-full bg-white border py-1 px-3"
                />
              </div>
              {/* Quantity */}
              <div className="form-control">
                <label htmlFor="quantity" className="label">
                  <span className="label-text text-[#00715D] font-bold">
                    Supply Quantity *
                  </span>
                </label>
                <input
                  {...register("quantity")}
                  placeholder="quantity type here"
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
