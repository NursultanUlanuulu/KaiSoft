import { Container } from "../../style/style";
import nurs from "../../assets/images/team/nurs.jpg";
import erjan from "../../assets/images/team/erjan.jpg";
import chopa from "../../assets/images/team/chopa.jpg";
import bema from "../../assets/images/team/bema.jpg";
import mirlan from "../../assets/images/team/mirlan.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTranslation } from "react-i18next";

const people = [
  {
    name: "Cholponbek Esenbek Uulu",
    role: "CEO, Founder",
    imageUrl: chopa,
    linkedin: <LinkedInIcon sx={{ color: "#9ca3af", cursor: "pointer" }} />,
    git: <GitHubIcon sx={{ color: "#9ca3af", cursor: "pointer" }} />,
    LinkedinLink: "https://www.linkedin.com/in/cholponbek-esenbek-uulu/",
  },
  {
    name: "Mirlan Ipasov",
    role: "CTO, Advisor",
    imageUrl: mirlan,
    linkedin: <LinkedInIcon sx={{ color: "#9ca3af", cursor: "pointer" }} />,
    git: <GitHubIcon sx={{ color: "#9ca3af", cursor: "pointer" }} />,
    LinkedinLink: "https://www.linkedin.com/in/mirlan/",
    gitLink: "https://github.com/gantu",
  },
  {
    name: "Erjan Kurmanbekov",
    role: "Pyton-developer",
    imageUrl: erjan,
    linkedin: <LinkedInIcon sx={{ color: "#9ca3af", cursor: "pointer" }} />,
    git: <GitHubIcon sx={{ color: "#9ca3af", cursor: "pointer" }} />,
    LinkedinLink: "",
    gitLink: "https://github.com/erjan07",
  },
  {
    name: "Begimai Keldibekova",
    role: "Frontend-developer",
    imageUrl: bema,
    linkedin: <LinkedInIcon sx={{ color: "#9ca3af", cursor: "pointer" }} />,
    git: <GitHubIcon sx={{ color: "#9ca3af", cursor: "pointer" }} />,
    gitLink: "https://github.com/Begimai7",
    LinkedinLink: "https://www.linkedin.com/in/begimai-keldibekova/",
  },
  {
    name: "Nursultan Ulan Uulu",
    role: "Frontend-developer",
    imageUrl: nurs,
    linkedin: <LinkedInIcon sx={{ color: "#9ca3af", cursor: "pointer" }} />,
    git: <GitHubIcon sx={{ color: "#9ca3af", cursor: "pointer" }} />,
    gitLink: "https://github.com/UlanuuluNusultan",
    LinkedinLink: "https://www.linkedin.com/in/nursultan-ulan-uulu-479218288/",
  },
];
const Team = () => {
  const { t } = useTranslation(["home"]);
  return (
    <Container>
      <div className="bg-white pt-24 ">
        <div className="max-w-2xl">
          <h2 className="text-3xl mb-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("Наша команда")}
          </h2>
        </div>
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8">
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-y-16"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="items-center gap-x-6">
                  <img
                    className="w-full object-cover aspect-[3/2] rounded-3xl"
                    src={person.imageUrl}
                    alt="Picture"
                  />
                  <div>
                    <h3 className="text-xl mt-6 font-semibold leading-7 tracking-tight text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-base leading-7 text-[#4b5563]">
                      {person.role}
                    </p>
                    <div>
                      <div className="flex mt-6 w-14 justify-between">
                        <p>
                          <a href={person.gitLink}>{person.git}</a>
                        </p>
                        <p>
                          <a href={person.LinkedinLink}>{person.linkedin}</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Team;
