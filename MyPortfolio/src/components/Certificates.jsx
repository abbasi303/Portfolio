import React, { useEffect, useRef } from 'react';
import 'swiper/swiper-bundle.css';
import { styles } from '../styles';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

import 'react-vertical-timeline-component/style.min.css';
import {SectionWrapper} from '../hoc';
import { textVariant } from '../utils/motion';
// Assuming you have these images imported or available in your project
import certificateImage1 from '../assets/carrent.png';
import certificateImage2 from '../assets/carrent.png';
import certificateImage3 from '../assets/carrent.png';
// Add more images as needed

function Certificates() {
  const swiperRef = useRef(null);

  useEffect(() => {
    const Swiper = window.Swiper;
    new Swiper(swiperRef.current, {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      },
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }, []);

  return (
    <>
    <motion.div variants={textVariant()}>
          <p className={styles.sectionHeadText}>
          Certificates
                    </p>
          <h2 className={styles.sectionSubText}>
              MY CERIDCATES

          </h2>

      </motion.div>

      <div className="container mx-auto px-4 py-8 max-w-xl flex flex-col">
              <div ref={swiperRef} className="swiper-container">
                  <div className="swiper-wrapper">
                      <div className="swiper-slide">
                      <Link to="/your-path">

                          <img src={certificateImage1} alt="Certificate" className="rounded-lg object-cover" />
                          </Link>
                      </div>
                      <div className="swiper-slide">
                      <Link to="/your-path">

                          <img src={certificateImage2} alt="Certificate" className="rounded-lg object-cover" />
                      </Link>
                      </div>
                      <div className="swiper-slide">
                      <Link to="/your-path">

                          <img src={certificateImage3} alt="Certificate" className="rounded-lg object-cover" />
                      </Link>
                      </div>
                      {/* Add more SwiperSlides as needed */}
                  </div>
                  <div className="swiper-pagination"></div>
                  <div className="swiper-button-next"></div>
                  <div className="swiper-button-prev"></div>
              </div>
          </div></>
  );
}

export default SectionWrapper(Certificates,"certificates");