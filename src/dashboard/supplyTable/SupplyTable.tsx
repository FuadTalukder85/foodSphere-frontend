import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
const SupplyTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="text-xl text-[#00715D]">
            <th>*</th>
            <th>Title</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Edit</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr className="text-[#00715D] font-semibold text-lg">
            <th>2</th>
            <td>Charity For Food</td>
            <td>Rice</td>
            <td>12kg</td>
            <td className="text-[#FFB606] text-4xl">
              <FaRegEdit></FaRegEdit>
            </td>
            <td className="text-red-600 text-4xl">
              <RiDeleteBin5Line></RiDeleteBin5Line>
            </td>
          </tr>
          {/* row 2 */}
          <tr className="text-[#00715D] font-semibold text-lg">
            <th>3</th>
            <td>Charity For Food</td>
            <td>Rice</td>
            <td>12kg</td>
            <td className="text-[#FFB606] text-4xl">
              <FaRegEdit></FaRegEdit>
            </td>
            <td className="text-red-600 text-4xl">
              <RiDeleteBin5Line></RiDeleteBin5Line>
            </td>
          </tr>
          {/* row 3 */}
          <tr className="text-[#00715D] font-semibold text-lg">
            <th>4</th>
            <td>Charity For Food</td>
            <td>Rice</td>
            <td>12kg</td>
            <td className="text-[#FFB606] text-4xl">
              <FaRegEdit></FaRegEdit>
            </td>
            <td className="text-red-600 text-4xl">
              <RiDeleteBin5Line></RiDeleteBin5Line>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SupplyTable;
