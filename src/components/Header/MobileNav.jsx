import styled from "styled-components";
import { scrollToSection } from "../../utils/data/Scrol";

const MobileNav = ({ isOpen, onClose }) => {
  const handleMenuItemClick = (section) => {
    onClose();
    scrollToSection(section);
  };
  return (
    <StyledMobileNav isOpen={isOpen}>
      <Background isOpen={isOpen} onClick={onClose} />
      <MenuContent isOpen={isOpen}>
        <MenuItems isOpen={isOpen}>
          <MenuItem onClick={() => handleMenuItemClick("main")}>
            Главная
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("projects")}>
            Наши проекты
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("services")}>
            Услуги
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("about")}>
            О нас
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("contacts")}>
            Контакты
          </MenuItem>
        </MenuItems>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </MenuContent>
    </StyledMobileNav>
  );
};

const StyledMobileNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%; 
  height: 110vh;
  background-color: rgba(0, 0, 0, ${({ isOpen }) => (isOpen ? "0.7" : "0")});
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transition: opacity 0.3s, background-color 0.3s;
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
`;

const MenuContent = styled.div`
  width: 80%;
  max-width: 400px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transform: translateY(${({ isOpen }) => (isOpen ? "0" : "-100%")});
  transition: opacity 0.3s, transform 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

const MenuItems = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MenuItem = styled.li`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
  cursor: pointer;
  &:hover {
    color: #ec6408;
  }
`;

const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
    color: red;
  }
`;

export default MobileNav;
