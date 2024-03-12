import styled from "styled-components";
import Button from "../UI/Button";
import { Container } from "../../style/style";
import ser from "../../assets/images/AllServices/serv.png";
import { allServisesCard } from "../../utils/constants/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function AllServises() {
  return (
    <div className="w-full h-[700px] ">
      <Background>
        <Container>
          <div className="flex justify-between items-center lg:pt-24 ">
            <h2 className="text-[#FFF] text-xl text-center font-semibold sm:text-2xl md:text-3xl lg:text-4xl lg:font-bold lg:w-[540px]">
              Наши работы, на которых мы специализируемся
            </h2>
            <Button className="bg-[#4985FF] text-white hidden w-[200px] h-[45px] rounded-[30px] shadow-md lg:inline-block">
              Все услуги
            </Button>
          </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {allServisesCard.map((el) => (
              <SwiperSlide key={el.id}>
                <div className="flex justify-center">
                  <div className="mt-9  w-[350px]  mb-14 shadow-xl p-2 lg:mt-16">
                    <img src={ser} alt="" />
                    <h4 className="text-lg font-semibold text-[#000] mt-4">
                      <span className="text-[#4985FF]">{el.number}</span>
                      {el.title}
                    </h4>
                    <p className="text-[#999] text-base font-normal py-4">
                      {el.text}
                    </p>
                    <a
                      href="#"
                      className="text-[#4985FF] underline text-base font-medium"
                    >
                      Подробнее
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="text-center">
            <Button className="bg-[#4985FF] text-white inline-block w-[200px] h-[45px] rounded-[30px] shadow-md lg:hidden">
              Все услуги
            </Button>
          </div>
        </Container>
      </Background>
    </div>
  );
}

const Background = styled.div`
  background: linear-gradient(90deg, #504dc2 20.44%, #5f12d0 80.91%), #c4c4c4;
  /* height: 490px; */

  @media (min-width: 320px) {
    height: 290px;
    padding: 25px 0 25px;
  }
  @media (min-width: 1020px) {
    height: 490px;
  }
`;
