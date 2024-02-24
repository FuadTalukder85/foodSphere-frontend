import Container from "../../components/container/Container";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../../redux/Hook";
import { logout, useCurrentUser } from "../../redux/features/auth/AuthSlice";

const NavBar = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(useCurrentUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Container>
      <div className="navbar">
        <div className="navbar-start md:flex justify-between">
          <Link to="/">
            <span className="text-4xl font-bold text-[#00715D]">
              Food<span className="text-[#FFB606]">Sphere</span>
            </span>
          </Link>
        </div>

        <div className="navbar-end hidden lg:flex">
          <ul className="md:flex items-center space-x-4 font-semibold p-5">
            <li className="text-[#00715D] font-bold">
              <Link to="/">Home</Link>
            </li>
            <li className="text-[#00715D] font-bold">
              <Link to="supplies">All Supplies</Link>
            </li>
            <li className="text-[#00715D] font-bold">
              {user ? <Link to="dashboard">Dashboard</Link> : ""}
            </li>
            <li className="text-[#00715D] font-bold">
              {user ? (
                <button
                  onClick={handleLogout}
                  className="border-2 border-[#FFB606] px-6 py-2 rounded-lg"
                >
                  Logout
                </button>
              ) : (
                <button className="border-2 border-[#FFB606] px-6 py-2 rounded-lg">
                  <Link to="login">Login</Link>
                </button>
              )}
            </li>
          </ul>
        </div>
        {/*  */}
        <div className="dropdown navbar-end md:hidden flex">
          <div
            tabIndex={0}
            role="button"
            className="btn text-5xl btn-ghost lg:hidden text-[#00715D]"
          >
            <IoMenu></IoMenu>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-48 z-[1] p-2 shadow bg-slate-200 w-36"
          >
            <li>
              <Link to="/" className="bg-[#00715D] text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="all-supplies" className="bg-[#00715D] text-white mt-1">
                All Supplies
              </Link>
            </li>
            <li>
              <Link
                to="dashboardLayout"
                className="bg-[#00715D] text-white mt-1"
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
