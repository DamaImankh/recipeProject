import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddRecipe from './components/AddRecipe/AddRecipe';
import RecipeList from './components/RecipeList/RecipeList';
import RecipeDetail from './components/RecipeDetail/RecipeDetail';
import SearchBar from './components/SearchBar/SearchBar';
import './App.css';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddRecipe, setShowAddRecipe] = useState(false);

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    setRecipes(storedRecipes);
  }, []);

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  const deleteRecipe = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Router>
      <div className="app">
        <div className="header">
          <h1>Список блюд</h1>
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <button className="add-recipe-btn" onClick={() => setShowAddRecipe(!showAddRecipe)}>
            +
          </button>
        </div>

        {showAddRecipe && <AddRecipe addRecipe={addRecipe} />}

        <Routes>
          <Route 
            path="/" 
            element={<RecipeList recipes={filteredRecipes} deleteRecipe={deleteRecipe} />} 
          />
          <Route 
            path="/recipe/:id" 
            element={<RecipeDetail recipes={recipes} />} 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
