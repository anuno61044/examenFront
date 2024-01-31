import { Route,Routes } from "react-router-dom";
import RecipesList from "./pages/Recipes/RecipesList";
import Home from "./pages/Home/Home"
import "./App.css"
import MenusList from "./pages/Menus/MenusList";
import IngredientsList from "./pages/Ingredients/IngredientsList";

function App() {
  return (
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/recipes-list" element={<RecipesList />} />
       <Route path="/menus-list" element={<MenusList/>} />
       <Route path="/ingredients-list" element={<IngredientsList/>} />
     </Routes>
  );
}

export default App


