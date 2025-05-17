import React, { useState } from 'react';
import { ingredients } from '../data/ingredients';

const IngredientSelector = ({ selectedIngredients, onSelectionChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const handleIngredientToggle = (ingredientId) => {
    const newSelection = selectedIngredients.includes(ingredientId)
      ? selectedIngredients.filter(id => id !== ingredientId)
      : [...selectedIngredients, ingredientId];

    onSelectionChange(newSelection);
  };

  // Group ingredients by category
  const ingredientsByCategory = ingredients.reduce((acc, ingredient) => {
    if (!acc[ingredient.category]) acc[ingredient.category] = [];
    acc[ingredient.category].push(ingredient);
    return acc;
  }, {});

  const allCategories = ['All', ...Object.keys(ingredientsByCategory)];

  return (
    <div className="ingredient-selector">
      <h2>What's in your fridge?</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search ingredients..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-2 my-4 border rounded"
        aria-label="Search ingredients"
      />

      {/* Category Menu */}
      <div className="category-menu">
        {allCategories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`button-54 menu-btn ${selectedCategory === category ? 'active' : ''}`}
            aria-pressed={selectedCategory === category}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Ingredients List */}
      {Object.entries(ingredientsByCategory)
        .filter(([category]) => selectedCategory === 'All' || selectedCategory === category)
        .map(([category, items]) => {
          const filteredItems = items.filter(item =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
          );

          if (filteredItems.length === 0) return null;

          return (
            <div key={category} className="category">
              <h3>{category}</h3>
              <div className="ingredient-list">
                {filteredItems.map(ingredient => (
                  <button
                    key={ingredient.id}
                    type="button"
                    className={`ingredient-toggle-btn ${selectedIngredients.includes(ingredient.id) ? 'selected' : ''}`}
                    onClick={() => handleIngredientToggle(ingredient.id)}
                    aria-pressed={selectedIngredients.includes(ingredient.id)}
                  >
                    {ingredient.name}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default IngredientSelector;
