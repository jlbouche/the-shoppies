import React, { useEffect, useState } from "react";
import APIResults from '../components/APIResults/APIResults';
import {Form} from "semantic-ui-react";

import './App.css';

function App() {
  const [movieData, setMovieData] = useState([]);
  const [movieTitle, setMovieTitle] = useState("");
  const [movieNomination, setMovieNomination] = useState([]);

  const handleChange = (e) => {
    const title = e.target.value;
    console.log(title)
    setMovieTitle(title);
  };

  useEffect(() => {
    const movieUrl = `https://www.omdbapi.com/?t=${movieTitle}&apikey=98e3fb1f`;
    fetch(movieUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovieData(data);
      });
  }, [movieTitle]);
  
  return (
    <div className="App">
      <Form>
            <Form.Field>
                <label>Movie Title</label>
                <input onChange={handleChange}/>
            </Form.Field>
        </Form>
      {movieTitle ? <APIResults movie={movieData}/> : null}
    </div>
  );
}

export default App;
