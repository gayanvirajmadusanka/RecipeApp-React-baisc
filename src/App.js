import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const APP_ID = "1171c2b3";
  const APP_KEY = "1cee62e11cfd2b85dccba39f00fca2af";
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default App;
