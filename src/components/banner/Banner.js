import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {RxResume} from "react-icons/rx";
import { BsGithub } from "react-icons/bs";
import { MyProfile, Resume } from "../../assets/index";


const Banner = () => {
  const [text] = useTypewriter({
    words: ["Enthusiastic Developer.", "Full Stack Developer.", "MERN Stack Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000
  });
  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center font-titleFont border-b-[1px]
    border-b-black"
    >
      <div className="w-full lgl:w-1/2 flex flex-col gap-20">
        <div className="flex flex-col gap-3">
          <h4 className="text-lg font-normal">Welcome</h4>
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white">
             Hi, I'm {"  "}
             <span className="text-designColor ">BHARATHI M</span>
          </h1>
          <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-white">
            a <span>{text}</span>
            <Cursor
             cursorBlinking="false"
             cursorStyle="|"
             cursorColor='#ff014f' 
            />
          </h2>
          <p className="text-base font-bodyFont leading-6 tracking-wide">
          Hi I am Bharathi I'm a mechanical engineering graduate, from my college days 
          onwards i showed intrest in programming later that i taught by myself I complete 
          Fullstack projects using JavaScript, React, Express and Mongodb i always try solve 
          the real world issues using my programming skills I believe coding can help us to 
          approach the problems in a different way, in real life scenario also yes! Coding is a 
          Life Skill!
          </p>
        </div>
        <div>
          <h2 className="text-base font-titleFont uppercase mb-4">
            Find Me In
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a target="_blank" href={Resume}><RxResume /></a>
            </span>
            <span className="bannerIcon">
              <a target='_blank' href='https://github.com/Bharathi708698'><BsGithub /></a>
            </span>
          </div>
        </div>
      </div>
      {/*<div className="w-full lgl:w-1/2 flex justify-center items-center relative" >
        <img className=" z-10 rounded-3xl" src={MyProfile} alt="MyProfile" />
  </div>*/}
    </section>
  );
};

export default Banner;
