import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-[#00715D] md:h-[100vh] sticky top-0 left-0 p-4 md:p-0 md:px-10">
      <Link to="/" className="text-center flex justify-center pt-3">
        <span className="text-4xl font-bold text-[#FFB606]">
          Food<span className="text-[#FFB606]">Sphere</span>
        </span>
      </Link>

      <Link to="/dashboard">
        <button className="bg-[#FFB606] w-full py-2 mt-6 rounded-lg font-bold">
          Dashboard Home
        </button>
      </Link>
      <Link to="/dashboard/supplies">
        <button className="bg-[#FFB606] w-full py-2 mt-2 rounded-lg font-bold">
          All Supplies
        </button>
      </Link>
      <Link to="/dashboard/donor-testimonial">
        <button className="bg-[#FFB606] w-full py-2 mt-2 rounded-lg font-bold">
          Donor Testimonial
        </button>
      </Link>
    </div>
  );
};

export default Sidebar;
