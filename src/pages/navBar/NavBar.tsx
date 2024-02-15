import Container from "../../components/container/Container";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const NavBar = () => {
  return (
    <Container>
      <div className="navbar">
        <div className="navbar-start flex justify-between">
          <p>
            <span className="text-4xl font-bold text-[#00715D]">
              Food<span className="text-[#FFB606]">Sphere</span>
            </span>
          </p>
        </div>
        {/*  #62cdee*/}
        <div className="navbar-end hidden lg:flex">
          <ul className="md:flex items-center space-x-4 font-semibold p-5">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="all-supplies">All Supplies</Link>
            </li>
            <li>
              <Link to="dashboard">Dashboard</Link>
            </li>
            <li>
              <button className="border-2 border-[#FFB606] px-6 py-2 rounded-lg">
                <Link to="dashboardLayout">Login</Link>
              </button>
            </li>
          </ul>
        </div>
        {/*  */}
        <div className="dropdown navbar-end md:hidden flex">
          <div
            tabIndex={0}
            role="button"
            className="btn text-5xl btn-ghost lg:hidden text-[#0B63E5]"
          >
            <IoMenu></IoMenu>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-48 z-[1] p-2 shadow bg-slate-200 w-36"
          >
            <li>
              <Link to="/" className="bg-[#0B63E5] text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="all-supplies" className="bg-[#0B63E5] text-white mt-1">
                All Supplies
              </Link>
            </li>
            <li>
              <Link
                to="dashboardLayout"
                className="bg-[#0B63E5] text-white mt-1"
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default NavBar;
