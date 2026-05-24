import selfieYassmine from '../assets/selfie-yassmine.jpg';
import darkPinkFlower from '../assets/flower-dark-pink.png';
import lightPinkFlower from '../assets/flower-light-pink.png';
import { motion } from "motion/react"

function AboutMe() {
  return (

    <div className="w-full max-w-[1500px] px-4 text-green-black justify-center mx-auto ">
      <div className="bg-olive/60 mt-6 rounded-[50px]  min-[500px]:rounded-[80px] pt-4 pb-10 2xl:py-14  px-5 min-[500px]:px-10  border-4 border-dashed border-dark-green  hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)] transition-all  hover:scale-105 duration-300">
        <h1 className="py-2 px-10  font-bold  text-[28px] min-[500px]:text-[40px] border-b-1 border-dark-green">ABOUT <span className="text-dark-pink text-[28] min-[500px]:text-[42px]">ME</span></h1>

        <div className="pt-6  grid grid-cols-1 md:grid-cols-[360px_1fr] items-center gap-5 lg:gap-15">
          <div className="relative flex flex-col items-center">
            <motion.img initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false, amount: 0.3 }} src={darkPinkFlower} alt="flower" className="absolute  top-[-40px] min-[500px]:top-[-60px] right-[-10px]  min-[500px]:right-[-20px] lg:right-[-70px] w-[90px] min-[500px]:w-[150px] rotate-350" />
            <motion.img initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false, amount: 0.3 }} src={darkPinkFlower} alt="flower" className="absolute bottom-[50px] min-[500px]:bottom-[70px] left-[20px] lg:left-[-20px]  w-[70px] min-[500px]:w-[80px] rotate-100" />
            <motion.img initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false, amount: 0.3 }} src={lightPinkFlower} alt="flower" className="absolute top-[-50px] min-[500px]:top-[-90px] right-[0px] min-[500px]:right-[-10px] lg:right-[-50px] w-[120px] min-[500px]:w-[200px] rotate-50" />
            <img src={selfieYassmine} alt="Yassmine" className=" w-[180px] min-[500px]:w-[320px] rounded-[10%] border-4 border-dark-green" />
            
            <p className="font-bold text-[20px] min-[500px]:text-[28px] mt-5 text-center">YASSMINE SENOUCI</p>
            <p className="text-[20px] min-[500px]:text-[28px] opacity-70 tracking-widest">ID: SEG-2026</p>

          </div>
          <ul className="grid grid-cols-2 gap-y-3 min-[500px]:gap-y-7 text-[18px] min-[500px]:text-[24px] lg:text-[30px] leading-[130%]">
            <li>
              <p className="text-dark-pink font-bold text-[15px] min-[500px]:text-[20px] uppercase">Program</p>
              <p>Software Engineering</p>
            </li>

            <li>
              <p className="text-dark-pink font-bold text-[15px] min-[500px]:text-[20px] uppercase">Institution</p>
              <p>University of Ottawa</p>
            </li>

            <li>
              <p className="text-dark-pink font-bold text-[15px] min-[500px]:text-[20px] uppercase">Experience</p>
              <p>Nokia, ISED</p>
            </li>

            <li>
              <p className="text-dark-pink font-bold text-[15px] min-[500px]:text-[20px] uppercase">Status</p>
              <p>Back in school :)</p>
            </li>

            <li className="col-span-2">
              <p className="text-dark-pink font-bold text-[15px] min-[500px]:text-[20px] uppercase">Contact</p>
              <a href="mailto:yseno102@uottawa.ca" className="hover:text-dark-pink transition-colors duration-300">
                yseno102@uottawa.ca
              </a>
            </li>

            <li className="col-span-2">
              <p className="text-dark-pink font-bold text-[15px] min-[500px]:text-[20px] uppercase">Interests & Inspiration</p>
              <p>Inspired by my dad’s work in tech, I grew up curious about software. I love the creative side of tech and building fun, interactive projects.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;