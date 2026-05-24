import { Link } from "react-scroll";
import { motion } from "motion/react";

function Navbar() {
    return (
<motion.header className="fixed z-10000 top-1 left-4 right-4 rounded-[30px] min-[500px]:h-[80px] bg-pink/50 text-dark-green font-semibold flex items-center justify-center md:justify-between p-6 border-b-2 border-dark-green/40 shadow-md backdrop-blur-md">
        <Link to="landing" smooth={true} duration={500} className="hidden md:block text-[40px]  hover:text-dark-pink cursor-pointer hover:-translate-y-1 transition-all duration-300 flex item-center gap-2">Yassmine <span className="text-[30px] relative">✿</span></Link>
<div className="flex items-center justify-center gap-5 min-[500px]:gap-10 text-[16px] min-[500px]:text-[25px] min-[500px]:pr-5">
              <Link to="about" smooth={true} duration={500} className="hover:text-dark-pink cursor-pointer hover:-translate-y-1 transition-all duration-300">ABOUT ME</Link>
          <Link to="workflow" smooth={true} duration={500} className="hover:text-dark-pink cursor-pointer hover:-translate-y-1 transition-all duration-300">WORKFLOW</Link>
          <Link to="projects" smooth={true} duration={500} className="hover:text-dark-pink cursor-pointer hover:-translate-y-1 transition-all duration-300">PROJECTS</Link>
        </div>
      </motion.header> 
      )
}

export default Navbar