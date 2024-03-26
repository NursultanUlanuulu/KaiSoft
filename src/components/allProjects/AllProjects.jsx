import { Container } from "../../style/style";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { allProjects } from "../../utils/constants/constants";
import ProjectCard from "./ProjectCard";
import { useTranslation } from "react-i18next";

export default function AllProjects() {
  const { t } = useTranslation(["home"]);
  return (
    <section id="projects">
      <div className="bg-[#F6F6F8] mt-[5rem] py-9">
        <Container>
          <div className=" ">
            <div>
              <h2 className="text-center mb-10 text-[#000] text-xl font-semibold sm:text-2xl sm:font-bold md:text-3xl lg:text-4xl lg:font-bold">
                {t("Наши проекты")}
              </h2>
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
