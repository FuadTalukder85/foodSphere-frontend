import { Link } from "react-router-dom";
import Container from "../../components/container/Container";
import AboutUs from "./AboutUs";
import OurVolunteer from "../ourVolunteer/OurVolunteer";
import DonationForm from "../donationForm/DonationForm";

const AboutUsPage = () => {
  const openModal = () => {
    const modal = document.getElementById(
      "my_modal_3"
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };
  return (
    <div className="mt-7">
      <div className="bg-[#FFB606]">
        <Container>
          <div className="md:py-16 p-4 md:p-0">
            <h1 className="text-3xl md:text-5xl text-white font-bold">
              We Work As a Charity/ Social/ Non-profit/ NGO/ Foundarisign
              Organization.
            </h1>
            {/* modal */}
            <button
              className="bg-white text-[#FFB606] px-6 py-2 mt-6 uppercase font-semibold focus:outline-none"
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
        </Container>
      </div>
      <AboutUs></AboutUs>
      <div className="bg-[#FFB606] mt-24 text-center">
        <Container>
          <div className="py-16">
            <h1 className="text-3xl text-white font-bold max-w-[35ch] mx-auto">
              FoodSphere Proud to Say, After Providing The Best Non-Profit
              Support. Join With Us As a Volunteer.
            </h1>
            <Link to="/volunteer">
              <button className="bg-white px-6 py-2 lg mt-6 font-semibold uppercase">
                Join Us
              </button>
            </Link>
          </div>
        </Container>
      </div>
      <OurVolunteer></OurVolunteer>
    </div>
  );
};

export default AboutUsPage;
