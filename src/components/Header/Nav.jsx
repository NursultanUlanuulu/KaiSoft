import styled from "styled-components";
import { scrollToSection } from "../../utils/data/Scrol";

export const Li = styled.li`
  color: #000000;
  font-size: 16px;
  font-weight: 500;
  padding: 39px 0;
  border-bottom: 3px solid transparent;
  transition: border-bottom-color 0.3s ease;

  &:hover {
    color: #ec6408;
    opacity: 0.7;
    transition: color 0.4s;
    cursor: pointer;
  }
  
  @media (min-width: 768px) {
    margin-right: 30px;
    padding: 34px 0;
  }
  @media (min-width: 1024px) {
    padding: 39px 0;
  }
`;
const Nav = () => {

  return (
    <div>
      <nav>
        <ul className="flex lg:justify-between w-[650px]">
          <Li onClick={() => scrollToSection("main")}>Главная</Li>
          <Li onClick={() => scrollToSection("projects")}>Наши проекты</Li>
          <Li onClick={() => scrollToSection("services")}>Услуги</Li>
          <Li onClick={() => scrollToSection("about")}>О нас</Li>
          <Li>Контакты</Li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
