import { motion } from "framer-motion";

function WorkflowCard({color, title, description, className = ""}) {
    return (
        
      <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, margin: "-100px"  }}
          className={ `${className}`}>
            <div className={` text-center bg-${color}  min-[500px]:w-[475px] rounded-[50px] p-10 text-green-black shadow-md self-start`}>
                <h2 className="text-[20px] min-[500px]:text-[30px] font-bold mb-3">{title}</h2>
                <p className="text-[18px] min-[500px]:text-[24px]">{description}</p>
            </div>
        </motion.div>
    );
}

export default WorkflowCard;