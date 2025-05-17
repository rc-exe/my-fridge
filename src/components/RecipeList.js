import React from 'react';
import ApplianceIndicator from './ApplianceIndicator';

const RecipeList = ({ recipes, selectedIngredients, onRecipeSelect }) => {
  // Function to calculate match percentage
  const getMatchPercentage = (recipe) => {
    const recipeIngredientIds = recipe.ingredients;
    const matchingIngredients = recipeIngredientIds.filter(id =>
      selectedIngredients.includes(id)
    ).length;
    return (matchingIngredients / recipeIngredientIds.length) * 100;
  };

  // Sort recipes by match percentage (descending)
  const sortedRecipes = [...recipes].sort((a, b) =>
    getMatchPercentage(b) - getMatchPercentage(a)
  );

  return (
    <div className="recipe-list">
      <h2>Recipes You Can Make</h2>
      {sortedRecipes.length > 0 ? (
        <ul>
          {sortedRecipes.map(recipe => (
            <li key={recipe.id} className="recipe-item">
              <div className="recipe-header">
                <h3 onClick={() => onRecipeSelect(recipe)}>{recipe.name}</h3>
                <div className="match-percentage">
                  {Math.round(getMatchPercentage(recipe))}% match
                </div>
              </div>
              <div className="recipe-details">
                <ApplianceIndicator appliances={recipe.appliances} />
                <div className="time-info">
                  <span>Prep: {recipe.prepTime}</span>
                  <span>Cook: {recipe.cookTime}</span>
                </div>
                {/* YouTube Recipe Link */}
                {recipe.youtubeUrl && (
                  <div style={{ marginTop: '0.5em' }}>
                    <a
                      href={recipe.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#1a73e8', textDecoration: 'underline' }}
                    >
                      Watch Recipe on YouTube
                    </a>
                  </div>
                )}
              </div>
              <button onClick={() => onRecipeSelect(recipe)}>View Recipe</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No recipes found with the selected ingredients. Try adding more ingredients!</p>
      )}
    </div>
  );
};

export default RecipeList;
