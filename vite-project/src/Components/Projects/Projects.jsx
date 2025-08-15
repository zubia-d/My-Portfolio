
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className=" md:p-24 pb-0 text-white text-center wrap w-full ">
      <h1 className="text-2xl md:text-4xl text-black font-bold">My Recent Work</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Netflix Clone"
          main="Built a Netflix clone using HTML and CSS, helped alot in learning the basics of web development and understanding how to structure a website."
          demoLink="https://clone-html-css.netlify.app/"
          codeLink="https://github.com/zubia-d/Netflix-Clone.git"
        />
        <ProjectCard
          title="Calculator"
          main="A simple calculator app built with HTML, CSS, and JavaScript. It performs basic arithmetic operations and has a user-friendly interface."
          demoLink="https://pinky-calculator.netlify.app/"
          codeLink="https://github.com/zubia-d/Calculator-App.git"
        />
        <ProjectCard
          title="To-Do App"
          main="A simple To-Do List application built with HTML, CSS and JavaScript. It allows users to add, remove, and mark tasks as completed. "
          demoLink="https://to-do-list-app-project-js.netlify.app/"
          codeLink=""
        />
        <ProjectCard
          title="Tik Tak Toe Game"
          main="A classic Tic Tac Toe game built with JavaScript. It allows two players to play against each other, with a simple and intuitive interface. It includes features like win detection and a reset button."
          demoLink="https://tik-tac-toe-game-js.netlify.app/"
          codeLink="https://github.com/zubia-d/Tik-Tac-Toe-game.git"
        />
        
        <ProjectCard
          title="World Atlas App"
          main="A World Atlas application built with React. It provides information about countries, including their flags, capitals, and population. The app fetches data from an REST API and displays it in a user-friendly manner.It also includes a search feature to find specific countries, and a filter to view countries by region, ascending or descending button with responsive layout."
          demoLink="https://zubia-d.github.io/World-Atlas---React-Project"
          codeLink="https://github.com/zubia-d/World-Atlas---React-Project.git"
        />
        

      </div>
    </div>
  );
};

export default Projects;