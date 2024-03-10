import styled from "styled-components";
import Button from "../UI/Button";
import { Container } from "../../style/style";
import ser from "../../assets/images/AllServices/serv.png";
import { allServisesCard } from "../../utils/constants/constants";

export default function AllServises() {
  return (
    <div className="h-[900px]">
      <Background>
        <Container>
          <div className="flex justify-between items-center pt-24 ">
            <h2 className="text-[#FFF]  text-4xl font-bold w-[540px]">
              Наши работы, на которых мы специализируемся
            </h2>
            <Button className="bg-[#4985FF] text-white w-[200px] h-[45px] rounded-[30px] shadow-md">
              Все услуги
            </Button>
          </div>
          <div className="flex justify-between border-b-2 border-[#E0E0E0] pb-16">
            {allServisesCard.map((el) => (
              <div className="w-[350px] mt-16" key={el.id}>
                <img src={ser} alt="" />
                <h4 className=" text-lg font-semibold text-[#000] mt-4">
                  <span className="text-[#4985FF]">{el.number}</span>
                  {el.title}
                </h4>
                <p className="text-[#999] text-base font-normal py-4">
                  {el.text}
                </p>
                <a
                  href="#"
                  className="text-[#4985FF] underline text-base font-medium"
                >
                  Подробнее
                </a>
              </div>
            ))}
          </div>
        </Container>
      </Background>
    </div>
  );
}

const Background = styled.div`
  background: linear-gradient(90deg, #504dc2 20.44%, #5f12d0 80.91%), #c4c4c4;
  height: 490px;
`;
