import React from 'react'
import { Link } from 'react-router-dom';

const RecipeCard = ({recipe}) => {
  const { image, label, cuisineType, dietLabel, mealType, uri } = recipe?.recipe

  const id = uri?.split("#")[1]

  // // Prefer LARGE image > REGULAR > fallback to image
  // const largeImage =
  //   images?.LARGE?.url || images?.REGULAR?.url || recipe?.recipe.image;

  return (
    <Link to={`/recipes/${id}`} className=" ">
      <div className="bg-gradient-to-t from-black to-transparent shadow rounded-lg ">
        <img
          src={image}
          alt={label}
          className="rounded-lg w-full  object-cover"
        />
      </div>
    </Link>
  );
}

export default RecipeCard
