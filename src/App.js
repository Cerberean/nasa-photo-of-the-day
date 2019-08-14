import React from "react";
import axios from "axios";
import PhotoCard from './components/PhotoCard.js';
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <PhotoCard title="Props title" 
                 url="this is not a url"
                 explanation="some explanation"
      />
    </div>
  );
}

export default App;
