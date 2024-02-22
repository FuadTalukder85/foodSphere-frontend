import { useParams } from "react-router-dom";
import { useGetSupplyByIdQuery } from "../../redux/api/api";

const ViewSupplyModal = () => {
  const { id } = useParams();
  console.log("params id =>", id);
  const { data, isLoading } = useGetSupplyByIdQuery(id);

  if (isLoading) {
    return <></>;
  }
  console.log(data);

  return (
    <>
      <div className="modal-box w-11/12 max-w-5xl">
        <div className="grid grid-cols-12 gap-10 mt-5">
          <div className="col-span-5">
            <img
              className="w-full flex justify-center items-center"
              src={""}
              alt=""
            />
          </div>
          <div className="col-span-7">
            <h1 className="text-center text-[#00715D] md:text-3xl font-bold text-lg">
              Title: {data.title}
            </h1>
            <div className="flex gap-10 mt-5">
              <h3 className="text-md text-[#00715D] font-bold">
                Food Category:{" "}
                <span className="text-[#FFB606]">{data.category}</span>
              </h3>
              <h3 className="text-mg text-[#00715D] font-bold">
                Quantity:
                <span className="text-[#FFB606]"> {data.quantity}</span>
              </h3>
            </div>
            <p className="text-center mt-5 font-semibold text-[#00715D]">
              {data.description}
            </p>
          </div>
        </div>
        <div className="modal-action mt-[-30px]">
          <form method="dialog">
            {/* if there is a button, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ViewSupplyModal;
