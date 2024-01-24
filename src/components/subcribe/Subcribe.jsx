import styled from "styled-components";
import { Container } from "../../style/style";

export default function Subcribe() {
  return (
    <div className="pb-28 pt-12 ">
      <Container>
        <form className="border-t-2 border-[#E0E0E0] pt-16">
          <h4 className="text-center text-[#000] text-lg font-semibold mb-4">
            Подпишитесь на нашу рассылку
          </h4>
          <p className="text-[#999] text-center text-base font-normal">
            Полезные статьи, акции, новости - получите все это сейчас!
          </p>
          <div className="text-center my-8">
            <Input type="text" placeholder="Ваш e-mail" className=" px-4" />
            <Submit type="submit" value="Подписаться" />
          </div>
          <p className="text-center text-sm font-normal">
            Мы не шлем спам, и передаем никому ваши данные.
          </p>
        </form>
      </Container>
    </div>
  );
}

const Input = styled.input`
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  border: 1px solid var(--f-2-f-2-f-2, #f2f2f2);
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(111, 111, 111, 0.25);
  outline: none;
  width: 300px;
  height: 45px;
`;
const Submit = styled.input`
  border-radius: 0px 30px 30px 0px;
  background: var(--Accent, #4985ff);
  box-shadow: 0px 0px 10px 0px rgba(111, 111, 111, 0.25);
  width: 190px;
  height: 45px;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;
