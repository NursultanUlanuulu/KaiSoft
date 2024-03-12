import styled from "styled-components";
import { Container } from "../../style/style";
import { footerData } from "../../utils/constants/constants";

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <div className="flex justify-between">
          {footerData.map((section, index) => (
            <div key={index}>
              <H3>{section.title}</H3>
              <ul>
                {section.items.map((item, itemIndex) => (
                  <Li key={itemIndex}>
                    <img src={item.icon} alt={item.text} className="pr-3" />
                    <a href={item.href}>{item.text}</a>
                  </Li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  background-color: #f6f6f8;
  padding: 16px 0;
`;

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
  cursor: pointer;

  a {
    color: var(--grey, #999);
    text-decoration: none;
  }

  &:hover {
    opacity: 0.7;
  }
`;
