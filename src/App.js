import React, {useState} from "react";
import axios from "axios";
import PhotoCard from './components/PhotoCard.js';
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [explanation, setExplanation] = useState("");
  // console.log("top")
  axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
  .then(res => {
    // console.log(res.data);
    setTitle(res.data.title)
    setUrl(res.data.url)
    setExplanation(res.data.explanation)
  });
  // console.log("bottom");
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <PhotoCard title={title}
                 url={url}
                 explanation={explanation}
      />
    </div>
  );
}

export default App;
