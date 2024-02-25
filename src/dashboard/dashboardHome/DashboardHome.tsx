import { Link } from "react-router-dom";
import { useGetAllStatsQuery } from "../../redux/features/allStats/AllStats";
import ChartData from "./ChartData";

const DashboardHome = () => {
  const { data, isLoading } = useGetAllStatsQuery(undefined);

  if (isLoading) {
    return <></>;
  }

  return (
    <div className="px-10 bg-[#E8F8F5] h-[100vh]">
      <div className="grid grid-cols-12 gap-10 pt-6">
        <div className="col-span-3 border-2 border-[#FFB606] rounded-lg p-5 flex justify-center">
          <h1 className="text-3xl font-semibold text-[#00715D]">
            Total Users :{" "}
            <span className="text-[#FFB606] font-bold">{data.totalUsers}</span>
          </h1>
        </div>
        <div className="col-span-3 border-2 border-[#FFB606] rounded-lg p-5 flex justify-center">
          <h1 className="text-3xl font-semibold text-[#00715D]">
            Total Supply :{" "}
            <span className="text-[#FFB606] font-bold">{data.totalSupply}</span>
          </h1>
        </div>
        <div className="col-span-3 border-2 border-[#FFB606] rounded-lg p-5 flex justify-center">
          <h1 className="text-3xl font-semibold text-[#00715D]">
            Total Category :{" "}
            <span className="text-[#FFB606] font-bold">
              {data.totalCategories}
            </span>
          </h1>
        </div>
        <div className="col-span-3 border-2 border-[#FFB606] rounded-lg p-5 flex justify-center">
          <Link to="/dashboard/create-supply">
            <button className="bg-[#FFB606] px-6 py-2 rounded-lg font-bold">
              Add Supply
            </button>
          </Link>
        </div>
      </div>
      <ChartData></ChartData>
    </div>
  );
};

export default DashboardHome;
