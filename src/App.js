import React, { useState, useEffect } from 'react';
import { recipes } from './data/recipes';
import { ingredients } from './data/ingredients';
import IngredientSelector from './components/IngredientSelector';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import fridgeLoadingAnimation from './assets/fridge-loading.json';  // make sure path is correct
import Lottie from 'lottie-react';
import './styles.css';

function SelectedIngredients({ ingredientIds, onRemove }) {
  if (ingredientIds.length === 0) return null;

  const getIngredientName = (id) => {
    const ing = ingredients.find(item => item.id === id);
    return ing ? ing.name : id;
  };

  return (
    <div className="selected-ingredients">
      <h3>Selected Ingredients</h3>
      <ul className="selected-list">
        {ingredientIds.map((id) => (
          <li key={id}>
            {getIngredientName(id)}
            <button
              className="remove-btn"
              onClick={() => onRemove(id)}
              aria-label={`Remove ingredient ${id}`}
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Simulate loading delay, then set loaded true
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 3000); // 3 seconds loading for demo
    return () => clearTimeout(timer);
  }, []);

  const getPossibleRecipes = () => {
    if (selectedIngredients.length === 0) return [];
    return recipes.filter(recipe =>
      recipe.ingredients.every(ingredientId =>
        selectedIngredients.includes(ingredientId)
      )
    );
  };

  const removeIngredient = (id) => {
    const updated = selectedIngredients.filter(ing => ing !== id);
    setSelectedIngredients(updated);
  };

  return (
    <div className="app-container">

      {/* Floating background images container */}
      <div className="floating-background">
        <img src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png" alt="Burger" className="float-bg-img float-bg1" />
        <img src="https://cdn-icons-png.flaticon.com/512/135/135620.png" alt="Tomato" className="float-bg-img float-bg2" />
        <img src="https://cdn-icons-png.flaticon.com/512/135/135649.png" alt="Lettuce" className="float-bg-img float-bg3" />
        <img src="https://cdn-icons-png.flaticon.com/512/1046/1046857.png" alt="Dish" className="float-bg-img float-bg4" />
        <img src="https://cdn-icons-png.flaticon.com/512/415/415733.png" alt="Apple" className="float-bg-img float-bg5" />
        <img src="https://cdn-icons-png.flaticon.com/512/415/415729.png" alt="Banana" className="float-bg-img float-bg6" />
        <img src="https://cdn-icons-png.flaticon.com/512/1046/1046875.png" alt="Pizza" className="float-bg-img float-bg7" />
        <img src="https://cdn-icons-png.flaticon.com/512/1046/1046781.png" alt="Cheese" className="float-bg-img float-bg8" />
      </div>

      {/* Loading Animation Overlay */}
      {!isLoaded && (
        <div className="loading-overlay" aria-label="Loading animation">
          <Lottie 
            animationData={fridgeLoadingAnimation} 
            loop={true} 
            style={{ width: 200, height: 200 }}
            
          />
                  <p>Loading your fridge...</p>

        </div>
        
        
      )}

      <header className={`app-header ${isLoaded ? 'loaded' : ''}`}>
        <h1 className="title-animation">My Fridge</h1>
        <p className="subtitle-animation">Select ingredients in your fridge to see what you can cook!</p>
      </header>

      <div className="ingredient-top-bar">
        <IngredientSelector
          selectedIngredients={selectedIngredients}
          onSelectionChange={setSelectedIngredients}
        />
        <SelectedIngredients
          ingredientIds={selectedIngredients}
          onRemove={removeIngredient}
        />
      </div>

      <div className="content-wrapper">
        <section className="main-content">
          {selectedRecipe ? (
            <RecipeDetails
              recipe={selectedRecipe}
              onBack={() => setSelectedRecipe(null)}
            />
          ) : (
            <RecipeList
              recipes={getPossibleRecipes()}
              selectedIngredients={selectedIngredients}
              onRecipeSelect={setSelectedRecipe}
            />
          )}
        </section>
      </div>

      <footer style={{
        marginTop: '30px',
        padding: '20px',
        textAlign: 'center',
        background: '#f8f8f8',
        fontSize: '14px'
      }}>
        <p>Made by <strong>Ritesh RC</strong></p>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=riteshchakramani123@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Send email to Ritesh"
          style={{
            display: 'inline-block',
            marginTop: '5px',
            background: 'none',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
            alt="Email"
            style={{ width: '24px', height: '24px' }}
          />
        </a>
      </footer>
    </div>
  );
}

export default App;
