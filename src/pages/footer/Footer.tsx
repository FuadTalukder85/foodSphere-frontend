import Container from "../../components/container/Container";
import { FaEnvelope } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SlSocialPintarest } from "react-icons/sl";

const Footer = () => {
  return (
    <div className="bg-[#1E2436] text-white mt-10">
      <Container>
        <footer className="footer grid md:grid-cols-12 gap-10 text-white py-16">
          <aside className="col-span-4">
            <p>
              <span className="text-3xl font-bold">
                Food<span className="text-[#FFB606]">Sphere</span>
              </span>
            </p>
            <p className="max-w-[40ch] mt-3 text-lg">
              Nulla ultricies justo sit amet ante efficitur, eget pharetra augue
              efficitur. Vestibulum viverra, dolor sit amet ultricies.
            </p>
            <button className="border-2 border-[#FFB606] px-6 py-2 rounded-lg mt-6 font-bold">
              Donate Now
            </button>
          </aside>
          <nav className="col-span-2">
            <h6 className="font-bold text-2xl text-[#FFB606]">Services</h6>
            <a className="link link-hover text-lg">Donate</a>
            <a className="link link-hover text-lg">Sponsor</a>
            <a className="link link-hover text-lg">Fundraise</a>
            <a className="link link-hover text-lg">Volunteer</a>
            <a className="link link-hover text-lg">Partner</a>
          </nav>
          <nav className="col-span-3">
            <h6 className="font-bold text-2xl text-[#FFB606]">Non profit</h6>
            <a className="link link-hover text-lg">Differently Abled Kids</a>
            <a className="link link-hover text-lg">Help Child Cancer</a>
            <a className="link link-hover text-lg">Clean Pure Water</a>
            <a className="link link-hover text-lg">Give them Education</a>
            <a className="link link-hover text-lg">Start a Fundraising</a>
          </nav>
          <nav className="col-span-4">
            <h6 className="font-bold text-2xl text-[#FFB606]">Contact</h6>
            <p className="text-lg">
              380 Street Kilda Broklyn Road Melbourne Australia
            </p>
            <p className="flex gap-3 justify-center items-center text-lg">
              <FaEnvelope className="text-[#FFB606] text-xl"></FaEnvelope>
              foodSphere@gmail.com
            </p>
            <p className="flex gap-3 justify-center items-center text-lg">
              <IoIosCall className="text-[#FFB606] text-2xl"></IoIosCall>+ 98
              (000) - 9630
            </p>
            <p className="mt-1 flex gap-3">
              <button className="bg-[#00715D] w-[40px] h-[40px] flex items-center justify-center rounded-full">
                <FaFacebook className="text-[#FFB606] text-xl"></FaFacebook>
              </button>
              <button className="bg-[#00715D] w-[40px] h-[40px] flex items-center justify-center rounded-full">
                <FaInstagram className="text-[#FFB606] text-xl"></FaInstagram>
              </button>
              <button className="bg-[#00715D] w-[40px] h-[40px] flex items-center justify-center rounded-full">
                <FaTwitter className="text-[#FFB606] text-xl"></FaTwitter>
              </button>
              <button className="bg-[#00715D] w-[40px] h-[40px] flex items-center justify-center rounded-full">
                <SlSocialPintarest className="text-[#FFB606] text-xl"></SlSocialPintarest>
              </button>
            </p>
          </nav>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
