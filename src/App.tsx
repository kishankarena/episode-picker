import React, { useContext } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { store } from "./Store";

const App = (props: any): JSX.Element => {
  const {state} = useContext(store)
  return (
    <>
    
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favourite episode !!!</p>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/favs">Favourites: {state.favourites.length}</Link>
        </div>
      </header>
      {props.children}
    </>
  );
};

export default App;
