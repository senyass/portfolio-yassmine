import studentGif from '../assets/student-green.gif';
import yassmineDoodle from '../assets/yassmine-doodle.png';
import flowerGif from '../assets/animated-pink-flowers.gif';

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center -z-100"> 
        <div className="relative">
          <h1 className="font-bold
text-pink
drop-shadow-[5px_5px_0px_rgba(130,130,90,0.5)] text-pink font-bold text-[160px] text-center mt-8  ">P<span className="text-[120px] ">✿</span>rtfolio</h1>
          <img src={flowerGif} alt="Animated Pink Flowers" className="absolute  top-[20px] right-[-80px]  w-[120px] h-auto" />
          <img src={flowerGif} alt="Animated Pink Flowers" className="absolute  top-[20px] left-[-90px] rotate-240 w-[120px] h-auto" />
        </div>
      <img src={studentGif} alt="Software Engineering Student Animated Text" className="w-[1000px] h-auto -mt-90 -z-10" />
      <img src={yassmineDoodle} alt="Doodle of myself (Yassmine Senouci)" className="w-[450px] h-auto -mt-120 ml-20" />

    </div>

  );
}

export default LandingPage;