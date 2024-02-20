import Container from "../../components/container/Container";
import recentCauseImg1 from "../../assets/img/recentCauses/1.jpg";

const RecentCauses = () => {
  return (
    <Container>
      <div className="mt-7 md:mt-24">
        <h1 className="text-4xl text-[#00715D] font-semibold text-center uppercase">
          Recent <span className="text-[#FFB606]">Causes</span>
        </h1>
        <p className="text-center mt-2 font-semibold text-[#00715D]">
          Your Attention Is Changed The Part Of World. Give a helping hand to
          those who need it!
        </p>
      </div>
      <div className="grid md:grid-cols-4 gap-5 mt-5 md:mt-14">
        <div className="">
          <img
            className="border-b-2 mx-auto border-[#FFB606]"
            src={recentCauseImg1}
            alt=""
          />
          <div className="pe-3 text-center md:text-left">
            <div className="font-semibold mt-2 flex justify-around gap-5">
              <div className="text-[#00715D]">
                Goal: <span className="text-[#FFB606]">$5000</span>
              </div>
              <div className="text-[#00715D]">
                Raised: <span className="text-[#FFB606]">$3000</span>
              </div>
            </div>
            <h1 className="text-2xl text-[#FFB606] font-semibold mt-3">
              Charity For Education
            </h1>
            <p className="text-[#00715D] mt-3">
              Charity, institutional and modern clothing offices clean extensive
              amounts of textures in an extensive.
            </p>
            <button className="bg-[#FFB606] text-white px-6 py-2 rounded-lg mt-3 font-bold">
              Donate Now
            </button>
          </div>
        </div>
        <div className="">
          <img
            className="border-b-2 mx-auto border-[#FFB606]"
            src={recentCauseImg1}
            alt=""
          />
          <div className="pe-3 text-center md:text-left">
            <div className="font-semibold mt-2 flex justify-around gap-5">
              <div className="text-[#00715D]">
                Goal: <span className="text-[#FFB606]">$5000</span>
              </div>
              <div className="text-[#00715D]">
                Raised: <span className="text-[#FFB606]">$3000</span>
              </div>
            </div>
            <h1 className="text-2xl text-[#FFB606] font-semibold mt-3">
              Charity For Education
            </h1>
            <p className="text-[#00715D] mt-3">
              Charity, institutional and modern clothing offices clean extensive
              amounts of textures in an extensive.
            </p>
            <button className="bg-[#FFB606] text-white px-6 py-2 rounded-lg mt-3 font-bold">
              Donate Now
            </button>
          </div>
        </div>
        <div className="">
          <img
            className="border-b-2 mx-auto border-[#FFB606]"
            src={recentCauseImg1}
            alt=""
          />
          <div className="pe-3 text-center md:text-left">
            <div className="font-semibold mt-2 flex justify-around gap-5">
              <div className="text-[#00715D]">
                Goal: <span className="text-[#FFB606]">$5000</span>
              </div>
              <div className="text-[#00715D]">
                Raised: <span className="text-[#FFB606]">$3000</span>
              </div>
            </div>
            <h1 className="text-2xl text-[#FFB606] font-semibold mt-3">
              Charity For Education
            </h1>
            <p className="text-[#00715D] mt-3">
              Charity, institutional and modern clothing offices clean extensive
              amounts of textures in an extensive.
            </p>
            <button className="bg-[#FFB606] text-white px-6 py-2 rounded-lg mt-3 font-bold">
              Donate Now
            </button>
          </div>
        </div>
        <div className="">
          <img
            className="border-b-2 mx-auto border-[#FFB606]"
            src={recentCauseImg1}
            alt=""
          />
          <div className="pe-3 text-center md:text-left">
            <div className="font-semibold mt-2 flex justify-around gap-5">
              <div className="text-[#00715D]">
                Goal: <span className="text-[#FFB606]">$5000</span>
              </div>
              <div className="text-[#00715D]">
                Raised: <span className="text-[#FFB606]">$3000</span>
              </div>
            </div>
            <h1 className="text-2xl text-[#FFB606] font-semibold mt-3">
              Charity For Education
            </h1>
            <p className="text-[#00715D] mt-3">
              Charity, institutional and modern clothing offices clean extensive
              amounts of textures in an extensive.
            </p>
            <button className="bg-[#FFB606] text-white px-6 py-2 rounded-lg mt-3 font-bold">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RecentCauses;
