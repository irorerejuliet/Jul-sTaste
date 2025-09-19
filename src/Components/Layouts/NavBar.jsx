import { HiMenuAlt1 } from "react-icons/hi"
import { AiOutlineClose } from "react-icons/ai"
import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import Button from "../Button"


const NavBar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full fixed z-10 bg-black ">
      <nav className="w-full py-2 md:py-3 px-4 md:px-20 flex justify-between items-center">
        <Link to="/">
          <img
            src="/Images/Logoo.png"
            alt="Logo"
            className="flex items-center justify-center  text-lg cursor-pointer w-24 "
          />
        </Link>
        <NavLink className="hidden md:flex text-white gap-6">
          <Link to="/">Home</Link>
          <Link to="/recipeDetails">Explore</Link>
          <Link to="">Favourite</Link>
        </NavLink>
      </nav>
      <button title='Sign in' conteinerStyle='hidden md:block bg-transparent border border-white text-white hover:bg-white hover:text-slate-700 rounded-full min-w-[130px]'/>
    </header>
  );
}

export default NavBar
