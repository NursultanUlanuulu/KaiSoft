import { useState } from "react"
import { useTranslation } from "react-i18next"
import styled from "styled-components"
import { Container } from "../../style/style"
import { footerData } from "../../utils/constants/constants"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"

export function Footer() {
  const { t } = useTranslation("footer")
  const [showFAQs, setShowFAQs] = useState(footerData.map(() => false))

  const toggleFAQ = (index) => {
    const newFAQs = [...showFAQs]
    newFAQs[index] = !newFAQs[index]
    setShowFAQs(newFAQs)
  }

  return (
    <StyledFooter>
      <Container>
        <div className="lg:flex justify-between">
          {footerData.map((section, index) => (
            <div key={index}>
              <H3 className="hidden lg:block">{t(`${section.title}`)}</H3>
              <div
                className="w-full flex justify-between cursor-pointer lg:hidden"
                onClick={() => toggleFAQ(index)}
              >
                <ButtonStyle>{t(`${section.title}`)}</ButtonStyle>
                <Icon className="flex">
                  {showFAQs[index] ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  )}
                </Icon>
              </div>
              <Ul show={showFAQs[index]} className="lg:hidden">
                {showFAQs[index] &&
                  section.items.map((item, itemIndex) => (
                    <Li key={itemIndex}>
                      <img
                        src={item.icon}
                        alt={t(`${item.text}`)}
                        className="pr-3"
                      />
                      <a href={item.href}>{t(`${item.text}`)}</a>
                    </Li>
                  ))}
              </Ul>
              <ul className="hidden lg:inline-block">
                {section.items.map((item, itemIndex) => (
                  <Li key={itemIndex}>
                    <img
                      src={item.icon}
                      alt={t(`${item.text}`)}
                      className="pr-3"
                    />
                    <a href={item.href}>{t(`${item.text}`)}</a>
                  </Li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </StyledFooter>
  )
}

const StyledFooter = styled.div`
  background-color: #f6f6f8;
  padding: 16px 0;
`

const H3 = styled.h3`
  color: #000;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 35px;
`
const ButtonStyle = styled.button`
  color: #000;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 35px;
`

const Ul = styled.ul`
  opacity: ${(props) => (props.show ? "1" : "0")};
  max-height: ${(props) => (props.show ? "1000px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease, opacity 0.3s ease;
`

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
`

const Icon = styled.div`
  transition: transform 0.3s ease-in-out;
`
