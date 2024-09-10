import styled from "styled-components"
import { scrollToSection } from "../../utils/data/Scrol"
import { useTranslation } from "react-i18next"
import HeaderTranslate from "./HeaderTranslate"

export const Li = styled.li`
  color: #000000;
  font-size: 16px;
  font-weight: 500;
  /* padding: 39px 0; */
  border-bottom: 3px solid transparent;
  transition: border-bottom-color 0.3s ease;

  &:hover {
    color: #ec6408;
    opacity: 0.7;
    transition: color 0.4s;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    margin-right: 18px;
    padding: 25px 0;
  }
  @media (min-width: 1024px) {
    padding: 30px 0;
  }
`
const Nav = () => {
  const { t } = useTranslation("header")

  return (
    <div>
      <nav>
        <ul className="flex items-center lg:justify-between w-[650px]">
          <Li onClick={() => scrollToSection("main")}>{t("Главная")}</Li>
          <Li onClick={() => scrollToSection("projects")}>
            {t("Наши проекты")}
          </Li>
          <Li onClick={() => scrollToSection("services")}>{t("Услуги")}</Li>
          <Li onClick={() => scrollToSection("about")}>{t("О нас")}</Li>
          <Li>{t("Контакты")}</Li>
          <HeaderTranslate />
        </ul>
      </nav>
    </div>
  )
}

export default Nav
