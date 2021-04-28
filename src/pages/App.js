import React, { useEffect, useState } from "react";
import APIResults from '../components/APIResults/APIResults';
import {Form} from "semantic-ui-react";

import './App.css';

function App() {
  const [movieData, setMovieData] = useState("");
  const [movieTitle, setMovieTitle] = useState("");
  const [movieNomination, setMovieNomination] = useState([]);

  const handleChange = (e) => {
    let title = e.target.value;
    console.log(title)
    setMovieTitle(title);
    console.log(movieTitle);
  }

  useEffect(() => {
    if (movieTitle.length >= 3){
      const movieUrl = `https://www.omdbapi.com/?s=${movieTitle}&apikey=98e3fb1f`;
      fetch(movieUrl)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setMovieData(data);
        });
    }
  }, [movieTitle]);
  
  return (
    <div className="App">
      <Form>
            <Form.Field>
                <label>Movie Title</label>
                <input onChange={handleChange}/>
            </Form.Field>
        </Form>
      {movieData ? <APIResults movie={movieData}/> : null}
    </div>
  );
}

export default App;
