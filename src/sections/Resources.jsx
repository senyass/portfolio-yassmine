import ResourceCard from "../components/ResourceCard";
import nngLogo from "../assets/nng-logo.png";
import brightspaceLogo from "../assets/brightspace-logo.png";
import picnicBlanketPattern from "../assets/pink-picnic.png";

function Resources() {
  return (
  <div className="text-green-black py-30 mt-30 bg-pink/50   p-20 mx-auto flex flex-col items-center" style={{ backgroundImage: `linear-gradient(rgba(248, 248, 228, 0.53)), url(${[picnicBlanketPattern]})`, backgroundSize: 'cover', backgroundPosition: 'center',}}>
        <h2 className="text-[50px] font-semibold mb-15">Current learning resources ✿</h2>
        
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
      </div>
  );
}

export default Resources;