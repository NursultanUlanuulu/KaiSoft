import styled from "styled-components";
import { Container } from "../../style/style";
import Button from "../UI/Button";
import bg from "../../assets/images/header/bgr.jpg";
import { scrollToSection } from "../../utils/data/Scrol";
const Rectangle = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${bg});
  background-size: cover;
  background-position: center;
  margin-top: 100px;
  @media (min-width: 320px) {
    height: 400px;
    margin-top: 50px;
  }
  @media (min-width: 640px) {
    height: 500px;
  }
  @media (min-width: 768px) {
    height: 600px;
  }
  @media (min-width: 1024px) {
    height: 800px;
  }
`;

const HeroSection = () => {
  return (
    <section id="main">
      <Rectangle>
        <Container>
          <div className="flex flex-col pt-5 items-center h-[600px]">
            <p className="text-white text-center text-base font-medium  sm:text-lg mt-10 sm:mb-2 sm:font-normal md:mt-16 lg:font-medium lg:text-xl lg:mt-40">
              Передовая IT студия
            </p>
            <p className="text-[#ebebeb] text-center text-2xl mt-4 font-semibold sm:text-[35px] sm:font-semibold md:text-[40px] md:mt-6 lg:text-[46.6px] lg:font-extrabold lg:mb-9 lg:mt-20 ">
              Мы создаем легкие решения сложных задач и проблем
            </p>
            <Button
              className="hidden bg-[#4985FF] text-white rounded-[30px] w-[200px] h-[45px]  md:inline-block md:mt-10 lg:inline-block "
              onClick={() => scrollToSection("projects")}
            >
              Наши проекты
            </Button>
            <a
              className="sm:inline-block mt-5 text-white underline md:hidden"
              onClick={() => scrollToSection()}
            >
              Наши проекты
            </a>
          </div>
        </Container>
      </Rectangle>
    </section>
  );
};

export default HeroSection;
