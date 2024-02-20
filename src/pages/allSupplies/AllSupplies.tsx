import Container from "../../components/container/Container";
import foodImg from "../../assets/img/allSupplyImg/foodImg.jpg";
import { Link } from "react-router-dom";

const AllSupplies = () => {
  return (
    <Container>
      <div className="mt-7 md:mt-28">
        <h1 className="text-3xl md:text-4xl text-[#00715D] font-semibold text-center uppercase">
          Our All <span className="text-[#FFB606]">Supply</span>
        </h1>
        <p className="text-center mt-2 font-semibold text-[#00715D]">
          Your Attention Is Changed The Part Of World. Give a helping hand to
          those who need it!
        </p>
      </div>
      {/* card component */}
      <div className="grid grid-cols-12 gap-2 p-2 md:gap-7 mt-5 md:mt-14">
        <div className="col-span-6 md:col-span-4 mx-auto p-1 md:p-7 shadow-xl ">
          <img
            className="border border-y-[#FFB606] shadow-2xl"
            src={foodImg}
            alt=""
          />
          <div className="mt-8">
            <h3 className="text-[#FFB606] text-2xl font-semibold text-center">
              Charity For Food
            </h3>
            <p className="mt-2 text-center font-medium text-[#00715D]">
              This level of development and supervision is for individuals who
              can't live without anyone else's input yet who.
            </p>
            <div className="md:flex justify-between items-center mt-5">
              <div>
                <h3 className="text-md text-[#00715D] font-bold">
                  Food Category: <span className="text-[#FFB606]">Rice</span>
                </h3>
                <h3 className="text-mg text-[#00715D] font-bold">
                  Quantity:
                  <span className="text-[#FFB606]"> 12kg</span>
                </h3>
              </div>
              <div className="flex justify-center items-center mt-3 md:mt-0">
                <button className="border-2 border-[#FFB606] text-[#00715D] font-semibold px-3 py-1 rounded-lg mb-3 md:mb-0">
                  <Link to="dashboardLayout">View Detail</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6 md:col-span-4 mx-auto p-1 md:p-7 shadow-xl ">
          <img
            className="border border-y-[#FFB606] shadow-2xl"
            src={foodImg}
            alt=""
          />
          <div className="mt-8">
            <h3 className="text-[#FFB606] text-2xl font-semibold text-center">
              Charity For Food
            </h3>
            <p className="mt-2 text-center font-medium text-[#00715D]">
              This level of development and supervision is for individuals who
              can't live without anyone else's input yet who.
            </p>
            <div className="md:flex justify-between items-center mt-5">
              <div>
                <h3 className="text-md text-[#00715D] font-bold">
                  Food Category: <span className="text-[#FFB606]">Rice</span>
                </h3>
                <h3 className="text-mg text-[#00715D] font-bold">
                  Quantity:
                  <span className="text-[#FFB606]"> 12kg</span>
                </h3>
              </div>
              <div className="flex justify-center items-center mt-3 md:mt-0">
                <button className="border-2 border-[#FFB606] text-[#00715D] font-semibold px-3 py-1 rounded-lg mb-3 md:mb-0">
                  <Link to="dashboardLayout">View Detail</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6 md:col-span-4 mx-auto p-1 md:p-7 shadow-xl ">
          <img
            className="border border-y-[#FFB606] shadow-2xl"
            src={foodImg}
            alt=""
          />
          <div className="mt-8">
            <h3 className="text-[#FFB606] text-2xl font-semibold text-center">
              Charity For Food
            </h3>
            <p className="mt-2 text-center font-medium text-[#00715D]">
              This level of development and supervision is for individuals who
              can't live without anyone else's input yet who.
            </p>
            <div className="md:flex justify-between items-center mt-5">
              <div>
                <h3 className="text-md text-[#00715D] font-bold">
                  Food Category: <span className="text-[#FFB606]">Rice</span>
                </h3>
                <h3 className="text-mg text-[#00715D] font-bold">
                  Quantity:
                  <span className="text-[#FFB606]"> 12kg</span>
                </h3>
              </div>
              <div className="flex justify-center items-center mt-3 md:mt-0">
                <button className="border-2 border-[#FFB606] text-[#00715D] font-semibold px-3 py-1 rounded-lg mb-3 md:mb-0">
                  <Link to="dashboardLayout">View Detail</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6 md:col-span-4 mx-auto p-1 md:p-7 shadow-xl ">
          <img
            className="border border-y-[#FFB606] shadow-2xl"
            src={foodImg}
            alt=""
          />
          <div className="mt-8">
            <h3 className="text-[#FFB606] text-2xl font-semibold text-center">
              Charity For Food
            </h3>
            <p className="mt-2 text-center font-medium text-[#00715D]">
              This level of development and supervision is for individuals who
              can't live without anyone else's input yet who.
            </p>
            <div className="md:flex justify-between items-center mt-5">
              <div>
                <h3 className="text-md text-[#00715D] font-bold">
                  Food Category: <span className="text-[#FFB606]">Rice</span>
                </h3>
                <h3 className="text-mg text-[#00715D] font-bold">
                  Quantity:
                  <span className="text-[#FFB606]"> 12kg</span>
                </h3>
              </div>
              <div className="flex justify-center items-center mt-3 md:mt-0">
                <button className="border-2 border-[#FFB606] text-[#00715D] font-semibold px-3 py-1 rounded-lg mb-3 md:mb-0">
                  <Link to="dashboardLayout">View Detail</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6 md:col-span-4 mx-auto p-1 md:p-7 shadow-xl ">
          <img
            className="border border-y-[#FFB606] shadow-2xl"
            src={foodImg}
            alt=""
          />
          <div className="mt-8">
            <h3 className="text-[#FFB606] text-2xl font-semibold text-center">
              Charity For Food
            </h3>
            <p className="mt-2 text-center font-medium text-[#00715D]">
              This level of development and supervision is for individuals who
              can't live without anyone else's input yet who.
            </p>
            <div className="md:flex justify-between items-center mt-5">
              <div>
                <h3 className="text-md text-[#00715D] font-bold">
                  Food Category: <span className="text-[#FFB606]">Rice</span>
                </h3>
                <h3 className="text-mg text-[#00715D] font-bold">
                  Quantity:
                  <span className="text-[#FFB606]"> 12kg</span>
                </h3>
              </div>
              <div className="flex justify-center items-center mt-3 md:mt-0">
                <button className="border-2 border-[#FFB606] text-[#00715D] font-semibold px-3 py-1 rounded-lg mb-3 md:mb-0">
                  <Link to="dashboardLayout">View Detail</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6 md:col-span-4 mx-auto p-1 md:p-7 shadow-xl ">
          <img
            className="border border-y-[#FFB606] shadow-2xl"
            src={foodImg}
            alt=""
          />
          <div className="mt-8">
            <h3 className="text-[#FFB606] text-2xl font-semibold text-center">
              Charity For Food
            </h3>
            <p className="mt-2 text-center font-medium text-[#00715D]">
              This level of development and supervision is for individuals who
              can't live without anyone else's input yet who.
            </p>
            <div className="md:flex justify-between items-center mt-5">
              <div>
                <h3 className="text-md text-[#00715D] font-bold">
                  Food Category: <span className="text-[#FFB606]">Rice</span>
                </h3>
                <h3 className="text-mg text-[#00715D] font-bold">
                  Quantity:
                  <span className="text-[#FFB606]"> 12kg</span>
                </h3>
              </div>
              <div className="flex justify-center items-center mt-3 md:mt-0">
                <button className="border-2 border-[#FFB606] text-[#00715D] font-semibold px-3 py-1 rounded-lg mb-3 md:mb-0">
                  <Link to="dashboardLayout">View Detail</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AllSupplies;
