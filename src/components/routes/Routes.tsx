import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../../pages/home/Home";
import Dashboard from "../../dashboard/Dashboard";
import DashboardHome from "../../dashboard/dashboardHome/DashboardHome";
import SuppliesTable from "../../dashboard/supplies/supplyTable/SuppliesTable";
import AddSupplies from "../../dashboard/supplies/AddSupplies";
import EditSupply from "../../dashboard/supplies/EditSupply";
import Register from "../../pages/form/Register";
import Login from "../../pages/form/Login";
import ProtectedRoute from "../layout/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard></Dashboard>
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "/dashboard/supplies",
        element: <SuppliesTable></SuppliesTable>,
      },
      {
        path: "/dashboard/create-supply",
        element: <AddSupplies></AddSupplies>,
      },
      {
        path: "/dashboard/edit-supply",
        element: <EditSupply></EditSupply>,
      },
    ],
  },
]);
