import React, { useState } from 'react';
import Title from '../layouts/Title';
import Education1 from './Education1';
import ProfessionalSkills from './Professional Skills';


const Education = () => {

  const [educationData, setEducationData] = useState(true)
  const [skillsData, setSkillsData] = useState(false)
  return (
    <section id='education'
    className='w-full py-20 border-b-[1px] border-b-black'>
         <div className='flex justify-center items-center text-center'>
        <Title 
        title='Fresher'
        des="Education"/>
        </div>
        <div>
            <ul className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2'>
                <li
                 onClick={() => setEducationData(true) & 
                 setSkillsData(false)}
                 className={`${educationData ? "border-designColor rounded:lg": "border-transparent"} resumeLi`}>
                  Education
                </li>
                <li 
                onClick={() => setEducationData(false) & 
                setSkillsData(true)} 
                className={`${skillsData ? "border-designColor rounded:lg": "border-transparent"} resumeLi`}>
                  Professional Skills
                </li>
            </ul>
        </div>
        {educationData && <Education1/> }
        {skillsData &&<ProfessionalSkills/>}
    </section>
  )
}

export default Education