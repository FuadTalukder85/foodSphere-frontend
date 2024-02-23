import Container from "../../components/container/Container";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner mt-3 md:mt-0 py-5 md:py-48 flex">
      <Container>
        <div className=" text-white">
          <h1 className="text-center font-bold max-w-[20ch] text-3xl md:text-7xl">
            Build a Beautiful World. Charity organizations.
          </h1>
          <p className="text-xl text-center mt-2 md:mt-9">
            Your Help Turn Into Smiles.
          </p>
          <div className="flex gap-5 justify-center md:mt-3">
            <button className="bg-[#FFB606] px-6 py-2 rounded-lg mt-6 font-bold">
              Donate Now
            </button>
            <button className="bg-[#FFB606] px-6 py-2 rounded-lg mt-6 font-bold">
              Learn More
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
