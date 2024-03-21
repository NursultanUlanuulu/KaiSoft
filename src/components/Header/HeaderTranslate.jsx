import i18n from "../../i18n/i18n";
import LanguageIcon from "@mui/icons-material/Language";

const HeaderTranslate = () => {
  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };
  return (
    <div>
      <div>
        <LanguageIcon />
        <select onChange={handleLanguageChange}>
          <option value="en">En</option>
          <option value="ru">Ru</option>
        </select>
      </div>
    </div>
  );
};

export default HeaderTranslate;
