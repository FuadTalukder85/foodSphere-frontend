import { useAppSelector } from "../../redux/Hook";
import { useGetUserQuery } from "../../redux/features/auth/AuthApi";
import { useCurrentUser } from "../../redux/features/auth/AuthSlice";
import LeatherBoardTable from "./LeatherBoardTable";

const LeatherBoard = () => {
  const currentUser = useAppSelector(useCurrentUser);
  console.log(currentUser);
  const { data, isLoading } = useGetUserQuery(undefined);

  // Function to find the currentUser from all users
  const findCurrentUser = (data: any[], currentUser: any) => {
    return data.find((user) => user?.email === currentUser?.email);
  };

  // Check if both currentUser and all users data are loaded
  if (!isLoading && data) {
    const matchedUser = findCurrentUser(data, currentUser);
    console.log(matchedUser);
    console.log(matchedUser.name);

    if (matchedUser) {
      console.log("Found the currentUser:", matchedUser);
    } else {
      console.log("No matching user found for currentUser:", currentUser);
    }
  }
  return (
    <div>
      <LeatherBoardTable></LeatherBoardTable>
    </div>
  );
};

export default LeatherBoard;
