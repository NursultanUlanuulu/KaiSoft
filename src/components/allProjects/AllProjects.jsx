import code from "../../assets/images/allProjects/code.png";
import { Container } from "../../style/style";
import Button from "../UI/Button";
export default function AllProjects() {
  return (
    <div className="bg-[#F6F6F8] pt-24 pb-28">
      <Container>
        <div className=" ">
          <div>
            <h2 className="text-center text-[#000] text-4xl font-bold">
              Наши проекты
            </h2>
            <p className="text-center text-[#999] text-base font-normal mt-12 mb-16">
              Lorem Ipsum - это текст-рыба, часто используемый в печати и
              вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на
              латинице с начала XVI века.
            </p>
          </div>
          <div className="flex justify-between">
            <img src={code} alt="" />
            <img src={code} alt="" />
            <img src={code} alt="" />
            <img src={code} alt="" />
          </div>
          <div className="text-center mt-12 ">
            <Button className="bg-[#4985FF] text-white w-[200px] h-[45px] rounded-[30px] shadow-md">
              Все проекты
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
