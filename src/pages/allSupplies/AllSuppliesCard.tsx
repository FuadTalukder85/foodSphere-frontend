import { Link } from "react-router-dom";
import { useGetSuppliesQuery } from "../../redux/features/supplyAppi/SupplyApi";

const AllSuppliesCard = () => {
  const { data, isLoading } = useGetSuppliesQuery(undefined);

  console.log(data);
  if (isLoading) {
    return <></>;
  }
  return (
    <>
      {data.map((supplyData) => (
        <div
          key={supplyData._id}
          className="col-span-6 md:col-span-3 mx-auto p-1 md:p-7 shadow-xl "
        >
          <img
            className="border border-y-[#FFB606] shadow-2xl"
            src={supplyData.image}
            alt=""
          />
          <div className="mt-8">
            <h3 className="text-[#FFB606] text-xl font-semibold text-center">
              {supplyData.title}
            </h3>
            <div className="mt-3 text-center">
              <div>
                <h3 className="text-md text-[#00715D] font-bold">
                  Category:{" "}
                  <span className="text-[#FFB606]">{supplyData.category}</span>
                </h3>
                <h3 className="text-mg text-[#00715D] font-bold">
                  Quantity:
                  <span className="text-[#FFB606]"> {supplyData.quantity}</span>
                </h3>
              </div>
              <div className="flex justify-center items-center mt-5">
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button
                  className="border-2 border-[#FFB606] text-[#00715D] font-semibold px-3 py-1 rounded-lg mb-3 md:mb-0"
                  onClick={() =>
                    document.getElementById("my_modal_4").showModal()
                  }
                >
                  <Link to={`${supplyData._id}`}>View Detail</Link>
                </button>
                <dialog id="my_modal_4" className="modal">
                  {/* <ViewSupplyModal></ViewSupplyModal> */}
                </dialog>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AllSuppliesCard;
