import React from 'react'
import HeroSection from '../Components/HeroSection'

import Recipes from '../Components/Recipes';

const Home = () => {
  return (
    <main className="w-full flex flex-col">
      <HeroSection title={<p>Taste the World with jul'sTaste!</p>}  type='Home'/>
    <section id='recipeDetails'  className='md:max-[1440px] mx-auto px-4 md:px-20'>
      <Recipes/>
    </section>
    </main>
  );
}

export default Home
