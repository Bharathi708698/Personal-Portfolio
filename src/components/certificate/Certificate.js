import React from 'react';
import Title from '../layouts/Title';
import CertificateCard from './CertificateCard';
import { Certificate1, Certificate2, Certificate3, Certificate4 } from "../../assets/index";

const Certificate = () => {
  return (
    <section id='achievement'
     className='w-full py-20 border-b-[1px] border-b-black'>
        <div className='flex justify-center items-center text-center'>
        <Title 
        title=''
        des="My Achievements"/>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14'>
          <CertificateCard
           title="Responsive Web Design"
           certificatelink='https://www.freecodecamp.org/certification/Bharathi_Murugesan/responsive-web-design'
           src={Certificate1}
          />
          <CertificateCard
          title="JavaScript Algorithms and Data Structures"
          certificatelink="https://www.freecodecamp.org/certification/Bharathi_Murugesan/javascript-algorithms-and-data-structures"          
          src={Certificate2}
          />
          <CertificateCard
          title="Front End Development Libraries"
          certificatelink="https://www.freecodecamp.org/certification/Bharathi_Murugesan/front-end-development-libraries"          
          src={Certificate3}
          />
          <CertificateCard
          title="Back End Development and APIs"
          certificatelink="https://www.freecodecamp.org/certification/Bharathi_Murugesan/back-end-development-and-apis"          
          src={Certificate4}
          />
        </div>
    </section>

  )
}

export default Certificate;