import { Link } from 'react-scroll';
import './App.css';
import AboutMe from './sections/AboutMe';
import LandingPage from './sections/LandingPage';
import Workflow from './sections/Workflow';
import Projects from './sections/Projects';
import Resources from './sections/Resources';
import Navbar from './components/Navbar';
import { motion, useScroll, useMotionValueEvent } from "motion/react"
import { use, useState } from "react"
import { i } from 'framer-motion/client';

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
     <Navbar />


      {/* Sections */}
      <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.3 }}
          id="landing"
           className="min-h-screen pt-20 px-5 md:px-20">
        <LandingPage />
      </motion.section>

      <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.3 }}
          id="about"
         className="min-h-screen pt-10 px-5 md:px-20">
        <AboutMe />
      </motion.section>

      <section id="workflow" className="min-h-screen pt-30 px-5 md:px-20">
        <Workflow />
      </section>

      <motion.section id="resources" className="min-h-screen pt-20">
        <Resources />
      </motion.section>


      <section id="projects" className="min-h-screen pt-20 px-5 md:px-20">
        <Projects />
      </section>
      
    </main>
  )
}

export default App
