import { motion } from 'framer-motion'
import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'

import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import {academics} from '../constants'
import {SectionWrapper} from '../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({academic})=>{
  return (<VerticalTimelineElement 
  contentStyle={{background: '#1d1836',color:'#fff'}}
  contentArrowStyle={{borderRight:'7px solid #232631'}}
  date={academic.date}
  iconStyle={{background:academic.iconBg}}
  icon={
    <div className='flex justify-center items-center w-full h-full'>
      <img src={academic.icon} 
      alt={academic.company_name}
      className='w-full h-full object-contain'
      />

    </div>
  }
  
  >

<div>
  <h3 className='text-white text-[24px] font-bold' >{academic.title}</h3>
  <p className='text-secondary text-[16px] font-semibold' style={{margin:0}}> {academic.company_name}</p>
  </div>
  <ul className='mt-5 list-disc ml-5 spacec-y-2'>
    {academic.points.map((point,index)=>(
      <li key={`experience-point-${index}`}
      className='text-white-100 text-[14px] pl-1 tracking-wider'
      >
        {point}

      </li>
    ))}

  </ul>
    </VerticalTimelineElement>

)}

const Academics = () => {
  
  return (
    <>
  <motion.div variants={textVariant()}>
      <p className={styles.sectionHeadText}>
        My Education
      </p>
      <h2 className={styles.sectionSubText}>
        Academics

      </h2>

    </motion.div>
    <div className='mt-20 flex flex-col'>
      <VerticalTimeline>
        {academics.map((academic, index)=>(
          <ExperienceCard key={index} academic={academic}/>
        ))}
      </VerticalTimeline>
    </div>
    </>

)}

export default SectionWrapper (Academics,"academics")

