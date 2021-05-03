import React, { useEffect, useState } from "react";
import APIResults from '../components/APIResults/APIResults';
import { Form, Grid, Divider, Segment, Header, Icon, Container } from "semantic-ui-react";

import './App.css';

function App() {
  const [movieData, setMovieData] = useState("");
  const [searchText, setSearchText] = useState("");
  const [movieNomination, setMovieNomination] = useState([]);

  const addNomination = (nomination) => {
    
  };

  const removeNomination = (index) => {
    
  }

  const handleChange = (e) => {
    let search = e.target.value;
    console.log(search)
    setSearchText(search);
    console.log(searchText);
  }


  useEffect(() => {
    if ((searchText.length <= 10) && (searchText.length >= 3)) {
      const movieUrl = `https://www.omdbapi.com/?s=${searchText}&apikey=98e3fb1f`.replace(/ /g, "%20");
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
      <Header as='h2' icon textAlign='center'>
        <Icon name='trophy'/>
        <Header.Content>
          The Shoppies
          <Header.Subheader>Nominate your top 5 films!</Header.Subheader>
        </Header.Content>
      </Header>
      <Segment placeholder>
        <Grid columns={2} >
          <Grid.Column>
            <Form >
              <Form.Input
                label='Search Movies:'
                placeholder='Movie title'
                width={6}
                onChange={handleChange}
              />
            </Form>
            <br/>
            {movieData ? 
              <APIResults movie={movieData} addNomination={addNomination}/> 
            : searchText ? <Container>Sorry, no results for {searchText}</Container>
            : null}
          </Grid.Column>
          <Grid.Column >
            <Header as='h4'>Nominations:</Header>
          </Grid.Column>
        </Grid>
        <Divider vertical>-</Divider>
      </Segment>
    </div>
  );
}

export default App;
