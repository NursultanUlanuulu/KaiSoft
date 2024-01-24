import { Container } from "../../style/style";
import { about } from "../../utils/constants/constants";
import Button from "../UI/Button";

export default function About() {
  return (
    <div className="h-[588px] bg-white ">
      <Container>
        <div>
          <h1 className="text-[#323232] text-center text-4xl font-bold mt-24">
            Мы создаем мобильные приложения <br /> для крупных корпораций
          </h1>
          <h1 className="text-[#999] text-center text-base font-normal  mt-10">
            Lorem Ipsum - это текст-рыба, часто используемый в печати и
            вэб-дизайне. Lorem <br /> Ipsum является стандартной рыбой для
            текстов на латинице с начала XVI века.
          </h1>
        </div>
        <div className="mt-[70px] flex justify-between">
          {about.map((e) => (
            <div
              className="w-[353px] h-[139px] flex justify-between items-center"
              key={e.id}
            >
              <div className="border-2 border-[#E0E0E0] rounded-[50%]  w-[110px] h-[110px] p-2">
                <div className="border-2 border-[#4985FF] p-3 rounded-[50%]  w-[90px] h-[90px]">
                  <img
                    src={e.image}
                    className="w-full h-full object-cover p-2"
                    alt="Project"
                  />
                </div>
              </div>
              <div className="w-[220px] mt-[60px]">
                <h1 className="text-[#000] text-lg font-semibold ">
                  {e.title}
                </h1>
                <h1 className="text-[#999] text-sm font-normal">{e.discr}</h1>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button className=" rounded-[30px] bg-[#4985FF] text-white w-[200px] h-[45px] mt-14">
            Все услуги
          </Button>
        </div>
      </Container>
    </div>
  );
}
