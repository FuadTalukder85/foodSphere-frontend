import Container from "../../components/container/Container";

const SaveChildren = () => {
  return (
    <Container>
      <div className="mt-24">
        <h1 className="text-3xl md:text-4xl text-[#FFB606] font-semibold text-center uppercase">
          Save Children From Hunger
        </h1>
        <h1 className="text-3xl md:text-4xl text-[#00715D] font-semibold text-center uppercase">
          Became a part of the world charity organizations
        </h1>
        <p className="text-center mt-2 font-semibold text-[#00715D]">
          We are Charity/ Non-profit/ Fundraising/ NGO organizations.Help a
          child Without Family.
        </p>
        <div className="flex justify-center gap-5 mt-10">
          <button className="uppercase border-2 border-[#FFB606] px-8 py-4 font-bold text-[#00715D]">
            Donate Now
          </button>
          <button className="uppercase border-2 border-[#FFB606] bg-[#FFB606] px-8 py-4 font-bold text-[#00715D]">
            Learn more
          </button>
        </div>
      </div>
    </Container>
  );
};

export default SaveChildren;
