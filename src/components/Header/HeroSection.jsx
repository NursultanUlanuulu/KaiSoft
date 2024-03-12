import Button from "../UI/Button";

const HeroSection = () => {
  return (
    <div>
      <div className="flex flex-col pt-5 items-center h-[600px]">
        <p className="text-white text-center text-base font-light  sm:text-lg sm:mb-2 sm:font-normal md:mt-16 lg:font-medium ">
          Передовая IT студия
        </p>
        <p className="text-white text-center text-2xl mt-4 sm:text-[35px] sm:font-semibold md:text-[40px] md:mt-6 lg:text-5xl lg:font-extrabold lg:mb-9">
          Мы создаем легкие решения сложных задач и проблем
        </p>
        <Button className="hidden bg-[#4985FF] text-white rounded-[30px] w-[200px] h-[45px]  md:inline-block md:mt-10 lg:inline-block ">
          Наши проекты
        </Button>
        <a className="sm:inline-block mt-5 text-white underline md:hidden">
          Наши проекты
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
