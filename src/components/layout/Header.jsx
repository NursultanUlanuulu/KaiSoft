import { Container } from "../../style/style";
import logo from "../../assets/images/header/logo.png";
import bg from "../../assets/images/header/bg.png";
import styled from "styled-components";
import Button from "../UI/Button";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  return (
    <Rectangle>
      <div className=" border-b border-[#A1A1A1] h-[90px] lg:h-[123px]">
        <Container>
          <div className="flex items-center justify-between">
            <div className="w-[150px] lg:w-[200px]">
              <img src={logo} alt="Logo" />
            </div>
            <div className="hidden md:flex">
              <nav>
                <ul className="flex justify-between w-[650px]">
                  <Li>Главная</Li>
                  <Li>Наши проекты</Li>
                  <Li>Услуги</Li>
                  <Li>Новости</Li>
                  <Li>Контакты</Li>
                </ul>
              </nav>
            </div>
            <button className=" inline-block md:hidden text-white">
              <MenuIcon />
            </button>
          </div>
          <div className="flex flex-col pt-5 lg:justify-center items-center h-[600px]">
            <p className="text-white text-center text-base lg:font-medium font-light">
              Передовая IT студия
            </p>
            <p className="text-white text-center text-2xl lg:text-5xl  font-extrabold mb-9">
              Мы создаем легкие решения сложных задач и проблем
            </p>
            <Button className="hidden sm:inline-block md:inline-block   bg-[#4985FF] text-white  lg:hidden  rounded-[30px] lg:w-[200px] lg:h-[45px]">
              Наши проекты
            </Button>
            <a className="hiden text-white underline">Наши проекты</a>
          </div>
        </Container>
      </div>
    </Rectangle>
  );
}
////изменения
const Li = styled.li`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  padding: 39px 0;
  border-bottom: 3px solid transparent;
  transition: border-bottom-color 0.3s ease;

  &:hover {
    border-bottom-color: #fff;
  }
`;
const Rectangle = styled.header`
  background-image: url(${bg});
  background-size: cover;
  background-position: center;

  @media (min-width: 320px) {
    height: 400px;
  }
  @media (min-width: 768px) {
    height: 600px;
  }
  @media (min-width: 1024px) {
    height: 800px;
  }
`;
