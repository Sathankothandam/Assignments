import './App.css';
import React, {useContext} from "react";
import Navbar from './components/Navbar';
import Body from './components/Body';
import {ThemeContext} from "./context/ThemeContext";

function App() {
  const {isLight} =useContext(ThemeContext);

  return (
    <div className={`App ${isLight ? "light" : "dark"}`}>
      
    
      <Navbar />
        <Body />

        
    </div>
  );
}

export default App;
