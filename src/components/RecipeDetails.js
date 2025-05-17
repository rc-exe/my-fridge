import React from 'react';
import { ingredients } from '../data/ingredients';
import ApplianceIndicator from './ApplianceIndicator';

const RecipeDetails = ({ recipe, onBack }) => {
  // Get ingredient names from IDs
  const getIngredientNames = (ingredientIds) => {
    return ingredientIds.map(id => {
      const ingredient = ingredients.find(i => i.id === id);
      return ingredient ? ingredient.name : 'Unknown';
    });
  };

  return (
    <div className="recipe-details">
      <button onClick={onBack} className="back-button">← Back to recipes</button>
      <h2>{recipe.name}</h2>
      
      <div className="recipe-meta">
        <ApplianceIndicator appliances={recipe.appliances} />
        <div className="time-info">
          <span>Prep Time: {recipe.prepTime}</span>
          <span>Cook Time: {recipe.cookTime}</span>
        </div>
      </div>
      
      <div className="ingredients-section">
        <h3>Ingredients</h3>
        <ul>
          {getIngredientNames(recipe.ingredients).map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
      
      <div className="instructions-section">
        <h3>Instructions</h3>
        <ol>
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetails;