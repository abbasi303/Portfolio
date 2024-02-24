import { motion } from 'framer-motion'
import React from 'react'
import { Tilt } from 'react-tilt'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn,textVariant } from '../utils/motion'
import SectionWrapper from '../hoc/SectionWrapper'


const ServiceCard =({index,title,icon})=>{
  return(
    <Tilt className="xs:w-[250px] w-full" >
      <motion.div variants={fadeIn("right","spring",0.5* index,0.75)} 
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div 
        options={{
          max:45,
          scale:1,
          speed:450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title}
          className='w-16 h-16 object-contain'
          />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>

        </div>

        </motion.div>

    </Tilt>
  )
}


const About = () => {
  return (
    <>
    <motion.div 
    variants={textVariant()}>

      <p className={styles.sectionSubText}>
        Introduction
      </p>
      <h2 className={styles.sectionHeadText}>
        Overview
      </h2>


    </motion.div>

    <motion.p
    variants={fadeIn("","",0.1,1)}
    className='mt-4 text-secondary text-[17px]
    max-w-3xl leading-[30px]'
    >
Hi, I’m Ussayed Shakeel Abbasi, a CS student at the University of Pécs, Hungary, with a passion for web development and AI. I have a Stipendium Hungaricum Scholarship and skills in Python, C++, SQL, Laravel, Angular, and React.js. I have experience as a mentor and frontend developer intern, working on various projects.

I love learning new technologies and improving my craft. My portfolio shows my projects, from simple interfaces to complex backend solutions, all with high quality and creativity.

Check out my portfolio to see how my tech journey and skills can help your projects. Let’s connect and create something amazing in this dynamic field of web development and AI. Welcome to my world of innovation and growth.    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service,index) =>(
        <ServiceCard key={service.title} index={index} {...service} />
      ) )}

    </div>
    </>
    )
}

export default SectionWrapper(About,"about")