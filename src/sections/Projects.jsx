import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <div className="text-green-black bg-olive/50 rounded-[30px] p-10 w-full mx-auto">
      <h1 className="text-[50px] font-bold mb-7">Projects</h1>
     

      <div className="relative max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-32 gap-x-30">
      <ProjectCard
      className="col-start-1 -rotate-2"
        title="Project 1"
        description="Lorem ipsum dolor sit amet."
        image="https://via.placeholder.com/400x200"
        githubLink="https://github.com"
        websiteLink=""
        technologies={["Tech 1", "Tech 2", "Tech 3"]}
      />
      <ProjectCard
      className="col-start-2 rotate-1 "
        title="Project 1"
        description="Lorem ipsum dolor sit amet."
        image="https://via.placeholder.com/400x200"
        githubLink="https://github.com"
        websiteLink=""
        technologies={["Tech 1", "Tech 2", "Tech 3"]}
      />
      <ProjectCard
      className="col-start-1 rotate-1"
        title="Project 1"
        description="Lorem ipsum dolor sit amet."
        image="https://via.placeholder.com/400x200"
        githubLink="https://github.com"
        websiteLink=""
        technologies={["Tech 1", "Tech 2", "Tech 3"]}
      />
      <ProjectCard
      className="col-start-2 -rotate-1"
        title="Project 1"
        description="Lorem ipsum dolor sit amet."
        image="https://via.placeholder.com/400x200"
        githubLink="https://github.com"
        websiteLink=""
        technologies={["Tech 1", "Tech 2", "Tech 3"]}
      />
      </div>
    </div>
    );
}

export default Projects;