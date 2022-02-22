import React from "react";

function RecipeView({ deleteRecipe }) {
    return (
        <button name="delete" onClick={deleteRecipe}>
            Delete
        </button>

    )
}

export default RecipeView;