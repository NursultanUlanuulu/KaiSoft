import { Container } from "../../style/style";
import bg from "../../assets/images/header/bg.png";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "./Logo";
import Nav from "./Nav";
import HeroSection from "./HeroSection";

const Rectangle = styled.header`
  background-image: url(${bg});
  background-size: cover;
  background-position: center;

  @media (min-width: 320px) {
    height: 400px;
  }
  @media (min-width: 640px) {
    height: 500px;
  }
  @media (min-width: 768px) {
    height: 600px;
  }
  @media (min-width: 1024px) {
    height: 800px;
  }
`;

export default function Header() {
  return (
    <Rectangle>
      <div className=" border-b border-[#A1A1A1] h-[90px] md:h-[100px] lg:h-[123px]">
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
          <HeroSection />
        </Container>
      </div>
    </Rectangle>
  );
}
