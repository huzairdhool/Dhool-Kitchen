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
        }}
      >
        <div className="lg:ml-20 flex flex-col items-center lg:items-start justify-center px-5 text-center lg:text-left">
          <h1 className="font-semibold text-white text-3xl sm:text-4xl lg:text-6xl lg:p-5">
            Elevate Your Inner
            <br />
            <span className="text-4xl sm:text-5xl lg:text-8xl text-red-700">Foodie </span>
            <br />
            with Every Bite.
          </h1>
          <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-5'>
            <a href='#Contact'
              className="rounded-md border-2 bg-red-800 px-6 py-3 text-white font-semibold 
              hover:bg-green-800 hover:border-transparent transition-all duration-300 ease-in-out transform hover:scale-105">
              Book or Order
            </a>
            <div className="flex gap-4">
              <a href="https://www.facebook.com">
                <img src={assets.facebook} className='w-8 h-8 hover:scale-110 transition' alt="Facebook" />
              </a>
              <a href="#https://www.instagram.com">
                <img src={assets.instagram} className='w-8 h-8 hover:scale-110 transition' />
              </a>  
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
