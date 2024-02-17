const AddSupplies = () => {
  return (
    <div className="p-10 h-screen bg-[#e8f8f5]">
      <div className="hero">
        <div className="hero-content mt-[10%] flex justify-center items-center">
          <div className="card mx-auto shrink-0 md:w-[600px] shadow-xl border  rounded-xl">
            <h1 className="text-center text-2xl font-bold text-white bg-[#FFB606] rounded-t-lg p-1">
              Add Supply
            </h1>
            <form className="card-body p-10">
              {/* img */}
              <div className="form-control mt-3">
                <label className="label">
                  <span className="label-text text-[#00715D] font-bold">
                    Image *
                  </span>
                </label>
                <input
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
                  type="text"
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
                  placeholder="description type here"
                  className="w-full py-1 px-3 bg-white"
                ></textarea>
              </div>

              <div className="form-control mt-6 w-[35%] mx-auto">
                <button className="bg-[#FFB606] hover:bg-[#00715D] transition-all text-white tracking-widest font-bold rounded py-2 px-5">
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
