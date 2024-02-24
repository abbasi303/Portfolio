import { motion } from 'framer-motion'
import React from 'react'
import { Tilt } from 'react-tilt'
import { styles } from '../styles'
import { github,live } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn,textVariant } from '../utils/motion'


const ProjectCard =({index,name,description,tags,image,source_code_link,live_server_link})=>{
  return(
    <motion.div 
    variants={fadeIn("up","spring",index * 0.5,0.75)}
    >
<Tilt
options={{
  max:45,
  scale:1,
  speed:450
}}
className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
>
  <div className='relative w-full h-[230px]'>
    <img 
    src={image} 
    alt={name}
    className='w-full h-full object-cover rounded-2xl'
    />
    <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
      <div
      onClick={()=>window.open(source_code_link,"blank")}
      className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
      >
        <img src={github} alt="github"
        className='w-1/2 h-1/2 object-contain'
        />
      </div>

      <div
      onClick={()=>window.open(live_server_link,"blank")}
      className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
      >
        <img src={live} alt="github"
        className='w-1/2 h-1/2 object-contain'
        />
      </div>

    </div>

  </div>

  <div 
  className='mt-5'
  >
    <h3 className='text-white font-bold text-[24px]'>
      {name}
    </h3>
    <p className='mt-2 text-secondary text-[14px]'>{description}</p>

  </div>
  <div className='mt-4 flex flex-wrap gap-2'>
    {tags.map((tag) =>(
      <p key={tag.name} className={`text-[14px]${tag.color}`}>#{tag.name}</p>
    ))}

  </div>
</Tilt>

    </motion.div>
  )
}




const Works = ({title,description,type}) => {
  const filteredProjects = projects.filter(project => project.type === type);

  // Use filteredProjects for rendering
  const totalWidth = filteredProjects.length * 360;
  return (
    <> 
    <motion.div variants={textVariant()}>
    <p className={styles.sectionHeadText}>
          {title}
        </p>
        <h2 className={styles.sectionSubText}>
          {description}
        </h2>
      </motion.div>

      <div style={{ overflow: 'hidden', width: '100%', marginTop: '20px' }}>
      <motion.p
      variants={fadeIn("","",0.1,1)}
      className='mt-3, text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Here are some of my projects that I have worked on. You can check out the source code and live server of the project by clicking on the respective icons.

      </motion.p>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -totalWidth }}
          style={{
            display: 'flex',
            overflowX: 'auto',
            gap: '20px',
            padding: '20px',
          }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              {...project}
            />
          ))}
        </motion.div>

          
        

      </div>


    </>
    )
}

export default SectionWrapper(Works,"")


