import Header from "../Header/Header";
import About from "../about/About";
import Company from "../company/Company";
import AllServises from "../allServices/AllServises";
import Header from "./Header";
import AllProjects from "../allProjects/AllProjects";
import Subcribe from "../subcribe/Subcribe";

export default function Layout() {
  return (
    <div>
      <Header />
      <About />
      <Company />
      <AllServises />
      <AllProjects/>
      <Subcribe/>
    </div>
  );
}
