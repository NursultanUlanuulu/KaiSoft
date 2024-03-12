import com from "../../assets/images/company/com.png";
import { Container } from "../../style/style";

export default function Company() {
  return (
    <div className="bg-[#F6F6F8] py-4 ">
      <Container>
        <div className=" lg:flex justify-between items-center lg:py-20">
          <div className="w-full">
            <h1 className="text-[#323232] text-xl text-center font-semibold py-3 sm:text-2xl sm:font-bold lg:text-4xl lg:font-bold">
              Высокие стандарты разработки
            </h1>
            <h2 className="text-[#999] text-center text-sm font-medium sm:text-lg  sm:font-semibold lg:text-base lg:font-normal lg:mt-10 lg:mb-7">
              Lorem Ipsum - это текст-рыба, часто используемый в печати и
              вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на
              латинице с начала XVI века. стандартной рыбой для текстов на
              латинице с начала XVI века.
            </h2>
            <a
              href="#"
              className="text-[#4985FF] text-base font-medium underline hidden lg:inline-block "
            >
              Подробнее о компании
            </a>
          </div>
          <div className="w-full mt-3 sm:flex justify-center">
            <img src={com} alt="" />
          </div>
          <div className="sm:text-end lg:hidden">
            <a
              href="#"
              className="text-[#4985FF] text-base font-medium underline "
            >
              Подробнее о компании
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
