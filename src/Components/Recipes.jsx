import { useState } from "react"
import { BiSearchAlt2, BiSolidSearchAlt2 } from "react-icons/bi"
import Loading from "./Loading"
import SearchBar from "./SearchBar"
import { BsSearch } from "react-icons/bs"
import RecipeCard from "./RecipeCard"


const Recipes = () => {
    const [recipes, setRecipes] = useState([])
    const [query, setQuery] = useState('vegan')
    const [limit, setLimit] = useState(30)
    const [loading, setLoading] = useState(false)

    const handleChange =(e) => {
      setQuery(e.target.value)
    }

    if(loading){
        return(
          <Loading/>
        )
    }
  return (
    <div className="w-full relative">
      <div className="w-full flex items-center justify-center pt-10 pb-5 px-0 md:px-10 absolute bottom-20">
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
          <div className="w-full flex flex-wrap gap-10 px-0 lg:px-10 py-10">
          {
            recipes.map((items, id) =>(
              <RecipeCard recipes={recipes} key={id}/>
            ))
          }
          </div>
          </>
          
        ):<div className=" w-full items-center justify-center py-10">
          <p className="text-center">No Recipe found</p>
        </div>
      }
    </div>
  )
}

export default Recipes
