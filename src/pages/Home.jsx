import About from "../components/about/About";
import Subcribe from "../components/subcribe/Subcribe";
import AllProjects from "../components/allProjects/AllProjects";
import HeroSection from "../components/Header/HeroSection";
import InternProgress from "../components/internProgress/InternProgress";
import Team from "../components/team/Team";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <InternProgress />
      <Team />
      <AllProjects />
      <Subcribe />
    </div>
  );
};

export default Home;
