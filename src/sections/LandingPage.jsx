import studentGif from '../assets/student-green.gif';
import yassmineDoodle from '../assets/yassmine-doodle.png';
import flowerGif from '../assets/animated-pink-flowers.gif';
import computerDoodle from '../assets/computer-doodle.png';
import errorMessageDoodle from '../assets/error-message-doodle.png';
import { motion, useScroll, useMotionValueEvent } from "motion/react"


function LandingPage() {
  return (
  
   <div className="min-h-screen flex flex-col justify-center items-center -z-100"> 
        <div className="relative">
         
          <h1 className="font-bold text-pink drop-shadow-[5px_5px_0px_rgba(130,130,90,0.5)] text-pink font-bold text-[70px] min-[500px]:text-[80px] lg:text-[120px] 2xl:text-[160px] text-center min-[500px]:mt-2 mb-10 lg:mt-8 -translate-y-20 min-[500px]:translate-y-0">P<span className="text-[55px] min-[500px]:text-[60px] lg:text-[100px] 2xl:text-[120px]">✿</span>rtfolio</h1>
          <motion.img  initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: false, amount: 0.3 }} src={flowerGif} alt="Animated Pink Flowers" className="absolute -top-20 -right-11 min-[500px]:top-[5px] min-[500px]:right-[-75px] lg:top-[40px] lg:right-[-80px] 2xl:right-[-100px] w-[75px] min-[500px]:w-[100px] lg:w-[120px] 2xl:w-[160px] h-auto" />
          <motion.img  initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: false, amount: 0.3 }} src={flowerGif} alt="Animated Pink Flowers" className="absolute -top-20 -left-12 min-[500px]:top-[5px] min-[500px]:left-[-75px] lg:top-[40px] lg:left-[-90px] 2xl:left-[-115px] rotate-240 w-[75px] min-[500px]:w-[100px] lg:w-[120px] 2xl:w-[160px] h-auto" />
        
        </div>
      
      <img src={studentGif} alt="Software Engineering Student Animated Text" className="w-[950px] scale-120 min-[500px]:scale-100 2xl:w-[1000px] -mt-10 xl:-mt-100 h-auto -translate-x-2 -translate-y-50 min-[500px]:-translate-y-45 lg:translate-y-0 -z-10 mb-2 lg:mb-0" />
      <div className="relative">
        <img src={yassmineDoodle} alt="Doodle of myself (Yassmine Senouci)" className="w-[270px] lg:w-[300px] 2xl:w-[400px] h-auto -mt-90 min-[500px]:-mt-110 lg:-mt-120 ml-10 lg:ml-20" />
        <motion.img 
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.3 }}
          src={computerDoodle} alt="Doodle of a computer" className=" absolute hidden min-[500px]:block w-[120px] lg:w-[180px] 2xl:w-[200px] top-[-380px] lg:top-[-350px] left-[-110px] lg:left-[-200px] h-auto rotate-[-10deg]" />
        <motion.img 
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.3 }}
          src={errorMessageDoodle} alt="Doodle of an error message" className="absolute hidden min-[500px]:block w-[110px] lg:w-[190px] 2xl:w-[190px] top-[-380px] lg:top-[-350px] right-[-110px] lg:right-[-250px] h-auto rotate-[8deg]" />
      </div>
    </div>

  );
}

export default LandingPage;