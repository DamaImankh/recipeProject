import React from 'react';
import './RecipeCard.css';

const RecipeCard = ({ recipe, deleteRecipe }) => {
  const handleDelete = (e, id) => {
    e.stopPropagation();
    e.preventDefault();
    deleteRecipe(id);
  };

  return (
    <div className="recipe-card">
      <button onClick={(e) => handleDelete(e, recipe.id)} className="delete-btn">×</button>
      <img src={recipe.image} alt={recipe.name} />
      <h3>{recipe.name}</h3>
      <div className="description">
        <p>{recipe.description}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
