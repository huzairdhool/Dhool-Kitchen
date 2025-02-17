import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <section id="About" className="w-full h-fit flex flex-col items-center justify-center mt-5 p-4">
      <h2 className="text-3xl sm:text-4xl text-red-900 font-semibold p-2">About Us</h2>
      
      <div className="flex flex-col sm:flex-row justify-center items-center w-full sm:w-3/4 lg:w-2/3">
        <motion.img
          src={assets.karhayi}
          className="w-3/4 sm:w-2/4 lg:w-1/4 mt-5 sm:mt-10 "
          alt="Delicious Food"
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "linear",
          }}
        />
        
        <p className="w-full sm:w-3/4 lg:w-1/2 text-gray-700 font-medium mt-5 sm:mt-0 sm:ml-10 text-center sm:text-left">
        Dhool's Kitchen is a vibrant restaurant that brings together rich flavors, fresh ingredients, and a passion for exceptional dining. With a menu crafted to satisfy
         every craving, we offer a delightful mix of traditional and contemporary dishes, ensuring a memorable experience for every guest. Whether you're here for a hearty
          meal, a quick bite, or a cozy gathering with friends and family, Dhool's Kitchen promises great taste, warm hospitality, and an inviting ambiance. Come indulge in
           a culinary journey where every bite tells a story.
        </p>
      </div>
    </section>
  );
};

export default About;
