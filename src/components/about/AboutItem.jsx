import { useTranslation } from "react-i18next"
import outsourcing from "../../assets/images/about/outsourcing.jpg"
import consulting from "../../assets/images/about/consulting.jpg"
import outstaff from "../../assets/images/about/outstaff.jpg"

const AboutItem = () => {
  const { t } = useTranslation(["home"])
  return (
    <div className="mt-9  sm:flex sm:flex-col sm:items-center md:flex-row md:flex-wrap md:justify-center md:gap-2 lg:mt-[70px] lg:flex justify-between ">
      <div className="mb-5 pb-4 flex flex-col items-center shadow-xl  rounded-xl sm:flex-row md:flex-col md:h-full lg:justify-between lg:w-[315px]">
        <div className="">
          <img
            src={outstaff}
            className=" md:h-[184px] md:w-[350px] rounded-tr-xl rounded-tl-xl object-cover aspect-[3/2]"
            alt="Project"
          />
        </div>
        <div className="w-full text-center pt-3 sm:w-[20rem] md:w-[19rem] md:text-cente sm:text-start lg:text-start ">
          <h1 className="text-[#000] md:text-xl font-semibold">Out staff</h1>
          <h1 className="text-[#999] md:text-lg font-normal">
            {t(
              "Наша компания предоставляет квалифицированных специалистов для вашей команды, облегчая процесс подбора и улучшая вашу операционную эффективность.",
            )}
          </h1>
        </div>
      </div>
      <div className="mb-5 pb-4 flex flex-col items-center shadow-xl  rounded-xl sm:flex-row md:flex-col md:h-full lg:justify-between lg:w-[315px]">
        <div className="">
          <img
            src={outsourcing}
            className=" md:h-[184px] md:w-[350px] rounded-tr-xl rounded-tl-xl object-cover aspect-[3/2]"
            alt="Project"
          />
        </div>
        <div className="w-full text-center pt-3 sm:w-[20rem] md:w-[19rem] md:text-cente sm:text-start lg:text-start ">
          <h1 className="text-[#000] md:text-xl font-semibold">Outsource</h1>
          <h1 className="text-[#999] md:text-lg font-normal">
            {t(
              "Мы предоставляем высококачественные аутсорсинговые услуги, позволяя вам сосредоточиться на стратегически важных аспектах вашего бизнеса.",
            )}
          </h1>
        </div>
      </div>
      <div className="mb-5 pb-4 flex flex-col items-center shadow-xl  rounded-xl sm:flex-row md:flex-col md:h-full lg:justify-between lg:w-[315px]">
        <div className="">
          <img
            src={consulting}
            className=" md:h-[184px] md:w-[350px] rounded-tr-xl rounded-tl-xl object-cover aspect-[3/2]"
            alt="Project"
          />
        </div>
        <div className="w-full text-center pt-3 sm:w-[20rem] md:w-[19rem] md:text-cente sm:text-start lg:text-start ">
          <h1 className="text-[#000] md:text-xl font-semibold">Consulting</h1>
          <h1 className="text-[#999] md:text-lg font-normal">
            {t(
              "Мы предлагаем консультационную поддержку, помогая вам разрабатывать и внедрять успешные стратегии в области IT, соответствующие вашим бизнес-целям.",
            )}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default AboutItem
