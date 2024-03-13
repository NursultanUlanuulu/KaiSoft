// import { Container } from "../../style/style";
// // import bg from "../../assets/images/header/bg.png";
// import bg from "../../assets/images/header/photo.png";
// import styled from "styled-components";

// import HeroSection from "./HeroSection";
// import { useEffect, useState } from "react";

// const StyledHeader = styled.header`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   padding: 20px 0;
//   background-color: #fff;
//   box-shadow: ${({ isScrolled }) =>
//     isScrolled ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none"};
//   transition: background-color 0.3s, box-shadow 0.3s;
//   z-index: 1000;
// `;
// const Rectangle = styled.div`
//   background-image: url(${bg});
//   background-size: cover;
//   background-position: center;

//   @media (min-width: 320px) {
//     height: 400px;
//   }
//   @media (min-width: 640px) {
//     height: 500px;
//   }
//   @media (min-width: 768px) {
//     height: 600px;
//   }
//   @media (min-width: 1024px) {
//     height: 800px;
//   }
// `;

// export default function Header() {
//   return (
//     <header className="bg-black">
//       <Rectangle>
//         <div className=" border-b border-[#A1A1A1] h-[90px] md:h-[100px] lg:h-[123px]">
//           <Container>
// <div className="flex items-center justify-between">
//   <Logo />
//   <div className="hidden md:flex ml-14">
//     <Nav />
//   </div>
//   <button className=" inline-block md:hidden text-white">
//     <MenuIcon />
//   </button>
// </div>
//           </Container>
//           <HeroSection />
//         </div>
//       </Rectangle>
//     </header>
//   );
// }import React, { useEffect, useState, useRef } from "react";
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
  padding: 10px 0;
  background-color: #fff;
  box-shadow: ${({ visible }) =>
    visible ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none"};
  transform: translateY(${({ visible }) => (visible ? "0" : "-100%")});
  transition: transform 0.3s, box-shadow 0.3s;
  z-index: 1000;
  
`;

export default Header;
