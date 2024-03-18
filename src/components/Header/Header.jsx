import { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Nav from "./Nav";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "../../style/style";

const Header = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      setVisible(currentScrollTop < lastScrollTop || currentScrollTop < 100);
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <StyledHeader visible={visible}>
      <Container>
        <div className="flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex ml-14">
            <Nav />
          </div>
          <button className=" inline-block md:hidden text-white">
            <MenuIcon />
          </button>
        </div>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: ${({ visible }) =>
    visible ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none"};
  transform: translateY(${({ visible }) => (visible ? "0" : "-100%")});
  transition: transform 0.3s, box-shadow 0.3s;
  z-index: 1000;
`;

export default Header;
