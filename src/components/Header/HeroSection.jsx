import styled from "styled-components";
import { Container } from "../../style/style";
import Button from "../UI/Button";
import bg from "../../assets/images/header/bgr.jpg";
import { scrollToSection } from "../../utils/data/Scrol";
import { useTranslation } from "react-i18next";
// import { t } from "i18next";
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
  const { t } = useTranslation("header");

  return (
    <section id="main">
      <Rectangle>
        <Container>
          <div className="flex flex-col pt-5 items-center h-[600px]">
            <h4 className="text-white text-center text-base font-medium  sm:text-lg mt-10 sm:mb-2 sm:font-normal md:mt-16 lg:font-medium lg:text-xl lg:mt-40">
              {t("Передовая IT компания")}
            </h4>
            <h1 className="text-[#ebebeb] text-center text-[23px] my-4 font-semibold sm:text-[35px] sm:font-semibold md:text-[40px] md:mt-6 lg:text-[42.6px] lg:font-extrabold lg:mb-9 lg:mt-20 ">
              {t(
                "Присоединяйтесь к нам, чтобы воплотить свои IT-мечты в реальность"
              )}
            </h1>
            <p className="text-[#ebebeb] text-center text-[16px] font-semibold md:text-[20px]">
              {t(
                "Наши эксперты помогут вам приобрести необходимые навыки и достичь успеха в мире технологий."
              )}
            </p>
            <Button
              className="hidden bg-[#4985FF] text-white rounded-[30px] w-[200px] h-[45px]  md:inline-block md:mt-10 lg:inline-block hover:bg-[#ec6408] transition-all duration-300"
              onClick={() => scrollToSection("projects")}
            >
              {t("Наши проекты")}
            </Button>
            <a
              className=" cursor-pointer sm:inline-block mt-5 text-white underline md:hidden"
              onClick={() => scrollToSection("projects")}
            >
              {t("Наши проекты")}
            </a>
          </div>
        </Container>
      </Rectangle>
    </section>
  );
};

export default HeroSection;
