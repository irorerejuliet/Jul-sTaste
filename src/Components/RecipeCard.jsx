import React from 'react'
import { Link } from 'react-router-dom';

const RecipeCard = ({recipe}) => {
  const { label, cuisineType, mealType, uri, image } = recipe?.recipe;
  const id = uri?.split("#")[1];

  // // Prefer LARGE image > REGULAR > fallback to image
  // const largeImage =
  //   images?.LARGE?.url || images?.REGULAR?.url || recipe?.recipe.image;

  return (
    <Link to={`/recipes/${id}`} className="w-full ">
      <div className="bg-gradient-to-t from-black to-transparent shadow w-full rounded-lg">
        <img src={image} alt={label} className="rounded-lg  w-full" />
      </div>
    </Link>
  );
}

export default RecipeCard
