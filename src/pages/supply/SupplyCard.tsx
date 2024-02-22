import { Link } from "react-router-dom";
// import ViewSupplyModal from "../viewSupplyModal/ViewSupplyModal";
import { useGetSuppliesQuery } from "../../redux/api/api";

const SupplyCard = () => {
  const { data, isLoading } = useGetSuppliesQuery(undefined);
  console.log(data);
  if (isLoading) {
    return <></>;
  }
  return (
    <>
      {data.slice(0, 6).map((supplyData) => (
        <div
          key={supplyData._id}
          className="col-span-6 md:col-span-4 mx-auto p-1 md:p-7 shadow-xl "
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
            <div className="md:flex justify-between items-center mt-7">
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
              <div className="flex justify-center items-center mt-3 md:mt-0">
                <div className="">
                  {/* You can open the modal using document.getElementById('ID').showModal() method */}
                  <button
                    className="border-2 border-[#FFB606] text-[#00715D] font-semibold px-3 py-1 rounded-lg mb-3 md:mb-0"
                    onClick={() =>
                      document.getElementById("my_modal_4").showModal()
                    }
                  >
                    <Link to={``}>View Detail</Link>
                  </button>
                  <dialog id="my_modal_4" className="modal">
                    {/* <ViewSupplyModal></ViewSupplyModal> */}
                  </dialog>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SupplyCard;
