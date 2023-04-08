import React from 'react';
import {AiFillHtml5} from "react-icons/ai";
import {IoLogoCss3} from "react-icons/io";
import {SiJavascript} from "react-icons/si";
import {DiReact} from "react-icons/di";
import {IoLogoNodejs} from "react-icons/io";
import {SiMongodb} from "react-icons/si";
import {SiMysql} from "react-icons/si";

import Title from '../layouts/Title';
import Card from './Card';


const Skills = () => {
  return (
    <section id='skills' className='w-full  py-20 border-b-[1px] border-b-black'>
      <Title title="" des="Best Skills On"/>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-20'>
        <Card
         title="Html"
         des="FRONTEND"
         icon={<AiFillHtml5 />}
        />
        <Card
         title="Css"
         des="FRONTEND"
         icon={<IoLogoCss3 />}
        />
        <Card
         title="JavaScript"
         des="FRONTEND"
         icon={<SiJavascript />}
        />
        <Card
         title="React"
         des="FRONTEND"
         icon={<DiReact />}
        />
        <Card
         title="Nodejs"
         des="BACKEND"
         icon={<IoLogoNodejs />}
        />
        <Card
         title="Mongodb"
         des="DATABASE"
         icon={<SiMongodb />}
        />
        <Card
         title="MySql"
         des="DATABASE"
         icon={<SiMysql />}
        />
      </div>
      
    </section>
  )
}

export default Skills;

/*<div className='w-1/2 px-12 h-80 py-10 rounded-lg shadow-shadowOne flex 
      items-center bg-gradient-to-r from-bodyColor to-[#202327] group 
      hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors
      duration-100'>

      </div> */