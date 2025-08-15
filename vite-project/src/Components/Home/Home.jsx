import Hero from "../../assets/hero.png"; 

const Home = () => {
  return (
    <div
      id="Home"
      className="flex flex-col-reverse md:flex-row items-center justify-between w-full px-6 md:px-12 lg:px-20 py-10 md:py-20 text-black"
    >
      {/* Left Content */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-4 md:space-y-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tighter">
          Hello, I'm Zubia Ghulamullah
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
          A passionate Software Engineering Student skilled in Front-End Development with a knack
          for crafting beautiful, functional, and high-performing digital experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start mt-4">
          <button
            className="bg-[#7fc3ff] text-black font-semibold rounded-3xl px-4 py-2 text-sm sm:text-base hover:opacity-85 hover:scale-105 duration-300"
            onClick={() => {
              window.location.href = "#Contact";
            }}
          >
            Contact Me
          </button>
          <button
            className="bg-[#7fc3ff] text-black font-semibold rounded-3xl px-4 py-2 text-sm sm:text-base hover:opacity-85 hover:scale-105 duration-300"
            onClick={() => {
              window.location.href = "#Projects";
            }}
          >
            View Projects
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img
          src={Hero}
          alt="hero"
          className="max-w-120 h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Home;
