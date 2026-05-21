import { Link } from 'react-scroll';
import './App.css';
import AboutMe from './sections/AboutMe';
import LandingPage from './sections/LandingPage';
import Workflow from './sections/Workflow';
import Projects from './sections/Projects';

function App() {
  return (
    <main>
      {/* Navbar */}
      <nav className="fixed z-10000 top-0 right-0 left-0 h-[80px] bg-pink/50 text-dark-green font-semibold flex justify-between items-center p-6 border shadow-sm ">
        <p className="text-[40px]">Yassmine</p>
        <div className="flex items-center gap-10 pr-5 text-[25px] ">
          <Link to="about" smooth={true} duration={500} className="hover:text-dark-pink cursor-pointer">ABOUT ME</Link>
          <Link to="workflow" smooth={true} duration={500} className="hover:text-dark-pink cursor-pointer">WORKFLOW</Link>
          <Link to="projects" smooth={true} duration={500} className="hover:text-dark-pink cursor-pointer">PROJECTS</Link>
        </div>
      </nav>

      {/* Sections */}
      <section id="landing" className="min-h-screen pt-20 px-5 md:px-20">
        <LandingPage />
      </section>

      <section id="about" className="min-h-screen pt-20 px-5 md:px-20">
        <AboutMe />
      </section>

      <section id="workflow" className="min-h-screen pt-20 px-5 md:px-20">
        <Workflow />
      </section>

      <section id="projects">
        <Projects />
      </section>
      
    </main>
  )
}

export default App
