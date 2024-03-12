import PropTypes from "prop-types";

const AboutItem = ({ item }) => {
  return (
    <div className="mb-5 md:w-[350px] flex flex-col items-center sm:flex-row md:flex-col lg:flex-row lg:justify-between lg:items-center lg:h-[139px] ">
      <div className="border-2 border-[#E0E0E0] rounded-[50%]  w-[110px] h-[110px] p-2 mr-2">
        <div className="border-2 border-[#ec6408] p-3 rounded-[50%]  w-[90px] h-[90px]">
          <img
            src={item.image}
            className="w-full h-full object-cover p-2"
            alt="Project"
          />
        </div>
      </div>
      <div className="w-full text-center sm:w-[20rem] md:w-[16rem] md:text-center sm:text-start lg:text-start lg:mt-[60px]">
        <h1 className="text-[#000] md:text-xl font-semibold ">{item.title}</h1>
        <h1 className="text-[#999] md:text-lg font-normal">{item.discr}</h1>
      </div>
    </div>
  );
};

AboutItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    discr: PropTypes.string.isRequired,
  }).isRequired,
};

export default AboutItem;
