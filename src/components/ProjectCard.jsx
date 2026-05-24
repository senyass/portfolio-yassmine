import { motion } from "framer-motion";

function ProjectCard({ title, description, image, githubLink, websiteLink, technologies, className }) {
    const tapeStyles = [
    "bg-pink/50 -rotate-2",
    "bg-olive/40 -rotate-1",
    "bg-dark-pink/40 -rotate-1",
    "bg-pink/40 rotate-2",
    ];
    return (
        <motion.div
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false, amount: 0.3 }}
className={`patrick-hand w-full max-w-[650px] mx-auto bg-beige text-dark-green p-5 sm:p-7 pb-1 sm:pb-10 shadow-xl text-center hover:-translate-y-3 hover:rotate-0 transition-all duration-300 ${className}`}        >
<img src={image} alt={title} className="w-full h-40 min-[500px]:h-52 sm:h-80 object-cover border" />
            <div className="p-4">
<h3 className="text-[25px] min-[500px]:text-[32px] sm:text-[40px] font-semibold border-b border-pink min-[500px]:pb-2">{title}</h3>
<p className="text-[20px] min-[500px]:text-[24px] sm:text-[30px] mt-1 min-[500px]:mt-5">{description}</p>
<div className="my-2 min-[500px]:my-7 flex flex-wrap justify-center gap-4 text-[13px] min-[500px]:text-[25px]">                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className={`inline-block px-3 min-[500px]:px-4 py-1  font-semibold shadow-sm  ${
                            tapeStyles[index % tapeStyles.length]
                            }`}
                        >
                        {tech}
                    </span>
                    ))}
                </div>
<div className="flex flex-wrap justify-center gap-4 mt-6 text-[18px] min-[500px]:text-[25px]">                    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="hover:text-dark-pink transition-colors duration-300">View GitHub</a>
                    <a href={websiteLink} target="_blank" rel="noopener noreferrer" className="hover:text-dark-pink transition-colors duration-300">View Project</a>
                </div>
            </div>
        </motion.div>
    );
}

export default ProjectCard;