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
import AllSupplies from "../../pages/allSupplies/AllSupplies";
import ViewSupplyModal from "../../pages/viewSupplyModal/ViewSupplyModal";
import AboutUsPage from "../../pages/aboutUs/AboutUsPage";
import DonorTestimonialsForm from "../../dashboard/donorTestimonials/DonorTestimonialsForm";
import DonorTestimonials from "../../dashboard/donorTestimonials/DonorTestimonials";
import Community from "../../pages/community/Community";
import VolunteerForm from "../../pages/volunteer/VolunteerForm";
// import LeatherBoard from "../../pages/leatherboard/LeatherBoard";

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
        path: "supplies",
        element: <AllSupplies></AllSupplies>,
      },
      {
        path: "supplies/:id",
        element: <ViewSupplyModal></ViewSupplyModal>,
      },
      {
        path: "volunteer",
        element: <VolunteerForm></VolunteerForm>,
      },
      {
        path: "community",
        element: <Community></Community>,
      },
      {
        path: "about-us",
        element: <AboutUsPage></AboutUsPage>,
      },
      // {
      //   path: "leaderboard",
      //   element: <LeatherBoard></LeatherBoard>,
      // },
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
        path: "/dashboard/create-testimonial",
        element: <DonorTestimonialsForm></DonorTestimonialsForm>,
      },
      {
        path: "/dashboard/donor-testimonial",
        element: <DonorTestimonials></DonorTestimonials>,
      },
      {
        path: "/dashboard/edit-supply/:id",
        element: <EditSupply></EditSupply>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/supplies/${params.id}`),
      },
    ],
  },
]);
