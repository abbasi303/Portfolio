import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { styles } from '../styles';
import { motion } from 'framer-motion'

import 'react-vertical-timeline-component/style.min.css';
import {SectionWrapper} from '../hoc';
import { textVariant } from '../utils/motion';
// Assuming you have these images imported or available in your project
import certificateImage1 from '../assets/AIforE.png';
import certificateImage2 from '../assets/AiGood.png';
import certificateImage3 from '../assets/WebDev.png';
// Add more images as needed

function Certificates() {
  return (
    <>
    <motion.div variants={textVariant()}>
          <p className={styles.sectionHeadText}>
          Certificates
                    </p>
          <h2 className={styles.sectionSubText}>
            Here are some of the certificates that I have earned over the years.

          </h2>

      </motion.div>

      <div className="container mx-auto px-4 py-8 max-w-xl flex flex-col">
              <Swiper
                modules={[Navigation, Pagination, EffectCoverflow]}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView="auto"
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                className="w-full"
              >
                      <SwiperSlide style={{ width: '300px' }}>
                      <a href="https://coursera.org/share/13c509b53e3f5299a1c7d599b0ed8ace" target="_blank" rel="noopener noreferrer">

                          <img src={certificateImage1} alt="Certificate" className="rounded-lg object-cover" />
                          </a>
                      </SwiperSlide>
                      <SwiperSlide style={{ width: '300px' }}>
                      <a href="https://coursera.org/share/4a7d9d21eb20ca200202c3a88a06962c" target="_blank" rel="noopener noreferrer">

                          <img src={certificateImage2} alt="Certificate" className="rounded-lg object-cover" />
                      </a>
                      </SwiperSlide>
                      <SwiperSlide style={{ width: '300px' }}>
                      <a href="https://www.udemy.com/certificate/UC-6f06dae8-22bc-4bdf-8482-b5ba3e346442/" target="_blank" rel="noopener noreferrer">

                          <img src={certificateImage3} alt="Certificate" className="rounded-lg object-cover" />
                      </a>
                      </SwiperSlide>
                      {/* Add more SwiperSlides as needed */}
              </Swiper>
          </div></>
  );
}

export default SectionWrapper(Certificates,"certificates");