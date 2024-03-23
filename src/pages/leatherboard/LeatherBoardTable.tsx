import Container from "../../components/container/Container";
import { useGetLeatherboardQuery } from "../../redux/features/LeatherBoardApi/LeatherBoardApi";

const LeatherBoardTable = () => {
  const { data, isLoading } = useGetLeatherboardQuery(undefined);

  if (isLoading) {
    return <></>;
  }

  const sortedData = [...data].sort(
    (a, b) => b.totalQuantity - a.totalQuantity
  );

  return (
    <Container>
      <div>
        <div className="overflow-x-auto mt-5">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="md:text-xl text-[#00715D]">
                <th>*</th>
                <th>Name</th>
                <th>Email</th>
                <th className="flex justify-center">Total donation</th>
              </tr>
            </thead>
            <tbody>
              {/* row */}
              {sortedData?.map((userData, index) => (
                <tr
                  key={userData._id}
                  className="text-[#1E2436] font-semibold md:text-lg"
                >
                  <th className="text-[#00715D]">{index + 1}</th>
                  <td>{userData.username}</td>
                  <td>{userData.email}</td>
                  <td className="flex justify-center">
                    {userData.totalQuantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default LeatherBoardTable;
