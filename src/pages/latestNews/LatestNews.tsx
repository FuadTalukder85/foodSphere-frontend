import Container from "../../components/container/Container";
import latestNewsImg1 from "../../assets/img/latestNewsImg/latestNewsImg1.jpg";
import latestNewsImg2 from "../../assets/img/latestNewsImg/latestNewsImg2.jpg";
import latestNewsImg3 from "../../assets/img/latestNewsImg/latestNewsImg3.jpg";

const LatestNews = () => {
  return (
    <Container>
      <div className="mt-11 md:mt-28">
        <h1 className="text-4xl text-[#00715D] font-semibold text-center uppercase">
          latest <span className="text-[#FFB606]">news</span>
        </h1>
        <p className="text-center mt-2 font-semibold text-[#00715D]">
          Your Attention Is Changed The Part Of World. Give a helping hand to
          those who need it!
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-5 mt-7 md:mt-16">
        <div>
          <img src={latestNewsImg1} alt="" />
          <div className="p-7">
            <h1 className="text-2xl text-[#FFB606] font-semibold">
              Let's Move With Our Blog
            </h1>
            <p className="text-[#00715D] mt-3">
              Charity, institutional and modern clothing offices clean extensive
              amounts of textures in an extensive.
            </p>
            <button className="bg-[#FFB606] text-white px-6 py-2 rounded-lg mt-3 font-bold">
              Rear More
            </button>
          </div>
        </div>
        <div>
          <div className="p-7">
            <h1 className="text-2xl text-[#FFB606] font-semibold">
              Let's Move With Our Blog
            </h1>
            <p className="text-[#00715D] mt-3">
              Charity, institutional and modern clothing offices clean extensive
              amounts of textures in an extensive.
            </p>
            <button className="bg-[#FFB606] text-white px-6 py-2 rounded-lg mt-3 font-bold">
              Rear More
            </button>
          </div>
          <img src={latestNewsImg2} alt="" />
        </div>
        <div>
          <img src={latestNewsImg3} alt="" />
          <div className="p-7">
            <h1 className="text-2xl text-[#FFB606] font-semibold">
              Let's Move With Our Blog
            </h1>
            <p className="text-[#00715D] mt-3">
              Charity, institutional and modern clothing offices clean extensive
              amounts of textures in an extensive.
            </p>
            <button className="bg-[#FFB606] text-white px-6 py-2 rounded-lg mt-3 font-bold">
              Rear More
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LatestNews;
