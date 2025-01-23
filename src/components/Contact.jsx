import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className='mt-12 flex flex-col gap-4'>
          <p className='text-white font-medium'>
            <span className='font-bold'>Email:</span> <a href='mailto:ayushjadhao8804@gmail.com' className='text-secondary'>ayushjadhao8804@gmail.com</a>
          </p>
          <p className='text-white font-medium'>
            <span className='font-bold'>Phone:</span> <a href='tel:8446603980' className='text-secondary'>8446603980</a>
          </p>
           <p className='text-white font-medium'>
            <span className='font-bold'>GitHub:</span> <a href='https://github.com/Ayusherhjyuk' target='_blank' rel='noopener noreferrer' className='text-secondary'>https://github.com/Ayusherhjyuk</a>
          </p>
          <p className='text-white font-medium'>
            <span className='font-bold'>Linkedin:</span> <a href='https://www.linkedin.com/in/ayush-jadhao-413520256' target='_blank' rel='noopener noreferrer' className='text-secondary'>https://www.linkedin.com/in/ayush-jadhao-413520256</a>
          </p>
          
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
