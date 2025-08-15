import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Header/Navbar";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact"

function App() {
  return (
    <div className="bg-indigo-100">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;