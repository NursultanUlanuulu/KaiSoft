// import com from '../../assets/images/header/com.png'
import com from "../../assets/images/company/com.png";
import pro from "../../assets/icons/pro.svg";
import { Container } from "../../style/style";

const about_us__numbers = [
  { id: 1, number: 125, label: "Our projects" },
  { id: 2, number: 125, label: "Our projects" },
  { id: 3, number: 125, label: "Our projects" },
  { id: 4, number: 125, label: "Our projects" },
  { id: 4, number: 125, label: "Our projects" },
];
export default function Company() {
  return (
    <div className="bg-[#F6F6F8]">
      <Container>
        <div className="flex justify-between items-center pt-24 pb-16 border-b-2 border-[#E0E0E0] ">
          <div className="w-[489px]">
            <h1 className="text-[#323232] text-4xl font-bold">
              Высокие стандарты разработки
            </h1>
            <h2 className="text-[#999] text-base font-normal mt-10 mb-7">
              Lorem Ipsum - это текст-рыба, часто используемый в печати и
              вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на
              латинице с начала XVI века. стандартной рыбой для текстов на
              латинице с начала XVI века.
            </h2>
            <a
              href="#"
              className="text-[#4985FF] text-base font-medium underline "
            >
              Подробнее о компании
            </a>
          </div>
          <div>
            <img src={com} alt="" />
          </div>
        </div>
        <div className=" flex justify-between w-[1000px] m-auto mt-[70px] pb-16">
          {about_us__numbers.map((el) => (
            <div key={el.id} className="">
              <div className="flex w-[104px] justify-between">
                <img src={pro} alt="" />
                <p className="text-[#000] text-4xl font-normal">125</p>
              </div>
              <p className=" text-[#999] text-base font-normal">Our projects</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
