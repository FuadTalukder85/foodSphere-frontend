import galleryImg1 from "../../assets/img/galleryImg/1.jpg";
import galleryImg2 from "../../assets/img/galleryImg/2.jpg";
import galleryImg3 from "../../assets/img/galleryImg/3.jpg";
import galleryImg4 from "../../assets/img/galleryImg/4.jpg";
import galleryImg5 from "../../assets/img/galleryImg/5.jpg";
import galleryImg6 from "../../assets/img/galleryImg/6.jpg";
import galleryImg7 from "../../assets/img/galleryImg/7.jpg";
import galleryImg8 from "../../assets/img/galleryImg/8.jpg";

const Gallery = () => {
  return (
    <div className="mt-28">
      <div>
        <h1 className="text-4xl text-[#00715D] font-semibold text-center">
          OUR PHOTO <span className="text-[#FFB606]">GALLERY</span>
        </h1>
        <p className="text-center mt-2 font-semibold text-[#00715D]">
          Your Attention Is Changed The Part Of World. Give a helping hand to
          those who need it!
        </p>
      </div>
      <div className="grid grid-cols-4 gap-5 mt-14">
        <div>
          <img src={galleryImg1} alt="" />
        </div>
        <div>
          <img src={galleryImg2} alt="" />
        </div>
        <div>
          <img src={galleryImg3} alt="" />
        </div>
        <div>
          <img src={galleryImg4} alt="" />
        </div>
        <div>
          <img src={galleryImg5} alt="" />
        </div>
        <div>
          <img src={galleryImg6} alt="" />
        </div>
        <div>
          <img src={galleryImg7} alt="" />
        </div>
        <div>
          <img src={galleryImg8} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
