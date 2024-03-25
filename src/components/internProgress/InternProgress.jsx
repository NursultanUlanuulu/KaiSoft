import { useTranslation } from "react-i18next";
import { Container } from "../../style/style";

const InternProgress = () => {
  const { t } = useTranslation(["home"]);
  return (
    <div className="bg-gradient-to-br from-purple-500 to-indigo-600 py-12">
      <Container>
        <h2 className="md:text-center text-2xl lg:text-start md:text-4xl font-extrabold text-white mb-8">
          {t("Процесс стажировки")}
        </h2>
        <div className="md:flex md:justify-center md:flex-wrap lg:flex-nowrap md gap-8">
          <div className="md:w-[310px] bg-gradient-to-r from-purple-700 to-indigo-700 text-white px-6 py-4 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <h3 className="text-lg md:text-2xl font-semibold mb-2">
              {t("СТАЖИРОВКА")}
            </h3>
            <p className="text-sm">
              {t(
                "Наши программы стажировок предоставляют студентам возможность погружения в мир IT. Обучение, ориентированное на практику, помогает первоначальному приобретению навыков. Неоплачиваемые реальные проекты."
              )}
            </p>
          </div>
          <div className="my-4 md:w-[310px] bg-gradient-to-r from-purple-700 to-indigo-700 text-white px-6 py-4 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 ">
            <h3 className="text-lg md:text-2xl font-semibold mb-2">
              {" "}
              {t("ПРОЕКТЫ")}
            </h3>
            <p className="text-sm">
              {t(
                "После стажировки студенты приступают к участию в наших неоплачиваемых реальных проектах. Это позволяет им применить знания в реальных рабочих условиях, расширяя свой опыт."
              )}
            </p>
          </div>
          <div className=" md:w-[310px] bg-gradient-to-r from-purple-700 to-indigo-700 text-white px-6 py-4 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <h3 className="text-lg md:text-2xl font-semibold mb-2">
              {t("ТРУДОУСТРОЙСТВО")}
            </h3>
            <p className="text-sm">
              {t(
                "Успешное завершение этапа проектов открывает двери к трудоустройству. Мы гордимся тем, что наши выпускники становятся ценными членами нашей команды. Этот цикл создан для поддержки и развития талантливых людей, вносящих свой вклад в нашу компанию."
              )}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default InternProgress;
