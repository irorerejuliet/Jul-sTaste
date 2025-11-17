import React from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const {id, image, name,   label,  mealType,  } = recipe;

 
  return (
    <Link to={`/recipes/${id}`} className=" w-full ">
      <div className="bg-gradient-to-t from-black to-transparent shadow rounded-lg py-10">
        <img
          src={image}
          alt={label}
          className="rounded-lg  w-[450px]  object-cover"
        />
        <div className="p-3">
          <p className="text-white font-semibold">{name}</p>
          <div className="mt-2 flex items-center">
            <MdFavoriteBorder className="text-white w-6 h-6 " />

            <span className="px-2 py-1 text-[12px] capitalize bg-[#0c452243] shadow-xl rounded-full   text-green-500">
              {mealType}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;


// import React from "react";
// import { Link } from "react-router-dom";

// const RecipeCard = ({ recipe }) => {
//   const { id, title, image, name} = recipe;

//   return (
//     <Link to={`/recipes/${id}`} className="w-full">
//       <div className="bg-gradient-to-t from-black to-transparent shadow rounded-lg py-10">
//         {image && (
//           <img
//             src={image}
//             alt={title}
//             className="rounded-lg w-[450px] object-cover"
//           />
//         )}
//         <div className="p-3">
//           <p className="text-white font-semibold">{title}</p>
//           <p>{name}</p>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default RecipeCard;
