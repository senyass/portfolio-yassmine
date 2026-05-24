import ResourceCard from "../components/ResourceCard";
import nngLogo from "../assets/nng-logo.png";
import brightspaceLogo from "../assets/brightspace-logo.png";
import picnicBlanketPattern from "../assets/pink-picnic.png";
import { motion } from "framer-motion";

function Resources() {
  return (
  <div className="text-green-black py-15 min-[500px]:py-30 mt-30 bg-pink/50  px-5  min-[500px]:px-20 mx-auto" style={{ backgroundImage: `linear-gradient(rgba(248, 248, 228, 0.53)), url(${[picnicBlanketPattern]})`, backgroundSize: 'cover', backgroundPosition: 'center',}}>
  <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false, amount: 0.3 }}
        className="flex flex-col items-center">
        <h2 className="text-[40px] min-[500px]:text-[50px] text-center font-semibold mb-15">Current learning resources ✿</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-30 w-full max-w-[900px] mx-auto  ">
    
          <ResourceCard
            title="NN/g UI Design Course"
            image={nngLogo}
            link="https://www.nngroup.com/articles/"
            className=""
          />
          <ResourceCard
            title="Analysis and Design of User Interfaces"
            image={brightspaceLogo}
            link="https://uottawa.brightspace.com/d2l/le/content/592979/Home"
            className=""
          />
        </div>
      </motion.div>
      </div>
  );
}

export default Resources;