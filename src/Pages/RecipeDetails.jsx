import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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
      <div><Loading></div>
    )
  }

  return (
    <div>
      
    </div>
  )
}

export default RecipeDetails
