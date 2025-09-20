import React from 'react'
import HeroSection from '../Components/HeroSection'

import Recipes from '../Components/Recipes';

const Home = () => {
  return (
    <main className="w-full flex flex-col">
      <HeroSection title={<p>Taste the World with jul'sTaste!</p>}  type='Home'/>
    <section id='recipeDetails'  className='md:max-w-[140px] mx-auto px-4 md:'>
      <Recipes/>
    </section>
    </main>
  );
}

export default Home
