import Container from "../../components/container/Container";
import { motion } from "framer-motion";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="overflow-hidden">
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="banner mt-3 md:mt-0 py-5 md:py-48 flex"
      >
        <Container>
          <div className="text-white">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="text-center font-bold max-w-[20ch] text-3xl md:text-7xl"
            >
              Build a Beautiful World. Charity organizations.
            </motion.h1>
            <p className="text-xl text-center mt-2 md:mt-9">
              Your Help Turn Into Smiles.
            </p>
            <div className="flex gap-5 justify-center md:mt-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="bg-[#FFB606] px-6 py-2 rounded-lg mt-6 font-bold"
              >
                Donate Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="bg-[#FFB606] px-6 py-2 rounded-lg mt-6 font-bold"
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </Container>
      </motion.div>
    </div>
  );
};

export default Banner;
