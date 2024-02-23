import Container from "../../components/container/Container";
import AllSuppliesCard from "./AllSuppliesCard";

const AllSupplies = () => {
  return (
    <Container>
      <div className="mt-7">
        <h1 className="text-3xl md:text-4xl text-[#00715D] font-semibold text-center uppercase">
          Our All <span className="text-[#FFB606]">Supply</span>
        </h1>
        <p className="text-center mt-2 font-semibold text-[#00715D]">
          Your Attention Is Changed The Part Of World. Give a helping hand to
          those who need it!
        </p>
      </div>
      {/* all supply card */}
      <div className="grid grid-cols-12 gap-2 p-2 md:gap-7 mt-5 md:mt-14">
        <AllSuppliesCard></AllSuppliesCard>
      </div>
    </Container>
  );
};

export default AllSupplies;
