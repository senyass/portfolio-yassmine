import selfieYassmine from '../assets/selfie-yassmine.jpg';
import darkPinkFlower from '../assets/flower-dark-pink.png';
import lightPinkFlower from '../assets/flower-light-pink.png';

function AboutMe() {
  return (
    <div className="w-full max-w-[1600px] px-4 text-green-black justify-center mx-auto ">
      <div className="bg-olive/60 mt-6 rounded-[80px] p-10  border-4 border-dashed border-dark-green  hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)] transition-all  hover:scale-105 duration-300">
        <h1 className="py-2 px-10  font-bold text-[50px] border-b-1 border-dark-green">ABOUT <span className="text-dark-pink text-[52px]">ME</span></h1>

        <div className="pt-10  grid grid-cols-1 md:grid-cols-[360px_1fr] items-center gap-15">
          <div className="relative flex flex-col items-center">
            <img src={darkPinkFlower} alt="flower" className="absolute top-[-60px] right-[-70px] w-[150px] rotate-350" />
            <img src={darkPinkFlower} alt="flower" className="absolute bottom-[70px] left-[-20px] w-[80px] rotate-100" />
            <img src={lightPinkFlower} alt="flower" className="absolute top-[-90px] right-[-50px] w-[200px] rotate-50" />
            <img src={selfieYassmine} alt="Yassmine" className="w-[400px] rounded-[10%] border-4 border-dark-green" />
            <p className="font-bold text-[28px] mt-5 text-center">YASSMINE SENOUCI</p>
            <p className="text-[28px] opacity-70 tracking-widest">ID: SEG-2026</p>

          </div>
          <ul className="grid grid-cols-2 gap-x-14 gap-y-7 text-[30px] md:text-[34px] leading-[130%]">
            <li>
              <p className="text-dark-pink font-bold text-[20px] uppercase">Program</p>
              <p>Software Engineering</p>
            </li>

            <li>
              <p className="text-dark-pink font-bold text-[20px] uppercase">Institution</p>
              <p>University of Ottawa</p>
            </li>

            <li>
              <p className="text-dark-pink font-bold text-[20px] uppercase">Experience</p>
              <p>Nokia, ISED</p>
            </li>

            <li>
              <p className="text-dark-pink font-bold text-[20px] uppercase">Status</p>
              <p>Back in school :)</p>
            </li>

            <li className="col-span-2">
              <p className="text-dark-pink font-bold text-[20px] uppercase">Contact</p>
              <a href="mailto:yseno102@uottawa.ca" className="hover:text-dark-pink">
                yseno102@uottawa.ca
              </a>
            </li>

            <li className="col-span-2">
              <p className="text-dark-pink font-bold text-[20px] uppercase">Interests & Inspiration</p>
              <p>Inspired by my dad’s work in tech, I grew up curious about software. I love the creative side of tech and building fun, interactive projects.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;