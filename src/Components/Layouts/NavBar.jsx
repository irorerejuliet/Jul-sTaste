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
        <NavLink className="hidden md:flex text-white gap-20">
          <Link to="/">Home</Link>
          <Link to="/recipeDetails">Explore</Link>
          <Link to="">Favourite</Link>
          <Link to="">Contact</Link>
        </NavLink>
        <Button
          title="Sign in"
          containerStyle="hidden md:block bg-transparent border border-white text-white hover:bg-white hover:text-slate-700 rounded-full min-w-[130px]"
        />
        <button
          className="block md:hidden text-white text-xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <AiOutlineClose /> : <HiMenuAlt1 />}
        </button>
      </nav>

      {/* Mobile NavBar */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } bg-black flex-col w-full px-4 pt-16 pb-10 text-white gap-6 text-[14px]`}
      >
        <Link to="/">Home</Link>
        <Link to="/recipeDetails">Explore</Link>
        <Link to="/">Favourite</Link>
        <Link to="/">contact</Link>
      </div>
    </header>
  );
}

export default NavBar
