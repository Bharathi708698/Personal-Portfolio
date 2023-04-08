import React from 'react';
import { motion } from 'framer-motion';
import EducationCard from './EducationCard';


const Education1 = () => {
  return (
    <motion.div 
    initial={{opacity: 0}} 
    animate={{opacity: 1, transition:{duration:.5}}}
    >
    <div className='py-12 font-titleFont'>
        <p className='text-sm text-designColor tracking-[4px]'>2014-2021</p>
        <h2 className='text-2xl md:text-4xl font-bold'>Educational Qualification</h2>
      </div>
      <div className='mt-14 w-full lgl:w-1/2 h-[500px] border-l-[6px] border-l-black
      border-opacity-30 flex flex-col gap-10'>
        <EducationCard 
        title="Mechanical Engineering"
        subTitle="Panimalar Engineering College (2017 - 2021)"
        result="7.96/10"
        />
        <EducationCard
         title="Higher Secondary"
         subTitle="St.Francis Matric Hr. Sec. School (2016 - 2017)"
         result="85.4%/100"
        />
        <EducationCard
         title="Secondary"
         subTitle="St.Francis Matric Hr. Sec. School (2014 - 2015)"
         result="94.9%/100"
        />
      </div>
      </motion.div>
  )
}

export default Education1