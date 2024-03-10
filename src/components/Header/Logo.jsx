import logo from "../../assets/images/header/logo.png";

const Logo = () => {
  return (
    <div>
      <div className="w-[150px] lg:w-[200px]">
        <img src={logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Logo;
