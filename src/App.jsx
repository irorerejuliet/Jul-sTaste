
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import NavBar from './Components/Layouts/NavBar'
import Footer from './Components/Layouts/Footer';
import RecipeDetails from './Pages/RecipeDetails'
import Favorites from './Pages/Favorites';


const App = () => {
  return (
    <div className='bg-black'>
      <NavBar />
      <Routes>
        <Route index="/" element={<Home />} />
        <Route path="/recipeDetails/:id" element={<RecipeDetails />} />
        <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App
