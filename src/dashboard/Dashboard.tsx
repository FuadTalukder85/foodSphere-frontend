import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import DashboardContainer from "../components/container/DashboardContainer";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-span-10">
          <Outlet></Outlet>
        </div>
      </div>
    </DashboardContainer>
  );
};

export default Dashboard;
