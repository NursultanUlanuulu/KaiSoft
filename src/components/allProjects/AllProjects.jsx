// import code from "../../assets/images/allProjects/code.png";
import { Container } from "../../style/style";
import Button from "../UI/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { allProjects } from "../../utils/constants/constants";
export default function AllProjects() {
  return (
    <div className="bg-[#F6F6F8] mt-[9rem] py-9">
      <Container>
        <div className=" ">
          <div>
            <h2 className="text-center text-[#000] text-xl font-semibold sm:text-2xl sm:font-bold md:text-3xl lg:text-4xl lg:font-bold">
              Наши проекты
            </h2>
            <p className="text-center text-[#999] text-sm font-medium mt-3 sm:text-lg md:text-xl    lg:mt-12 mb-16">
              Lorem Ipsum - это текст-рыба, часто используемый в печати и
              вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на
              латинице с начала XVI века.
            </p>
          </div>
          <div className="flex justify-between ">
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
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {allProjects.map(({ image, id }) => (
                <SwiperSlide key={id}>
                  <div className="flex justify-center mb-10">
                    <img src={image} alt="" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="text-center mt-12 ">
            <Button className="bg-[#4985FF] text-white w-[200px] h-[45px] rounded-[30px] shadow-md">
              Все проекты
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
