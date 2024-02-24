import {motion } from 'framer-motion'
import { styles } from '../styles'
import ComputersCanvas from './canvas/ComputersCanvas'

import TrackVisibility from 'react-on-screen';
import { useState, useEffect } from 'react';
import "animate.css"


const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-3`}>

        <div className='flex flex-col justify-center items-center mt-5' >
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        


        
        <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}> 
                <h1 className={`${styles.heroHeadText} text-white`} >{`Hi! I am `}<span className='text-[#915eff]'>{`Ussayed `}</span> 
                <span className="txt-rotate"  style={{ height: '50px', width: '200px', display: 'inline-block', verticalAlign: 'top'  }}  data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'>
                  <span className="wrap" style={{ borderRight: '0.08em solid #666' }} >{text}</span></span></h1>
              </div>}
            </TrackVisibility>
          
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                </div>}
            </TrackVisibility>
    

          <ComputersCanvas />

          <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
            <a href="#about">
              <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                <motion.div
                animate={{
                  y:[0,24.0]
                }}
                transition={{
                  duration:1.5,
                  repeat:Infinity,
                  repeatType:'loop'
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
                />
                <motion.div/>

              </div>
            </a>

          </div>



      </div>

    </section>
    )
}

export default Hero