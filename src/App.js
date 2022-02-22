import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list, edit and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  const deleteRecipe = (indexToDelete) => 
    setRecipes((currentRecipe) =>
      currentRecipe.filter((recipe, index) => index !== indexToDelete));
  
  const addRecipe = (newRecipe) => setRecipes((currentRecipes) => [...currentRecipes, newRecipe]);
  
  return (
    <div className="App">
      <header>
        <h1 style={{fontFamily: "Playfair Display SC", textAlign: "center", fontSize: "64px"}}>
          Delicious Food Recipes
        </h1>
      </header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe}/>
      <RecipeCreate addRecipe={addRecipe}/>
    </div>
  );
}

export default App;
