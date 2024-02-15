import AboutUs from "../aboutUs/AboutUs";
import AllSupplies from "../allSupplies/AllSupplies";
import Banner from "../banner/Banner";
import Gallery from "../gallery/Gallery";
import RecentCauses from "../recentCauses/RecentCauses";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AllSupplies></AllSupplies>
      <Gallery></Gallery>
      <AboutUs></AboutUs>
      <RecentCauses></RecentCauses>
    </div>
  );
};

export default Home;
