import RecipeCard from "../Components/RecipeCard";
import { useFavoritesStore } from "../store/favoritesStore";


const Favorites = () => {
  const { favorites } = useFavoritesStore();

  return (
    <div className="w-full py-10 px-5">
      <h1 className="text-3xl text-white font-bold mb-5 text-center">
        Your Favorite Recipes
      </h1>

      {favorites.length > 0 ? (
        <div className="grid lg:grid-cols-4 gap-10">
          {favorites.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <p className="text-white text-center mt-10">
          You have no favorite recipes yet.
        </p>
      )}
    </div>
  );
};

export default Favorites;
