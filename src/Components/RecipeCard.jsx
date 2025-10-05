import React from 'react'
import { Link } from 'react-router-dom';

const RecipeCard = ({recipe}) => {
  const { image, label, cuisineType, dietLabel, mealType, uri } = recipe?.recipe

  const id = uri?.split("#")[1]

  // // Prefer LARGE image > REGULAR > fallback to image
  // const largeImage =
  //   images?.LARGE?.url || images?.REGULAR?.url || recipe?.recipe.image;

  return (
    <Link to={`/recipes/${id}`} className=" w-full ">
      <div className="bg-gradient-to-t from-black to-transparent shadow rounded-lg py-10">
        <img
          src={image}
          alt={label}
          className="rounded-lg  w-full  object-cover"
        />
        <div className="p-3">
          <p className="text-white font-semibold">{label}</p>
          <div className="mt-2">
            <span className="px-2 py-1 text-[12px] capitalize bg-[#0c452243] shadow-xl rounded-full mr-3 text-green-500">
              {cuisineType}
            </span>
            <span className="px-2 py-1 text-[12px] capitalize bg-[#0c452243] shadow-xl rounded-full mr-8  text-green-500">
              {mealType}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default RecipeCard
