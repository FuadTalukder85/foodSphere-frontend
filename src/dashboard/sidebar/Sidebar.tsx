import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-[#00715D] px-10">
      <button className="bg-[#FFB606] w-full py-2 mt-6 rounded-lg font-bold">
        <Link to="/dashboard">Dashboard Home</Link>
      </button>
      <button className="bg-[#FFB606] w-full py-2 mt-2 rounded-lg font-bold">
        <Link to="/dashboard">All SUpplies</Link>
      </button>
    </div>
  );
};

export default Sidebar;
