import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";

const App = () => {
  const APP_ID = "e97bbb39";
  const APP_KEY = "0f77999f7f1bb1a826840efc8073efb2";

  const [Recipes, setRecipes] = useState([]);
  const [Search, setSearch] = useState("");
  const [Query, setQuery] = useState("chicken");

  const getRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${Query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  useEffect(() => {
    getRecipe();
  }, [Query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(Search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          type="text"
          className="search-bar"
          value={Search}
          onChange={updateSearch}
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
      {Recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.uri}
          title={recipe.recipe.label}
          image={recipe.recipe.image}
          cal={Math.round(recipe.recipe.calories)}
        />
      ))}
    </div>
  );
};

export default App;
