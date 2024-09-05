import Container from "../../components/container/Container";
import latestNewsImg1 from "../../assets/img/latestNewsImg/latestNewsImg1.jpg";
import latestNewsImg2 from "../../assets/img/latestNewsImg/latestNewsImg2.jpg";
import latestNewsImg3 from "../../assets/img/latestNewsImg/latestNewsImg3.jpg";
import { motion } from "framer-motion";

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
        <div className="overflow-hidden">
          <motion.img
            whileHover={{
              opacity: 1,
              scale: 1.03,
              transition: {
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              },
            }}
            className="border border-y-[#FFB606] shadow-2xl"
            src={latestNewsImg1}
            alt=""
          ></motion.img>
          <div className="p-7">
            <h1 className="text-2xl text-[#FFB606] font-semibold">
              Let's Move With Our Blog
            </h1>
            <p className="text-[#00715D] mt-3">
              Charity, institutional and modern clothing offices clean extensive
              amounts of textures in an extensive.
            </p>
            <button className="bg-[#FFB606] text-white px-6 py-2 mt-3 font-semibold uppercase">
              Read More
            </button>
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="p-7">
            <h1 className="text-2xl text-[#FFB606] font-semibold">
              Let's Move With Our Blog
            </h1>
            <p className="text-[#00715D] mt-3">
              Charity, institutional and modern clothing offices clean extensive
              amounts of textures in an extensive.
            </p>
            <button className="bg-[#FFB606] text-white px-6 py-2 mt-3 font-semibold uppercase">
              Read More
            </button>
          </div>
          <motion.img
            whileHover={{
              opacity: 1,
              scale: 1.03,
              transition: {
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              },
            }}
            className="border border-y-[#FFB606] shadow-2xl"
            src={latestNewsImg2}
            alt=""
          ></motion.img>
        </div>
        <div className="overflow-hidden">
          <motion.img
            whileHover={{
              opacity: 1,
              scale: 1.03,
              transition: {
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              },
            }}
            className="border border-y-[#FFB606] shadow-2xl"
            src={latestNewsImg3}
            alt=""
          ></motion.img>
          <div className="p-7">
            <h1 className="text-2xl text-[#FFB606] font-semibold">
              Let's Move With Our Blog
            </h1>
            <p className="text-[#00715D] mt-3">
              Charity, institutional and modern clothing offices clean extensive
              amounts of textures in an extensive.
            </p>
            <button className="bg-[#FFB606] text-white px-6 py-2 mt-3 font-semibold uppercase">
              Read More
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LatestNews;
