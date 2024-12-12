import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';

const RecipeList = ({ recipes, deleteRecipe }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} deleteRecipe={deleteRecipe} />
      ))}
    </div>
  );
};

export default RecipeList;
