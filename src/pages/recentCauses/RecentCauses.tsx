import Container from "../../components/container/Container";
import recentCauseImg1 from "../../assets/img/recentCauses/1.jpg";
import recentCauseImg2 from "../../assets/img/recentCauses/2.jpg";
import recentCauseImg3 from "../../assets/img/recentCauses/3.jpg";
import recentCauseImg4 from "../../assets/img/recentCauses/4.jpg";
import DonationForm from "../donationForm/DonationForm";

const RecentCauses = () => {
  const openModal = () => {
    const modal = document.getElementById(
      "my_modal_3"
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };
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
          </div>
        </div>
        {/*  */}
        <div className="">
          <img
            className="border-b-2 mx-auto border-[#FFB606]"
            src={recentCauseImg2}
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
              Charity For Food
            </h1>
            <p className="text-[#00715D] mt-3">
              Charity, institutional and modern clothing offices clean extensive
              amounts of textures in an extensive.
            </p>
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
          </div>
        </div>
        {/*  */}
        <div className="">
          <img
            className="border-b-2 mx-auto border-[#FFB606]"
            src={recentCauseImg3}
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
          </div>
        </div>
        {/*  */}
        <div className="">
          <img
            className="border-b-2 mx-auto border-[#FFB606]"
            src={recentCauseImg4}
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
              Charity For Health
            </h1>
            <p className="text-[#00715D] mt-3">
              Charity, institutional and modern clothing offices clean extensive
              amounts of textures in an extensive.
            </p>
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
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RecentCauses;
