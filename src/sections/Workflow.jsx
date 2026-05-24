import WorkflowCard from "../components/WorkflowCard";
import darkPinkFlower from "../assets/flower-dark-pink.png";
import arrowOne from "../assets/arrow1.png";
import arrowTwo from "../assets/arrow2.png";
import arrowThree from "../assets/arrow3.png";
import DrawnArrow from "../components/DrawnArrow";
import { motion } from "framer-motion";


function Workflow() {
  return (
    <div className="text-green-black">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false, amount: 0.3 }}>
        <h1 className="text-[40px] min-[500px]:text-[50px] font-bold mb-3">Workflow</h1>
        <h2 className="text-[25px] min-[500px]:text-[35px] font-medium mb-30">I'm still growing in this area, but here's my current design process so far :)</h2>
      </motion.div>
      <div className="relative max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-32 gap-x-24 justify-items-center">
        <div>
          <motion.img initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false, amount: 0.3 }}
            src={darkPinkFlower}
            alt="flower"
            className="absolute -top-10 min-[500px]:top-[-90px] left-[-40px] w-[120px] min-[500px]:w-[180px] lg:w-[200px] 2xl:left-[-20px]" />

          <WorkflowCard className="col-start-1 "
            color="pink/50"
            title="1. Inspiration & Research"
            description="I start by exploring Pinterest and similar works for inspiration, and then I research the best tools and technologies to bring my ideas to life."
          />
        </div>
        <DrawnArrow src={arrowOne} className="hidden lg:block absolute top-[12%] left-1/2 -translate-x-30 rotate-[10deg] w-[300px]" imgClassName="w-full" />



        <WorkflowCard className="lg:col-start-2 lg:mt-90"
          color="olive/50"
          title="2. Design & Prototyping"
          description="I use Figma to create detailed designs and interactive prototypes, which help me visualize the user experience and gather feedback early on."
        />
        <DrawnArrow src={arrowTwo} className="hidden lg:block absolute top-[35%] left-1/2 -translate-x-1/2 scale-x-[-1] w-[220px]" imgClassName="w-full" />
        <WorkflowCard className="col-start-1"
          color="pink/50"
          title="3. Development"
          description="My current favourite tech stack includes React, Tailwind CSS, and Node.js, but I am always open to learning new technologies that can enhance my projects :p"
        />
        <DrawnArrow src={arrowThree} className="hidden lg:block absolute top-[72%] 2xl:top-[74%] left-1/2 -translate-x-50 w-[300px]" imgClassName="w-full" />
        <div>
          <motion.img initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false, amount: 0.8 }} src={darkPinkFlower} alt="flower" className="absolute bottom-65 lg:bottom-[230px] -right-7 min-[500px]:-right-8 lg:right-[-80px] 2xl:right-[-50px] w-[120px] min-[500px]:w-[180px] xl:w-[250px] rotate-50 z-100" />

          <WorkflowCard className="lg:col-start-2 lg:mt-90"
            color="olive/50"
            title="4. Learning & Growth"
            description="I'm currently taking a UI design course to further improve my design skills and create even more polished and user-friendly interfaces. Take a look at the links below to see some of the resources I'm using to learn and grow in this area!"
          />
        </div>
      </div>

    </div>
  );
}

export default Workflow;