import About from "../about/About";
import Company from "../company/Company";
import Header from "./Header";

export default function Layout() {
  return (
    <div>
      <Header />
      <About />
      <Company />
    </div>
  );
}
