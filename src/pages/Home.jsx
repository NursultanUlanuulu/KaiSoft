import About from '../components/about/About';
import Company from '../components/company/Company';
import AllServises from '../components/allServices/AllServises';
import AllProjects from '../components/allProjects/AllProjects';
import Subcribe from '../components/subcribe/Subcribe';

const Home = () => {
  return (
    <div>
      <About />
      <Company />
      <AllServises />
      <AllProjects />
      <Subcribe />
    </div>
  );
}

export default Home