import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import useSupply from "../../../hooks/useSupply";

const SuppliesTable = () => {
  const { data, isLoading } = useSupply();
  console.log("Supply data => ", data);
  if (isLoading) {
    return <></>;
  }
  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="text-[#FFB606] font-semibold text-xl">
          Total Supplies: 36
        </h3>
        <Link to="/dashboard/create-supply">
          <button className="bg-[#FFB606] px-6 py-2 rounded-lg mt-6 font-bold">
            Add Supply
          </button>
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-xl text-[#00715D]">
              <th>*</th>
              <th>Title</th>
              <th>Category</th>
              <th>Quantity</th>
              <th className="text-center">Edit</th>
              <th className="text-center">Update</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data.map((supplyItem, index) => (
              <tr
                key={supplyItem._id}
                className="text-[#1E2436] font-semibold text-lg"
              >
                <th>{index + 1}</th>
                <td>{supplyItem.title}</td>
                <td>{supplyItem.category}</td>
                <td>{supplyItem.quantity}</td>
                <td className="text-[#FFB606] text-4xl flex justify-center">
                  <Link to="/dashboard/edit-supply">
                    <FaRegEdit></FaRegEdit>
                  </Link>
                </td>
                <td className="text-red-600 text-4xl">
                  <RiDeleteBin5Line></RiDeleteBin5Line>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SuppliesTable;
