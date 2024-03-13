import About from "../components/about/About";
import Company from "../components/company/Company";
import AllServises from "../components/allServices/AllServises";
import Subcribe from "../components/subcribe/Subcribe";
import AllProjects from "../components/allProjects/AllProjects";
import HeroSection from "../components/Header/HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <Company />
      <AllServises />
      <AllProjects />
      <Subcribe />
    </div>
  );
};

export default Home;
