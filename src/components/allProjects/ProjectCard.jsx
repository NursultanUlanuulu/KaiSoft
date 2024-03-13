function ProjectCard({ image, title, subTitle }) {
  return (
    <>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden h-[300px] w-[350px] mb-12">
        <img src={image} alt="" className="w-full h-48 object-cover" />
        <div className="p-6">
          <p className="text-xl font-semibold mb-2">{title}</p>
          <p className="text-sm text-gray-600 mb-4">{subTitle}</p>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
