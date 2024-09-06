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
        <h1 className="text-3xl md:text-4xl text-[#FFB606] font-semibold text-center uppercase mt-3">
          Our top donor LeatherBoard
        </h1>
        <p className="text-center mt-2 font-semibold text-[#00715D]">
          Your Attention Is Changed The Part Of World. Give a helping hand to
          those who need it!
        </p>
        <div className="overflow-x-auto mt-8">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="md:text-xl text-black bg-[#FFB606]">
                <th>*</th>
                <th>Name</th>
                <th>Number</th>
                <th>Email</th>
                <th>Address</th>
                <th className="flex justify-center">Ammount</th>
              </tr>
            </thead>
            <tbody>
              {/* row */}
              {sortedData?.map((userData, index) => (
                <tr
                  key={userData._id}
                  className="text-[#1E2436] font-semibold md:text-lg hover:bg-slate-100"
                >
                  <th className="text-[#00715D]">{index + 1}</th>
                  <td>{userData.username}</td>
                  <td>01756867585</td>
                  <td>Faridpur, Dhaka</td>
                  <td>{userData.email}</td>
                  <td className="flex justify-center">
                    ${userData.totalQuantity}.00
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
