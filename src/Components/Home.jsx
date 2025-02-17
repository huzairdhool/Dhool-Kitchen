import React, { useEffect, useState } from 'react'; 
import { assets } from '../assets/assets'; 

const Home = () => {
  const [bgImage, setBgImage] = useState(assets.hero);

  useEffect(() => {
    const updateBackground = () => {
      setBgImage(window.innerWidth < 664 ? assets.shero : assets.hero);
    };

    updateBackground(); 

   
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(updateBackground, 150); 
    };

    window.addEventListener('resize', handleResize); 

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="Home">
      <div
        className="min-h-screen w-full flex flex-col lg:items-start justify-center bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",  
          backgroundPosition: "center", 
          maxWidth: "max-w-screen"
        }}
      >
        <div className="lg:ml-20 flex flex-col items-start lg:items-center justify-center px-5">
          <h1 className="font-semibold text-white text-2xl sm:text-2xl lg:text-6xl lg:p-5 text-center lg:text-left">
            Elevate Your Inner
            <br />
            <span className="text-4xl sm:text-4xl lg:text-8xl text-red-700">Foodie </span>
            <br />
            with Every Bite.
          </h1>
          <button
            className="cursor-pointer rounded-md border-2 bg-red-800 px-4 py-2 text-white font-semibold mt-5 
            hover:bg-green-800 hover:text-white hover:border-transparent transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
