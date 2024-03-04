import styled from "styled-components";
import { Container } from "../../style/style";
import { footerData } from "../../utils/constants/constants";

export default function Footer() {
  return (
    <div className="bg-[#F6F6F8] py-16">
      <Container>
        <div className="flex justify-between ">
          {footerData.map((section, index) => (
            <div key={index}>
              <H3>{section.title}</H3>
              <ul>
                {section.items.map((item, itemIndex) => (
                  <Li key={itemIndex}>
                    <img src={item.icon} alt={item.text} className=" pr-3"/>
                    {item.text}
                  </Li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

const H3 = styled.h3`
  color: #000;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 35px;
`;
const Li = styled.li`
  color: var(--grey, #999);
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 20px;
  display: flex;
`;
