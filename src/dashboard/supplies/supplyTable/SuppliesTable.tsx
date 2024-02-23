import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import {
  useDeleteSupplyMutation,
  useGetSuppliesQuery,
} from "../../../redux/api/api";
import Swal from "sweetalert2";

const SuppliesTable = () => {
  const { data, isLoading, refetch } = useGetSuppliesQuery(undefined);
  console.log("Supply data => ", data);

  const [deleteSupply] = useDeleteSupplyMutation();

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you want to delete this supply?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteSupply(_id);
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your supply has been deleted.",
            icon: "success",
          });
        } catch (error) {
          console.error("Error deleting supply:", error);
        }
      }
    });
  };

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
                  <Link to={`/dashboard/edit-supply/${supplyItem._id}`}>
                    <FaRegEdit></FaRegEdit>
                  </Link>
                </td>
                <td className="text-red-600 text-4xl">
                  <button onClick={() => handleDelete(supplyItem._id)}>
                    <RiDeleteBin5Line></RiDeleteBin5Line>
                  </button>
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
