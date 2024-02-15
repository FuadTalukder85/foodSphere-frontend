import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 gap-10">
      <div className="col-span-2">
        <Sidebar></Sidebar>
      </div>
      <div className="col-span-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
