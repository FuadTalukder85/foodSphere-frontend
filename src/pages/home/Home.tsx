import AboutUs from "../aboutUs/AboutUs";
import Banner from "../banner/Banner";
import Gallery from "../gallery/Gallery";
import LatestNews from "../latestNews/LatestNews";
import RecentCauses from "../recentCauses/RecentCauses";
import Supply from "../supply/Supply";
import Testimonials from "../testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Supply></Supply>
      <Testimonials></Testimonials>
      <Gallery></Gallery>
      <AboutUs></AboutUs>
      <RecentCauses></RecentCauses>
      <LatestNews></LatestNews>
    </div>
  );
};

export default Home;
