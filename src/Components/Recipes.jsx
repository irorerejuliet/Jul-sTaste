import { useEffect, useState } from "react"
import { BiSearchAlt2, BiSolidSearchAlt2 } from "react-icons/bi"
import Loading from "./Loading"
import SearchBar from "./SearchBar"
import RecipeCard from "./RecipeCard"
import.meta.env.VITE_EDAMAM_API_ID;
import.meta.env.VITE_EDAMAM_API_KEY;
import { fetchRecipes } from "../utils"
import { data } from "autoprefixer"


const Recipes = () => {
    const [recipes, setRecipes] = useState([])
    const [query, setQuery] = useState('vegan')
    const [limit, setLimit] = useState(30)
    const [loading, setLoading] = useState(false)

    const handleChange =(e) => {
      setQuery(e.target.value)
    }


    const fetchRecipe = async() => {

      try {
        const data = await fetchRecipes({ query, limit });

        setRecipes(data);

        setLoading(false);
        
      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false)
      }
    };


    useEffect(() =>{
     setLoading(true)

      fetchRecipe()

    }, [])

    if(loading){
        return(
          <Loading/>
        )
    }
  return (
    <div className="w-full relative">
      <div className="w-full flex  items-center justify-center pt-10 pb-5 px-0 md:px-10 absolute bottom-20">
        <form className="w-full lg:w-2/4">
        <SearchBar placeholder="eg. Cake, Vegan, Chicken"
        handleInputChange={handleChange}
        rightIcon={<BiSearchAlt2 className="text-gray-500"/>}
        />
        </form>

      </div>
      {
        recipes?.length > 0 ? (
          <>
         
          {
            recipes.map((item, id) =>(
              <RecipeCard recipe={item} key={id}/>
            ))
          }
         
          </>
          
        ):<div className=" w-full items-center justify-center py-10 text-white">
          <p className="text-center">No Recipe found</p>
        </div>
      }
    </div>
  )
}

export default Recipes

//  <div className="w-full flex flex-wrap gap-10 px-0 lg:px-10 py-10">
