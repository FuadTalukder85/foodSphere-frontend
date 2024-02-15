import tesi_img5 from "../../assets/img/testimonialimg/tesi_img5.png";

const TestimonialsSlideFive = () => {
  return (
    <div className="p-16">
      <img
        className="mx-auto border-2 border-[#FFB606] rounded-full"
        src={tesi_img5}
        alt=""
      />
      <p className="mx-auto text-center max-w-[65ch] text-white mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ad,
        hic aliquam debitis quam commodi incidunt, eos suscipit doloremque
        nesciunt voluptatum quaerat! Repellendus impedit voluptatibus maxime
        necessitatibus illum, consequatur quod?
      </p>
      <p className="text-2xl font-bold text-[#FFB606] text-center mt-5">
        ~ Emily Luna
      </p>
    </div>
  );
};

export default TestimonialsSlideFive;
