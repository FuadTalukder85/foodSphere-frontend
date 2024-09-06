import Container from "../../components/container/Container";
import { motion } from "framer-motion";
import "./Banner.css";
import DonationForm from "../donationForm/DonationForm.tsx";

const Banner = () => {
  const openModal = () => {
    const modal = document.getElementById(
      "my_modal_3"
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };
  return (
    <div className="overflow-hidden">
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="banner mt-3 md:mt-0 py-5 md:py-48 flex"
      >
        <Container>
          <div className="">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="text-center font-bold max-w-[20ch] text-3xl md:text-7xl text-white"
            >
              Build a Beautiful World. Charity organizations.
            </motion.h1>
            <p className="text-xl text-center mt-2 md:mt-9 text-white">
              Your Help Turn Into Smiles.
            </p>
            <div className="flex gap-5 justify-center md:mt-3">
              <motion.button whileHover={{ scale: 1.1 }}>
                {/* modal */}
                <button
                  className="bg-[#FFB606] px-6 py-2 mt-6 text-white uppercase font-semibold focus:outline-none"
                  onClick={openModal}
                >
                  Donate Now
                </button>
                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box rounded-sm max-w-[800px]">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <h3 className="font-light text-4xl">Donation Form</h3>
                    <p className="text-sm font-light">
                      Your Donation Can Save Lot's Of Life
                    </p>
                    <p className="py-4">
                      <DonationForm></DonationForm>
                    </p>
                  </div>
                </dialog>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="bg-[#FFB606] px-6 py-2 mt-6 text-[#00715D] uppercase font-semibold"
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
