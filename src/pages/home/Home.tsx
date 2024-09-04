import AboutUs from "../aboutUs/AboutUs";
import Banner from "../banner/Banner";
import Gallery from "../gallery/Gallery";
import LatestNews from "../latestNews/LatestNews";
import RecentCauses from "../recentCauses/RecentCauses";
import SaveChildren from "../saveChildren/SaveChildren";
import Supply from "../supply/Supply";
import Testimonials from "../testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <SaveChildren></SaveChildren>
      <RecentCauses></RecentCauses>
      <AboutUs></AboutUs>
      <Gallery></Gallery>
      <Supply></Supply>
      <Testimonials></Testimonials>
      <LatestNews></LatestNews>
    </div>
  );
};

export default Home;
