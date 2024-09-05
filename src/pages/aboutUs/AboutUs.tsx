import Container from "../../components/container/Container";
import aboutUsImg from "../../assets/img/aboutUsImg/aboutUsImg.png";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <Container>
      <div className="mt-7 md:mt-28 px-7 md:px-0">
        <h1 className="text-4xl text-[#00715D] font-semibold">
          About Be <span className="text-[#FFB606]">FoodSphere</span>
        </h1>
      </div>
      <div className="grid md:grid-cols-12 gap-10 items-center p-5 md:p-0">
        <div className="md:col-span-7">
          <p className="md:mt-5">
            FoodSphere Is a Most Charity/ Non-profit/ Fundraising/ NGO
            organizations. Now FoodSphere Is a Biggest organizations In This
            Globe. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Nemo repudiandae sunt delectus praesentium adipisci voluptatem sed,
            consectetur! Optio quis alias necessitatibus quidem dolore est nobis
            iusto, doloremque, velit vel, eligendi excepturi iure quas
            dignissimos eius.
          </p>
          <p className="mt-3">
            Consectetur adipisicing elit. Assumenda in, animi facere illum culpa
            autem minima nostrum doloribus dignissimos!
          </p>
          <h3 className="mt-5 text-2xl text-[#00715D] font-semibold">
            History Of Be <span className="text-[#FFB606]">FoodSphere</span>
          </h3>
          <p className="mt-3">
            FoodSphere Start Their Work With Small organizations In The Year
            1990.Now FoodSphere is world wide organizations. There Consectetur
            adipisicing elit. Nemo repudiandae sunt delectus praesentium
            adipisci voluptatem sed, consectetur! Optio quis alias
            necessitatibus quidem.
          </p>
          <button className="border-2 border-[#FFB606] px-6 py-2 mt-6 font-semibold uppercase">
            Read More
          </button>
        </div>
        <div className="md:col-span-5">
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
            src={aboutUsImg}
            alt=""
          ></motion.img>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
