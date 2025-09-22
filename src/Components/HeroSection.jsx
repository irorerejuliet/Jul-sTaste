import React from 'react'

const HeroSection = ({title, type}) => {
  return (
    <div className="w-full h-[100vh] ">
      <div className="relative w-full h-full">
        <img
          src="/Images/Banner2.jpg" alt='banner'
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute w-full h-full bg-gradient-to-t from-black to-transparent  top-0  flex-col items-center justify-center  px-4">
        <h1 className="text-white text-4xl md:text-5xl font-bold text-center md:mt-[32rem] mt-[20rem] md:w-[480px] w-[300px] m-auto">
          {title}
        </h1>
        {type && (
          <p className="md:text-sm text-xs mt-6 text-center text-green-800 bg-[#00000090] px-6 py-4 rounded-full md:w-[480px] w-[300px] m-auto">
            Welcome to JulsTaste, Your passport to culinary adventure! Discover
            a treasure trove of delectable recipes from around the globe
          </p>
        )}
      </div>
    </div>
  );
}

export default HeroSection
