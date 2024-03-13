import { Container } from "../../style/style";
import { about } from "../../utils/constants/constants";
import Button from "../UI/Button";
import AboutItem from "./AboutItem";

const About = () => {
  return (
    <section id="about">
      <div className="h-auto bg-white pb-5 md:pb-24">
        <Container>
          <div>
            <h1 className="text-[#323232] text-center text-[20px] font-semibold mt-6 sm:text-2xl sm:font-bold sm:mt-8 md:text-3xl lg:text-4xl lg:font-bold lg:mt-24">
              Мы создаем мобильные приложения <br /> для крупных корпораций
            </h1>
            <h1 className="text-[#999] text-center text-sm font-medium mt-5 sm:text-lg  sm:font-semibold md:text-xl lg:mt-10">
              Lorem Ipsum - это текст-рыба, часто используемый в печати и
              вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на
              латинице с начала XVI века.
            </h1>
          </div>
          <div className="mt-9 sm:flex sm:flex-col sm:items-center md:flex-row lg:mt-[70px] lg:flex justify-between">
            {about.map((e) => (
              <AboutItem key={e.id} item={e} />
            ))}
          </div>
          <div className="text-center">
            <Button className="rounded-[30px] bg-[#4985FF] text-white w-[200px] h-[45px] md:mt-14">
              Все услуги
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default About;
