const ProjectCard = ({ title, main, demoLink, codeLink }) => {
  return (
    <div className="p-4 sm:p-10 lg:p-8 flex flex-col w-full sm:w-[22rem] bg-pink-200 shadow-xl hover:opacity-90 hover:scale-105 duration-300 rounded-2xl">
      
      {/* Title */}
      <h3 className="px-2 sm:px-4 text-black text-lg sm:text-xl md:text-2xl font-bold leading-snug">
        {title}
      </h3>

      {/* Description */}
      <p className="px-2 sm:px-4 text-black text-sm sm:text-base md:text-md leading-tight py-2">
        {main}
      </p>

      {/* Buttons */}
      <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row gap-2 sm:gap-4 px-2 sm:px-4">
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white py-2 px-3 text-xs sm:text-sm md:text-lg md:py-2 md:px-4 hover:bg-white hover:text-black font-semibold rounded-3xl bg-[#465697] text-center"
        >
          Demo
        </a>

        <a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white py-2 px-3 text-xs sm:text-sm md:text-lg md:py-2 md:px-4 hover:bg-white hover:text-black font-semibold rounded-3xl bg-[#465697] text-center"
        >
          Source Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
