import { useParams } from "react-router-dom";
import { useGetSupplyByIdQuery } from "../../redux/features/supplyAppi/SupplyApi";
import UnderLine from "../../components/underLine/UnderLine";
import Container from "../../components/container/Container";
import DonationForm from "../donationForm/DonationForm";

const ViewSupplyModal = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSupplyByIdQuery(id);
  if (isLoading) {
    return <></>;
  }
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
      <UnderLine></UnderLine>
      <div className="modal-box max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-10 mt-5">
          <div className="col-span-5">
            <img
              className="w-full flex justify-center items-center"
              src={data.image}
              alt=""
            />
          </div>
          <div className="col-span-7 flex justify-center items-center">
            <div className="">
              <h1 className="text-center text-[#00715D] md:text-3xl font-bold text-lg">
                Title: <span className="text-[#FFB606]">{data.title}</span>
              </h1>
              <div className="flex gap-10 mt-5">
                <h3 className="text-xl text-[#00715D] font-bold">
                  Food Category:{" "}
                  <span className="text-[#FFB606]">{data.category}</span>
                </h3>
                <h3 className="text-xl text-[#00715D] font-bold">
                  Quantity:
                  <span className="text-[#FFB606]"> {data.quantity}</span>
                </h3>
              </div>
              <p className="text-center mt-5 font-semibold text-[#00715D]">
                {data.description}
              </p>
              <div className="flex gap-5 justify-center md:mt-3">
                <button
                  className="bg-[#FFB606] px-6 py-2 rounded-lg mt-6 font-bold"
                  onClick={openModal}
                >
                  Donate Now
                </button>
                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box rounded-sm max-w-[800px]">
                    <form method="dialog">
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
                <button className="bg-[#FFB606] px-6 py-2 rounded-lg mt-6 font-bold">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ViewSupplyModal;
