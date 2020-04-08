import React from "react";
import "./App.css";

const App = () => {
  const ex_req = `https://api.edamam.com/search?q=chicken&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`;

  return (
    <div className="App">
      <form className="search-form">
        <input type="text" className="search-bar" />
        <button type="submit" className="search-btn"></button>
      </form>
    </div>
  );
};

export default App;
