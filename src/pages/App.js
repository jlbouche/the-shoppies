import React, { useEffect, useState } from "react";
import Form from '../components/Form/Form';

import './App.css';

function App() {
  const [movieData, setMovieData] = useState("");
  const [movieTitle, setMovieTitle] = useState("");
  const [movieNomination, setMovieNomination] = useState([]);


  
  return (
    <div className="App">
      <Form handleChange={handleChange}/>
    </div>
  );
}

export default App;
