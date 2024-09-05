import React from "react";

const DonationForm = () => {
  return (
    <div className="bg-[#F9F9F9] pt-5">
      <form
        //   onSubmit={handleSubmit(onSubmit)}
        className="card-body md:p-5"
      >
        <div className="flex gap-3 justify-between w-full">
          <h3 className="text-xl font-normal">Donor information</h3>
          <div className="form-control">
            <div className="flex border rounded-lg overflow-hidden w-64">
              <span class="bg-gray-100 px-3 flex items-center text-gray-500">
                $
              </span>
              <input
                type="text"
                placeholder="Amount"
                class="w-full px-3 py-2 font-light focus:outline-none"
              />
              <span class="bg-gray-100 px-3 flex items-center text-gray-500">
                .00
              </span>
            </div>
          </div>
        </div>
        {/* name */}
        <div className="flex gap-3 justify-between w-full mt-5">
          <div className="form-control">
            <input
              // {...register("image")}
              placeholder="First Name"
              className="w-[350px] bg-white border text-md font-light py-3 px-3 focus:outline-none"
            />
          </div>
          <div className="form-control">
            <input
              // {...register("image")}
              placeholder="Last Name"
              className="w-[350px] bg-white border text-md font-light py-3 px-3 focus:outline-none"
            />
          </div>
        </div>
        {/* email & phone */}
        <div className="flex gap-3 justify-between w-full">
          <div className="form-control">
            <input
              // {...register("image")}
              placeholder="Email"
              className="w-[350px] bg-white border text-md font-light py-3 px-3 focus:outline-none"
            />
          </div>
          <div className="form-control">
            <input
              // {...register("image")}
              placeholder="Phone"
              className="w-[350px] bg-white border text-md font-light py-3 px-3 focus:outline-none"
            />
          </div>
        </div>

        {/* address */}
        <div className="flex gap-3 justify-between w-full">
          <div className="form-control">
            <input
              // {...register("image")}
              placeholder="Address"
              className="w-[350px] bg-white border text-md font-light py-3 px-3 focus:outline-none"
            />
          </div>
          <div className="form-control">
            <input
              // {...register("image")}
              placeholder="City"
              className="w-[350px] bg-white border text-md font-light py-3 px-3 focus:outline-none"
            />
          </div>
        </div>

        {/* description */}
        <div className="form-control">
          <textarea
            // {...register("description")}
            placeholder="Additional Note"
            className="w-full py-2 pb-10 px-3 bg-white text-md font-light focus:outline-none"
          ></textarea>
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
