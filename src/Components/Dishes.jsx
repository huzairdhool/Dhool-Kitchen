import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

const Dishes = () => {
  return (
    <section id="Dishes" className="w-full min-h-screen flex flex-col items-center justify-center p-4 bg-red-800">
      <h2 className="text-3xl sm:text-4xl text-white font-semibold p-2 mb-5">Menu</h2>

      <div className="flex flex-col lg:flex-row gap-4">

        <motion.div
          className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:scale-105"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          <img src={assets.fast} className="w-40 h-40 rounded-full border-4 border-red-800" alt="Fast Food" />
          <p className="text-3xl font-medium text-red-700 mt-3">Fast Food</p>
          <p className="text-center text-lg text-gray-600 mt-2">
            Indulge in our delicious fast food options, crafted to perfection with fresh ingredients.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:scale-105"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          <img src={assets.desi} className="w-40 h-40 rounded-full border-4 border-red-800" alt="Desi Dishes" />
          <p className="text-3xl font-medium text-red-700 mt-3">Desi Dishes</p>
          <p className="text-center text-lg text-gray-600 mt-2">
            Savor the authentic taste of traditional desi dishes, full of rich spices and cultural flavors.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:scale-105"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          <img src={assets.drinks} className="w-40 h-40 rounded-full border-4 border-red-800" alt="Drinks" />
          <p className="text-3xl font-medium text-red-700 mt-3">Drinks</p>
          <p className="text-center text-lg text-gray-600 mt-2">
            Refresh yourself with our assortment of beverages, from soft drinks to shakes and more.
          </p>
        </motion.div>

      </div>

      <div className="mt-6">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <button className="cursor-pointer rounded-md border-2 bg-white px-6 py-3 text-red-600 font-semibold 
            hover:bg-green-800 hover:border-transparent transition-all duration-300 ease-in-out transform hover:scale-105">
            View Menu
          </button>
        </a>
      </div>
    </section>
  );
};

export default Dishes;
