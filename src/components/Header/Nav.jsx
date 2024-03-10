import styled from "styled-components";

const Li = styled.li`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  padding: 39px 0;
  border-bottom: 3px solid transparent;
  transition: border-bottom-color 0.3s ease;

  &:hover {
    border-bottom-color: #fff;
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
          <Li>Главная</Li>
          <Li>Наши проекты</Li>
          <Li>Услуги</Li>
          <Li>Новости</Li>
          <Li>Контакты</Li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
