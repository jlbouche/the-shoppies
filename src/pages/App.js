import React, { useEffect, useState } from "react";
import APIResults from '../components/APIResults/APIResults';
import { Form } from "semantic-ui-react";

import './App.css';

function App() {
  const [movieData, setMovieData] = useState("");
  const [searchText, setSearchText] = useState("");
  const [movieNomination, setMovieNomination] = useState([]);

  const handleChange = (e) => {
    let search = e.target.value;
    console.log(search)
    setSearchText(search);
    console.log(searchText);
  }


  useEffect(() => {
    if ((searchText.length <= 10) && (searchText.length >=3)){
      const movieUrl = `https://www.omdbapi.com/?s=${searchText}&apikey=98e3fb1f`;
      console.log(movieUrl);
      fetch(movieUrl)
        .then((res) => res.json())
        .then((data) => {
          if (data.Response === "True") {
            setMovieData(data)
          }
          else {
            setMovieData(null);
          }
        });
    }
  }, [searchText]);
  
  return (
    <div className="App">
      <Form>
            <Form.Field>
                <label>Search Movies</label>
                <input onChange={handleChange}/>
            </Form.Field>
        </Form>
      {movieData ? <APIResults movie={movieData} /> : null}
    </div>
  );
}

export default App;
