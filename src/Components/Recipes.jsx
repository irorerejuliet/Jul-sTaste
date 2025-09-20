import { useState } from "react"
import { BiSolidSearchAlt2 } from "react-icons/bi"
import Loading from "./Loading"
import SearchBar from "./SearchBar"


const Recipes = () => {
    const [recipes, setRecipes] = useState([])
    const [query, setQuery] = useState('vegan')
    const [limit, setLimit] = useState(30)
    const [loading, setLoading] = useState(false)

    if(loading){
        return(
          <Loading/>
        )
    }
  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-center pt-10 pb-5 px-0 md:px-10">
        <form className="w-full lg:w-2/4">
        <SearchBar/>
        </form>

      </div>
      
    </div>
  )
}

export default Recipes
