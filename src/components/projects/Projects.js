import React from 'react';
import Title from '../layouts/Title';
import ProjectCard from './ProjectCard';
import { Project1, Project2, Project3, Project4 } from "../../assets/index";

const Projects = () => {
  return (
    <section id='projects'
     className='w-full py-20 border-b-[1px] border-b-black'>
        <div className='flex justify-center items-center text-center'>
        <Title 
        title=''
        des="My Projects"/>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14'>
          <ProjectCard
          title="Ecommerce Site"
          gitlink='https://github.com/Bharathi708698/EcommerceSite'
          weblink='http://54.206.34.170:8000'         
          src={Project3}
          />
          <ProjectCard
          title="Blog App"
          weblink='https://bharathiblog.netlify.app'
          gitlink='https://github.com/Bharathi708698/Blog-App-'          
          src={Project2}
          />
          <ProjectCard
           title="Chat Bot"
           gitlink='https://github.com/Bharathi708698/ChatBot'
           weblink="hhttps://bharathichatbot.netlify.app"
           src={Project1}
          />
          <ProjectCard
          title="Chat Application"
          gitlink='https://github.com/Bharathi708698/Chat-Application'
          weblink='https://bharathichatapp.netlify.app'          
          src={Project4}
          />
        </div>
    </section>

  )
}

export default Projects;