import About from "../about/About";
import Company from "../company/Company";
import AllServises from "../allServices/AllServises";
import Header from "./Header";
import AllProjects from "../allProjects/AllProjects";
import Subcribe from "../subcribe/Subcribe";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div>
      <Header />
      <About />
      <Company />
      <AllServises />
      <AllProjects />
      <Subcribe />
      <Footer />
    </div>
  );
}
