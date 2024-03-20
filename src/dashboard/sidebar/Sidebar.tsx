import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-[#00715D] h-[100vh] sticky top-0 left-0 px-10">
      <Link to="/" className="text-center flex justify-center pt-3">
        <span className="text-4xl font-bold text-[#FFB606]">
          Food<span className="text-[#FFB606]">Sphere</span>
        </span>
      </Link>

      <button className="bg-[#FFB606] w-full py-2 mt-6 rounded-lg font-bold">
        <Link to="/dashboard">Dashboard Home</Link>
      </button>
      <button className="bg-[#FFB606] w-full py-2 mt-2 rounded-lg font-bold">
        <Link to="/dashboard/supplies">All Supplies</Link>
      </button>
      <button className="bg-[#FFB606] w-full py-2 mt-2 rounded-lg font-bold">
        <Link to="/dashboard/donor-testimonial">Donor Testimonial</Link>
      </button>
    </div>
  );
};

export default Sidebar;
