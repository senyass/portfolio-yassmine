import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import flowerDarkPink from "../assets/flower-dark-pink.png";
import hairdresser from "../assets/hairdresser.jpg";
import memoryGame from "../assets/memory-game.jpeg";
import ecommerce from "../assets/ecommerce.png";
import analytics from "../assets/analytics.jpeg";

function Projects() {
  return (
    <div className="text-green-black bg-olive/50 rounded-[30px] p-10 pb-15 w-full mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-[40px] min-[500px]:text-[50px] font-bold mb-7"
      >
        Projects
      </motion.h1>

<div className="relative max-w-[1400px] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-y-20 xl:gap-y-32 gap-x-30">

        <motion.img initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: false, amount: 0.3 }} src={flowerDarkPink} alt="Flower" className="absolute -top-50 -right-25 min-[500px]:-right-35 min-[500px]:-top-60 min-[1770px]:-right-65 min-[1770px]:-top-60 w-[160px] min-[500px]:w-[220px] rotate-30"/>
        <motion.img initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: false, amount: 0.3 }} src={flowerDarkPink} alt="Flower" className="absolute -top-45 -right-5 min-[500px]:-right-10 min-[500px]:-top-50 min-[1770px]:-right-35 min-[1770px]:-top-50 w-[120px] min-[500px]:w-[150px] rotate-320"/>
        <motion.img initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: false, amount: 0.3 }} src={flowerDarkPink} alt="Flower" className="absolute -top-30 -right-18 min-[500px]:-right-25 min-[500px]:-top-32 min-[1770px]:-right-55 min-[1770px]:-top-32 w-[80px] min-[500px]:w-[120px] rotate-300"/>
      <ProjectCard
       className="col-start-1 xl:-rotate-2"
        title="Service Site"
        description="Coming soon!"
        image={hairdresser}
        githubLink="https://github.com"
        technologies={["Tech 1", "Tech 2", "Tech 3", "Tech 4"]}
      />
      <ProjectCard
      className="xl:col-start-2 xl:rotate-1 "
        title="Memory Game"
        description="Coming soon!"
        image={memoryGame}
        githubLink="https://github.com"
        technologies={["Tech 1", "Tech 2", "Tech 3"]}
      />
      <ProjectCard
      className="col-start-1 xl:rotate-1"
        title="E-commerce Site"
        description="Coming soon!"
        image={ecommerce}
        githubLink="https://github.com"
        technologies={["Tech 1", "Tech 2", "Tech 3", "Tech 4", "Tech 5"]}
      />
      <ProjectCard
      className="xl:col-start-2 xl:-rotate-1"
        title="Analytics Site"
        description="Coming soon!"
        image={analytics}
        githubLink="https://github.com"
        technologies={["Tech 1", "Tech 2", "Tech 3", "Tech 4"]}
      />
      <motion.img initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: false, amount: 0.3 }} src={flowerDarkPink} alt="Flower" className="absolute -left-25 -bottom-30 min-[500px]:-left-35 min-[500px]:-bottom-40 min-[1770px]:-left-65 min-[1770px]:-bottom-35 w-[150px] min-[500px]:w-[220px] rotate-40"/>
      </div>
    </div>
    );
}

export default Projects;