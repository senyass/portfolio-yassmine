import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import flowerDarkPink from "../assets/flower-dark-pink.png";

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

        <motion.img initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: false, amount: 0.3 }} src={flowerDarkPink} alt="Flower" className="absolute -top-50 -right-25 min-[500px]:-right-35 min-[500px]:-top-60 3xl:-right-65 3xl:-top-60 w-[160px] min-[500px]:w-[220px] rotate-30"/>
        <motion.img initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: false, amount: 0.3 }} src={flowerDarkPink} alt="Flower" className="absolute -top-45 -right-5 min-[500px]:-right-10 min-[500px]:-top-50 3xl:-right-35 3xl:-top-50 w-[120px] min-[500px]:w-[150px] rotate-320"/>
        <motion.img initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: false, amount: 0.3 }} src={flowerDarkPink} alt="Flower" className="absolute -top-30 -right-18 min-[500px]:-right-25 min-[500px]:-top-32 3xl:-right-55 3xl:-top-32 w-[80px] min-[500px]:w-[120px] rotate-300"/>
      <ProjectCard
       className="col-start-1 xl:-rotate-2"
        title="Project 1"
        description="Lorem ipsum dolor sit amet."
        image="https://via.placeholder.com/400x200"
        githubLink="https://github.com"
        websiteLink=""
        technologies={["Tech 1", "Tech 2", "Tech 3"]}
      />
      <ProjectCard
      className="xl:col-start-2 xl:rotate-1 "
        title="Project 1"
        description="Lorem ipsum dolor sit amet."
        image="https://via.placeholder.com/400x200"
        githubLink="https://github.com"
        websiteLink=""
        technologies={["Tech 1", "Tech 2", "Tech 3"]}
      />
      <ProjectCard
      className="col-start-1 xl:rotate-1"
        title="Project 1"
        description="Lorem ipsum dolor sit amet."
        image="https://via.placeholder.com/400x200"
        githubLink="https://github.com"
        websiteLink=""
        technologies={["Tech 1", "Tech 2", "Tech 3"]}
      />
      <ProjectCard
      className="xl:col-start-2 xl:-rotate-1"
        title="Project 1"
        description="Lorem ipsum dolor sit amet."
        image="https://via.placeholder.com/400x200"
        githubLink="https://github.com"
        websiteLink=""
        technologies={["Tech 1", "Tech 2", "Tech 3"]}
      />
      <motion.img initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: false, amount: 0.3 }} src={flowerDarkPink} alt="Flower" className="absolute -left-25 -bottom-30 min-[500px]:-left-35 min-[500px]:-bottom-40 3xl:-left-65 3xl:-bottom-35 w-[150px] min-[500px]:w-[220px] rotate-40"/>
      </div>
    </div>
    );
}

export default Projects;