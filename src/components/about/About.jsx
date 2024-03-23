// import { useTransition } from "react";
import { useTranslation } from "react-i18next";
import { Container } from "../../style/style";
import AboutItem from "./AboutItem";

const About = () => {
  const { t } = useTranslation(["home"]);
  return (
    <section id="about">
      <div className="h-auto bg-white pb-5 md:pb-24">
        <Container>
          <div>
            <h1 className="text-[#323232] text-center text-[20px] font-semibold mt-6 sm:text-2xl sm:font-bold sm:mt-8 md:text-3xl lg:text-4xl lg:font-bold lg:mt-24">
              {t(
                "Наша компания специализируются в трех основных направлениях: Outsource, Out staff, Consulting"
              )}
            </h1>
            <h1 className="text-[#999] text-center text-sm font-medium mt-5 sm:text-lg  sm:font-semibold md:text-xl lg:mt-10">
              {t(
                "У нас вы найдете команду профессионалов, готовых помочь вам стать востребованным специалистом в IT-индустрии."
              )}
            </h1>
          </div>
          <AboutItem />
        </Container>
      </div>
    </section>
  );
};

export default About;
