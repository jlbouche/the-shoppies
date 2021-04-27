import React, { useEffect, useState } from "react";
import SearchForm from '../components/SearchForm/SearchForm';
import APIResults from '../components/APIResults/APIResults';

import './App.css';

function App() {
  const [movieData, setMovieData] = useState("");
  const [movieTitle, setMovieTitle] = useState("");
  const [movieNomination, setMovieNomination] = useState([]);


  
  return (
    <div className="App">
      <SearchForm />
      {<APIResults />
    </div>
  );
}

export default App;
