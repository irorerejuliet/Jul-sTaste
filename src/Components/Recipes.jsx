import { useState } from "react"
import { BiSearchAlt2, BiSolidSearchAlt2 } from "react-icons/bi"
import Loading from "./Loading"
import SearchBar from "./SearchBar"
import { BsSearch } from "react-icons/bs"


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
    <div className="w-full">
      <div className="w-full flex items-center justify-center px-0 md:px-10">
        <form className="w-full lg:w-2/4">
        <SearchBar placeholder="eg. Cake, Vegan, Chicken"
        handleInputChange={handleChange}
        rightIcon={<BiSearchAlt2 className="text-gray-600"/>}
        />
        </form>

      </div>
      
    </div>
  )
}

export default Recipes
