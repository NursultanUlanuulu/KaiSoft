import About from "../about/About";
import Company from "../company/Company";
import AllServises from "../allServices/AllServises";
import Header from "./Header";

export default function Layout() {
  return (
    <div>
      <Header />
      <About />
      <Company />
      <AllServises />
    </div>
  );
}
