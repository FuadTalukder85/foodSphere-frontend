import { Link } from "react-router-dom";
import Container from "../../components/container/Container";
import AboutUs from "./AboutUs";
import OurVolunteer from "../ourVolunteer/OurVolunteer";

const AboutUsPage = () => {
  return (
    <div className="mt-7">
      <div className="bg-[#FFB606]">
        <Container>
          <div className="py-16">
            <h1 className="text-5xl text-white font-bold">
              We Work As a Charity/ Social/ Non-profit/ NGO/ Foundarisign
              Organization.
            </h1>
            <button className="bg-white px-6 py-2 rounded-lg mt-6 font-bold">
              Donate Now
            </button>
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
              <button className="bg-white px-7 py-2 rounded-lg mt-6 font-bold">
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
