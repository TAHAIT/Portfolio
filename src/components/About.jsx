import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 1000,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Who Am I ?</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am an ambitious IT student currently studying at Clermont Auvergne University. Although I am still in the early stages of my career, my passion for programming and analysis drives me to constantly learn and grow. I have been actively expanding my knowledge in the field of IT through online platforms such as Coursera, Udemy, and OpenClassrooms, where I have completed various courses and gained valuable insights.

        My dedication to learning and my enthusiasm for programming allow me to tackle challenges with a problem-solving mindset. I am constantly seeking opportunities to apply my skills and contribute to innovative projects. While I may not yet have professional experience, I possess a strong foundation in IT concepts and a drive to excel in my future endeavors.

        My portfolio showcases my academic achievements, personal projects, and the skills I have acquired along the way. Through my projects, I aim to demonstrate my ability to adapt to new technologies, showcase my analytical thinking, and highlight my commitment to producing high-quality work.

        I believe that continuous learning is crucial in the rapidly evolving field of IT. Therefore, I am always exploring new technologies, staying up-to-date with industry trends, and actively participating in online communities to exchange knowledge and ideas with fellow enthusiasts.
      </motion.p>
      <motion.div>
      <h2 className={styles.sectionHeadText}>What I can do ?</h2>
      
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
          
        ))}
      </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
