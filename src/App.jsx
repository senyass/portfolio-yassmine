import { Link } from 'react-scroll';
import './App.css';
import AboutMe from './sections/AboutMe';
import LandingPage from './sections/LandingPage';
import Workflow from './sections/Workflow';
import Projects from './sections/Projects';
import Resources from './sections/Resources';
import { motion, useScroll, useMotionValueEvent } from "motion/react"
import { use, useState } from "react"

function App() {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0
    if (current >  previous && current > 250) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  return (
    <main>
      {/* Navbar */}
      <motion.header
        className="fixed z-10000 top-1 left-4 right-4 rounded-[30px] h-[80px] bg-pink/50 text-dark-green font-semibold flex justify-between items-center p-6 border-b-2 border-dark-green/40 shadow-md backdrop-blur-md"
       
      >
        
        <Link to="landing" smooth={true} duration={500} className="text-[40px]  hover:text-dark-pink cursor-pointer hover:-translate-y-1 transition-all duration-300 flex item-center gap-2">Yassmine <span className="text-[30px] relative top-[11px]">✿</span></Link>
        
        <div className="flex items-center gap-10 pr-5 text-[25px] ">
          <Link to="about" smooth={true} duration={500} className="hover:text-dark-pink cursor-pointer hover:-translate-y-1 transition-all duration-300">ABOUT ME</Link>
          <Link to="workflow" smooth={true} duration={500} className="hover:text-dark-pink cursor-pointer hover:-translate-y-1 transition-all duration-300">WORKFLOW</Link>
          <Link to="projects" smooth={true} duration={500} className="hover:text-dark-pink cursor-pointer hover:-translate-y-1 transition-all duration-300">PROJECTS</Link>
        </div>
      </motion.header>
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

      <section id="resources" className="min-h-screen pt-20">
        <Resources />
      </section>
      <section id="projects" className="min-h-screen pt-20 px-5 md:px-20">
        <Projects />
      </section>
      
    </main>
  )
}

export default App
