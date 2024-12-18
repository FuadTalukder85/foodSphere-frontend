import Container from "../../components/container/Container";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../../redux/Hook";
import { logout, useCurrentUser } from "../../redux/features/auth/AuthSlice";
import Theme from "../../components/theme/Theme";

const NavBar = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(useCurrentUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Container>
      <div className="flex py-3">
        <div className="navbar-start flex items-center w-[1/4]">
          <Link to="/">
            <span className="text-3xl md:text-4xl px-4 md:px-0 font-bold text-[#00715D] uppercase">
              Food<span className="text-[#FFB606]">Sphere</span>
            </span>
          </Link>
        </div>

        <div className="navbar-end hidden lg:flex w-full">
          <ul className="md:flex items-center space-x-4 font-semibold p-5">
            <li className="text-[#00715D] font-bold">
              <Link to="/">Home</Link>
            </li>
            <li className="text-[#00715D] font-bold">
              <Link to="supplies">All Supplies</Link>
            </li>
            <li className="text-[#00715D] font-bold">
              <Link to="volunteer">Volunteer</Link>
            </li>
            <li className="text-[#00715D] font-bold">
              <Link to="community">Community</Link>
            </li>
            <li className="text-[#00715D] font-bold">
              <Link to="about-us">About Us</Link>
            </li>
            {/* <li className="text-[#00715D] font-bold">
              <Link to="leaderboard">Leaderboard</Link>
            </li> */}
            <li className="text-[#00715D] font-bold">
              {user ? <Link to="dashboard">Dashboard</Link> : ""}
            </li>
            <li className="text-[#00715D] font-bold">
              {user ? (
                <button
                  onClick={handleLogout}
                  className="border-2 border-[#FFB606] px-6 py-2"
                >
                  Logout
                </button>
              ) : (
                <button className="border-2 border-[#FFB606] px-6 py-2">
                  <Link to="login">Login</Link>
                </button>
              )}
            </li>
            <li className="flex justify-center text-4xl font-bold">
              <Theme></Theme>
            </li>
          </ul>
        </div>
        {/*  */}
        <div className="dropdown navbar-end md:hidden flex">
          <div className="flex justify-center items-center">
            <Theme></Theme>

            <div
              tabIndex={0}
              role="button"
              className="btn text-5xl btn-ghost lg:hidden text-[#00715D]"
            >
              <IoMenu></IoMenu>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-16 z-[1] p-2 shadow bg-slate-200 w-40"
          >
            <li className="text-[#00715D] font-bold">
              <Link to="/">Home</Link>
            </li>
            <li className="text-[#00715D] font-bold">
              <Link to="supplies">All Supplies</Link>
            </li>
            <li className="text-[#00715D] font-bold">
              <Link to="volunteer">Volunteer</Link>
            </li>
            <li className="text-[#00715D] font-bold">
              <Link to="community">Community</Link>
            </li>
            <li className="text-[#00715D] font-bold">
              <Link to="about-us">About Us</Link>
            </li>
            {/* <li className="text-[#00715D] font-bold">
              <Link to="leaderboard">Leaderboard</Link>
            </li> */}
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
      </div>
    </Container>
  );
};

export default NavBar;
