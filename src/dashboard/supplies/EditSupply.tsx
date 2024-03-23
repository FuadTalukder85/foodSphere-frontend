import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

type TUpdateSupplyData = {
  _id: string;
  image: string;
  category: string;
  title: string;
  quantity: string;
  description: string;
};

const EditSupply = () => {
  const updateSupplyData = useLoaderData();
  const { _id, image, category, title, quantity, description } =
    updateSupplyData as TUpdateSupplyData;
  const { handleSubmit, register } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    fetch(`http://localhost:5000/supplies/${_id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Event Content has been Updated",
          showConfirmButton: false,
          timer: 1500,
        });
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
              Edit Supply
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body p-10">
              {/* img */}
              <div className="form-control mt-3">
                <label className="label">
                  <span className="label-text text-[#00715D] font-bold">
                    Image *
                  </span>
                </label>
                <input
                  {...register("image")}
                  defaultValue={image}
                  type="text"
                  placeholder="image here"
                  className="w-full bg-white border py-1 px-3"
                />
              </div>
              {/* category */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#00715D] font-bold">
                    Category *
                  </span>
                </label>
                <input
                  {...register("category")}
                  defaultValue={category}
                  type="text"
                  placeholder="category type here"
                  className="w-full bg-white border py-1 px-3"
                />
              </div>
              {/* title */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#00715D] font-bold">
                    Supply title *
                  </span>
                </label>
                <input
                  defaultValue={title}
                  {...register("title")}
                  type="text"
                  placeholder="title type here"
                  className="w-full bg-white border py-1 px-3"
                />
              </div>
              {/* Quantity */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#00715D] font-bold">
                    Supply Quantity *
                  </span>
                </label>
                <input
                  defaultValue={quantity}
                  {...register("quantity", { required: true })}
                  type="number"
                  min={1}
                  placeholder="quantity type here"
                  className="w-full bg-white border py-1 px-3"
                />
              </div>

              {/* description */}
              <div className="form-control mt-3">
                <label className="label">
                  <span className="label-text text-[#00715D] font-bold">
                    Description *
                  </span>
                </label>
                <textarea
                  defaultValue={description}
                  {...register("description")}
                  placeholder="description type here"
                  className="w-full py-1 px-3 bg-white"
                ></textarea>
              </div>

              <div className="form-control mt-6 w-[35%] mx-auto">
                <button className="bg-[#FFB606] hover:bg-[#00715D] transition-all text-white tracking-widest font-bold rounded py-2 px-5">
                  Update Supply
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditSupply;
