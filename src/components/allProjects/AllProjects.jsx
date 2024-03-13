import { Container } from "../../style/style";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { allProjects } from "../../utils/constants/constants";
import ProjectCard from "./ProjectCard";

export default function AllProjects() {
  return (
    <section id="projects">
      <div className="bg-[#F6F6F8] mt-[9rem] py-9">
        <Container>
          <div className=" ">
            <div>
              <h2 className="text-center text-[#000] text-xl font-semibold sm:text-2xl sm:font-bold md:text-3xl lg:text-4xl lg:font-bold">
                Наши проекты
              </h2>
              <p className="text-center text-[#999] text-sm font-medium mt-3 sm:text-lg md:text-xl    lg:mt-12 mb-16">
                Lorem Ipsum - это текст-рыба, часто используемый в печати и
                вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов
                на латинице с начала XVI века.
              </p>
            </div>
            <div className="flex justify-between ">
              <Swiper
                slidesPerView={3}
                spaceBetween={10}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
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
                modules={[Autoplay]}
                className="mySwiper"
              >
                {allProjects.map(({ image, id, title, subTitle, dscr }) => (
                  <SwiperSlide key={id}>
                    <div className="flex justify-center items-center h-full">
                      <ProjectCard
                        image={image}
                        title={title}
                        subTitle={subTitle}
                        dscr={dscr}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
