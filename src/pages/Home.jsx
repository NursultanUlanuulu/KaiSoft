import About from "../components/about/About";
import Subcribe from "../components/subcribe/Subcribe";
import AllProjects from "../components/allProjects/AllProjects";
import HeroSection from "../components/Header/HeroSection";
import InternProgress from "../components/internProgress/InternProgress";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <InternProgress />
      <AllProjects />
      <Subcribe />
    </div>
  );
};

export default Home;
