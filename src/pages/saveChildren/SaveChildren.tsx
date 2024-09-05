import Container from "../../components/container/Container";
import DonationForm from "../donationForm/DonationForm";

const SaveChildren = () => {
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
      <div className="mt-24">
        <h1 className="text-3xl md:text-4xl text-[#FFB606] font-semibold text-center uppercase">
          Save Children From Hunger
        </h1>
        <h1 className="text-3xl md:text-4xl text-[#00715D] font-semibold text-center uppercase">
          Became a part of the world charity organizations
        </h1>
        <p className="text-center mt-2 font-semibold text-[#00715D]">
          We are Charity/ Non-profit/ Fundraising/ NGO organizations.Help a
          child Without Family.
        </p>
        <div className="flex justify-center gap-5 mt-10">
          {/* modal */}
          <button
            className="uppercase border-2 border-[#FFB606] px-6 py-2 font-bold text-[#00715D] focus:outline-none"
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
          <button className="uppercase border-2 border-[#FFB606] bg-[#FFB606] px-6 py-2 font-bold text-[#00715D]">
            Learn more
          </button>
        </div>
      </div>
    </Container>
  );
};

export default SaveChildren;
