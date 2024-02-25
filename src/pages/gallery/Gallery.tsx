import galleryImg1 from "../../assets/img/galleryImg/1.jpg";
import galleryImg2 from "../../assets/img/galleryImg/2.jpg";
import galleryImg3 from "../../assets/img/galleryImg/3.jpg";
import galleryImg4 from "../../assets/img/galleryImg/4.jpg";
import galleryImg5 from "../../assets/img/galleryImg/5.jpg";
import galleryImg6 from "../../assets/img/galleryImg/6.jpg";
import galleryImg7 from "../../assets/img/galleryImg/7.jpg";
import galleryImg8 from "../../assets/img/galleryImg/8.jpg";
import { motion } from "framer-motion";

const Gallery = () => {
  return (
    <div className="mt-7 md:mt-28">
      <div>
        <h1 className="text-4xl text-[#00715D] font-semibold text-center">
          OUR PHOTO <span className="text-[#FFB606]">GALLERY</span>
        </h1>
        <p className="text-center mt-2 font-semibold text-[#00715D]">
          Your Attention Is Changed The Part Of World. Give a helping hand to
          those who need it!
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-7 md:mt-14">
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
            src={galleryImg1}
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
            src={galleryImg2}
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
            src={galleryImg3}
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
            src={galleryImg4}
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
            src={galleryImg5}
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
            src={galleryImg6}
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
            src={galleryImg7}
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
            src={galleryImg8}
            alt=""
          ></motion.img>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
