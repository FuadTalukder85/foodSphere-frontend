import AboutUs from "../aboutUs/AboutUs";
import AllSupplies from "../allSupplies/AllSupplies";
import Banner from "../banner/Banner";
import Gallery from "../gallery/Gallery";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AllSupplies></AllSupplies>
      <Gallery></Gallery>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
