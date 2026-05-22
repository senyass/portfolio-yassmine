import WorkflowCard from "../components/WorkflowCard";
import darkPinkFlower from "../assets/flower-dark-pink.png";


function Workflow() {
  return (
    <div className="text-green-black">
      <h1 className="text-[50px] font-bold mb-3">Workflow</h1>
      <h2 className="text-[35px] font-medium mb-20">I'm definitely still growing in this area, but here is my current design process :)</h2>
      <div className="relative max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-32 gap-x-24 justify-items-center">
          <div>
            <img src={darkPinkFlower} alt="flower" className="absolute top-[-90px] left-[-40px] w-[200px]" />
            <WorkflowCard className="col-start-1 "
              color="pink/50"
              title="1. Inspiration & Research"
              description="I start by exploring Pinterest and similar works for inspiration, and then I research the best tools and technologies to bring my ideas to life."
            />
          </div>
          <WorkflowCard className="col-start-2 mt-60"
            color="olive/50"
            title="2. Design & Prototyping"
            description="I use Figma to create detailed designs and interactive prototypes, which help me visualize the user experience and gather feedback early on."
          />
          <WorkflowCard className="col-start-1"
            color="pink/50"
            title="3. Development"
            description="My current favourite tech stack includes React, Tailwind CSS, and Node.js, but I am always open to learning new technologies that can enhance my projects :p"
          />
          <div>
            <img src={darkPinkFlower} alt="flower" className="absolute bottom-[230px] right-[-80px] w-[250px] rotate-50 z-100" />

            <WorkflowCard className="col-start-2 mt-60"
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