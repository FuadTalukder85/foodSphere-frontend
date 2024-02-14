import { Outlet } from "react-router-dom";
import Footer from "../../pages/footer/Footer";
import NavBar from "../../pages/navBar/NavBar";

const MainLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
