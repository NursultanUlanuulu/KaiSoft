import { Container } from "../../style/style";
import logo from "../../assets/images/header/logo.png";
import bg from "../../assets/images/header/bg.png";
import styled from "styled-components";

export default function Header() {
  return (
    <Rectangle>
      <div className=" border-b border-[#A1A1A1]  h-[104.02px]">
        <Container>
          <div className="flex items-center justify-between">
            <div className="w-[204px] py-[22px]">
              <img src={logo} width={200} />
            </div>
            <div>
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
          </div>
          <div className="flex flex-col justify-center items-center h-[600px]">
            <p className="text-white text-center text-base font-medium">
              Передовая IT студия
            </p>
            <p className="text-white text-center text-5xl font-extrabold">
              Мы создаем легкие решения <br /> сложных задач и проблем
            </p>
          </div>
        </Container>
      </div>
    </Rectangle>
  );
}

const Li = styled.li`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  padding: 39px 0;
  border-bottom: 2px solid transparent;
  transition: border-bottom-color 0.3s ease;

  &:hover {
    border-bottom-color: #fff;
  }
`;
const Rectangle = styled.header`
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  height: 800px;
`;
