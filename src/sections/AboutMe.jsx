import selfieYassmine from '../assets/selfie-yassmine.jpg';
import darkPinkFlower from '../assets/flower-dark-pink.png';
import lightPinkFlower from '../assets/flower-light-pink.png';

function AboutMe() {
  return (
    <div className="w-full max-w-[100%] px-4">
      <div className="bg-olive/60 mt-6 rounded-[80px] px-10 py-12">
        <h1 className="py-2 px-10 text-green-black font-bold text-[50px] border-b-1 border-dark-green">About <span className="text-dark-pink text-[52px]">Me</span></h1>
        
        <div className="pt-10  grid grid-cols-1 md:grid-cols-[360px_1fr] items-center gap-15">
          <div className="relative">
            <img src={darkPinkFlower} alt="flower" className="absolute top-[-60px] right-[-70px] w-[150px] rotate-350" />
            <img src={darkPinkFlower} alt="flower" className="absolute bottom-[-30px] left-[-20px] w-[80px] rotate-100" />
            <img src={lightPinkFlower} alt="flower" className="absolute top-[-90px] right-[-50px] w-[200px] rotate-50" />
            <img src={selfieYassmine} alt="Yassmine" className="w-[400px] rounded-[10%] border-4 border-dark-green" />
          </div>
          <p className=" text-justify text-[25px]  md:text-[30px] md:leading-[150%] lg:text-[35px] lg:pr-20">Initially inspired by my dad, who also works in tech, I grew up curious about software and eventually chose to pursue <span className="font-semibold text-dark-pink">Software Engineering</span> at the University of Ottawa. Since then, I’ve gained experience through roles at <span className="font-semibold text-dark-pink">Nokia</span> and <span className="font-semibold">Innovation, Science and Economic Development Canada</span> <span className="font-semibold text-dark-pink">(ISED)</span>, while also working on personal and club projects. I especially enjoy the creative side of tech, designing and building things that feel interactive, personal, and fun to use.</p>
        </div>
      
      </div>
    </div>
  );
}

export default AboutMe;