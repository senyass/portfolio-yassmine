function ProjectCard({ title, description, image, githubLink, websiteLink, technologies, className }) {
    const tapeStyles = [
    "bg-pink/50 -rotate-2",
    "bg-olive/40 -rotate-1",
    "bg-dark-pink/40 -rotate-1",
    "bg-pink/40 rotate-2",
    ];
    return (
        <div className={`patrick-hand bg-beige  text-dark-green p-7 pb-10 shadow-xl text-center hover:-translate-y-3 hover:rotate-0 transition-all duration-300 ${className} `}>
            <img src={image} alt={title} className="w-full h-80 object-cover border "/>
            <div className="p-4">
                <h3 className="text-[40px] font-semibold border-b border-pink pb-2">{title}</h3>
                <p className="text-[30px] mt-5">{description}</p>
                <div className="my-7 flex flex-wrap justify-center gap-4 text-[25px]">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className={`inline-block px-4 py-1  font-semibold shadow-sm  ${
                            tapeStyles[index % tapeStyles.length]
                            }`}
                        >
                        {tech}
                    </span>
                    ))}
                </div>
                <div className="flex justify-center gap-4 mt-6 text-[25px]">
                    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="hover:text-dark-pink">View GitHub</a>
                    <a href={websiteLink} target="_blank" rel="noopener noreferrer" className="hover:text-dark-pink">View Project</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;