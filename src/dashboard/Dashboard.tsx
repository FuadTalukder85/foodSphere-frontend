import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import Container from "../components/container/Container";

const Dashboard = () => {
  return (
    <Container>
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-3">
          <Sidebar></Sidebar>
        </div>
        <div className="col-span-9">
          <Outlet></Outlet>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
