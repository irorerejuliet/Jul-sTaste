import React from 'react'
import { Link } from 'react-router-dom';

const RecipeCard = ({recipe}) => {

  const { image, label, cuisineType, mealType, uri } = recipe?.recipe;
  const id = uri?.split("#")[1]

  return (
    <Link to={`/recipes/${id}`} className='w-full'>
      <div className="bg-gradient-to-t from-black to-transparent shadow w-full rounded-lg">
        <img src={image}alt={label} className=''/>
      </div>
    </Link>
  );
}

export default RecipeCard
