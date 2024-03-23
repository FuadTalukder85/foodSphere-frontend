import { Link } from "react-router-dom";
import { useGetAllStatsQuery } from "../../redux/features/allStats/AllStats";
import ChartData from "./ChartData";

const DashboardHome = () => {
  const { data, isLoading } = useGetAllStatsQuery(undefined);

  if (isLoading) {
    return <></>;
  }

  return (
    <div className="bg-[#E8F8F5] h-[100vh]">
      <div className="md:flex px-10 justify-center gap-10 pt-6">
        <div className="border-2 border-[#FFB606] rounded-lg md:px-5 flex justify-center items-center">
          <h1 className="text-xl font-semibold text-[#00715D]">
            Total Users :{" "}
            <span className="text-[#FFB606] font-bold">{data.totalUsers}</span>
          </h1>
        </div>
        <div className="border-2 border-[#FFB606] rounded-lg mt-3 md:mt-0 md:px-5 flex justify-center items-center">
          <h1 className="text-xl font-semibold text-[#00715D]">
            Total Supply :{" "}
            <span className="text-[#FFB606] font-bold">{data.totalSupply}</span>
          </h1>
        </div>
        <div className="border-2 border-[#FFB606] rounded-lg mt-3 md:mt-0 md:px-5 flex justify-center items-center">
          <h1 className="text-xl font-semibold text-[#00715D]">
            Total Category :{" "}
            <span className="text-[#FFB606] font-bold">
              {data.totalCategories}
            </span>
          </h1>
        </div>
        <div className="mt-3 md:mt-0 flex justify-center items-center">
          <Link to="/dashboard/create-supply" className="p-3 md:p-0">
            <button className="bg-[#FFB606] px-6 py-2 rounded-lg font-bold">
              Add Supply
            </button>
          </Link>
        </div>
        <div className="mt-3 md:mt-0 flex justify-center items-center">
          <Link to="/dashboard/create-testimonial" className="p-3 md:p-0">
            <button className="bg-[#FFB606] px-6 py-2 rounded-lg font-bold">
              Add Testimonials
            </button>
          </Link>
        </div>
      </div>
      <ChartData></ChartData>
    </div>
  );
};

export default DashboardHome;
