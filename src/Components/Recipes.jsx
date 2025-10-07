import { useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import Loading from "./Loading";
import SearchBar from "./SearchBar";
import RecipeCard from "./RecipeCard";
import { fetchRecipes } from "../utils";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [limit, setLimit] = useState(10);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchRecipe = async (e) => {
    e.preventDefault();
    setLoading(true);
  };

  const showMore = () => {
    setLimit((prev) => prev + 10);
  };

  useEffect(() => {
    setLoading(true);
    const fetchRecipe = async () => {
      try {
        const data = await fetchRecipes({ query, limit });
        setRecipes(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipe();
  }, [query, limit]);

  if (loading) {
    return <Loading />;
  }
  console.log(recipes, "hello");
  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-center pt-10 pb-5 px-0 md:px-10">
        <form className="w-full lg:w-2/4" onSubmit={handleSearchRecipe}>
          <SearchBar
            placeholder="eg. Cake, Vegan, Chicken"
            handleInputChange={handleChange}
            rightIcon={<BiSearchAlt2 className="text-gray-500" />}
          />
        </form>
      </div>

      {recipes?.length > 0 ? (
        <>
          <div className="w-full grid lg:grid-cols-4 gap-10 px-0 lg:px-10 py-10">
            {recipes?.map((item) => (
              <RecipeCard recipe={item} key={item.id} />
            ))}
          </div>

          <div className="flex justify-center items-center py-10">
            <button
              className="bg-green-800 text-white px-4 py-2 rounded-full text-sm"
              onClick={showMore}
            >
              Show more
            </button>
          </div>
        </>
      ) : (
        <div className="w-full items-center justify-center py-10 text-white">
          <p className="text-center">No Recipe found</p>
        </div>
      )}
    </div>
  );
};

export default Recipes;
