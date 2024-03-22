import { useGetLeatherboardQuery } from "../../redux/features/LeatherBoardApi/LeatherBoardApi";

const LeatherBoard = () => {
  const { data, isLoading } = useGetLeatherboardQuery(undefined);
  console.log("leatherboard data", data);
  if (isLoading) {
    return <></>;
  }

  return <div>LeatherBoard</div>;
};

export default LeatherBoard;
