import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "../../redux/Hook";
import Swal from "sweetalert2";
import { addSupply } from "../../redux/features/SupplySlice";

const AddSupplies = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler = (data) => {
    fetch("http://localhost:5000/create-supply", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Supply has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(addSupply(data));
        reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="p-10 h-screen bg-[#e8f8f5]">
      <div className="hero">
        <div className="hero-content mt-[10%] flex justify-center items-center">
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
