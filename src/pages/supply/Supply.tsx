import { Link } from "react-router-dom";
import Container from "../../components/container/Container";

import SupplyCard from "./SupplyCard";

const Supply = () => {
  return (
    <Container>
      <div className="mt-7 md:mt-28">
        <h1 className="text-3xl md:text-4xl text-[#00715D] font-semibold text-center uppercase">
          Our <span className="text-[#FFB606]">Supply</span>
        </h1>
        <p className="text-center mt-2 font-semibold text-[#00715D]">
          Your Attention Is Changed The Part Of World. Give a helping hand to
          those who need it!
        </p>
      </div>
      {/* supply card */}
      <div className="grid grid-cols-12 gap-2 p-2 md:gap-7 mt-5 md:mt-14">
        <SupplyCard></SupplyCard>
      </div>
      <div className="flex justify-center items-center mt-11">
        <button className="bg-[#FFB606] text-[#00715D] text-2xl font-semibold px-9 py-3 rounded-lg mb-3 md:mb-0 ">
          <Link to="/supplies">View all</Link>
        </button>
      </div>
    </Container>
  );
};

export default Supply;
