import React, { useEffect, useState } from 'react'
import { data, useParams } from 'react-router-dom'
import Loading from '../Components/Loading'
import HeroSection from '../Components/HeroSection'

const RecipeDetails = () => {

  const [recipe, setRecipe] = useState(null)
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(false)

  const {id} = useParams()

  const getRecipe = async (id) => {
    try {
      
      setLoading(true);

      const data = await fetchRecipe(id);

      setRecipe(data);

      const recommend = await fetchRecipes({ query: recipe?.label, limit: 5 });

      setRecipes(recommend);

      setLoading(false);
      
    } catch (error) {
      console.log(error);

      setLoading(false)
      
    }
  }

  useEffect(() => {
    getRecipe(id)
  }, [id])

  if(loading){
    return(
      <div className='w-full h-[100vh] flex items-center justify-center'><Loading/></div>
    )
  }

  return (
    <div className="w-full">
      <HeroSection title={recipe?.label} image={recipe?.image} />

      <div className="w-full px-4 lg:px-20 pt-5"></div>

      <div className="flex gap-10 items-center justify-center px-4">
        <div className="dlex flex-col justify-between">
          <span className="text-white text-center border border-gray-500 py-1 px-2 rounded-full mb-1">
            {recipe.calories.toFixed(2)}
          </span>
          <p className="text-neutral-100 text-[12px] md:text-sm">CALORIES</p>
        </div>
        <div className="dlex flex-col justify-between">
          <span className="text-white text-center border border-gray-500 py-1 px-2 rounded-full mb-1">
            {recipe.calories.toFixed(2)}
          </span>
          <p className="text-neutral-100 text-[12px] md:text-sm">TOTAL TIME </p>
        </div>
        <div className="dlex flex-col justify-between">
          <span className="text-white text-center border border-gray-500 py-1 px-2 rounded-full mb-1">
            {recipe.calories.toFixed(2)}
          </span>
          <p className="text-neutral-100 text-[12px] md:text-sm">SERVINGS</p>
        </div>
        <div className='w-full flex flex-col md:flex-row gap-8'>

        </div>
      </div>
    </div>
  );
}

export default RecipeDetails
