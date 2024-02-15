import Container from "../../components/container/Container";
import aboutUsImg from "../../assets/img/aboutUsImg/aboutUsImg.png";

const AboutUs = () => {
  return (
    <Container>
      <div className="mt-28">
        <h1 className="text-4xl text-[#00715D] font-semibold">
          About Be <span className="text-[#FFB606]">FoodSphere</span>
        </h1>
      </div>
      <div className="grid grid-cols-12 gap-10 items-center">
        <div className="col-span-7">
          <p className="mt-5">
            Be aHand Is a Most Charity/ Non-profit/ Fundraising/ NGO
            organizations. Now Be aHand Is a Biggest organizations In This
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
            Be aHand Start Their Work With Small organizations In The Year
            1990.Now Be aHand is world wide organizations. There Consectetur
            adipisicing elit. Nemo repudiandae sunt delectus praesentium
            adipisci voluptatem sed, consectetur! Optio quis alias
            necessitatibus quidem.
          </p>
          <button className="border-2 border-[#FFB606] px-6 py-2 rounded-lg mt-6 font-bold">
            Read More
          </button>
        </div>
        <div className="col-span-5">
          <img src={aboutUsImg} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
