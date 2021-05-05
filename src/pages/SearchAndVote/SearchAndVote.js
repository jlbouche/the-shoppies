import React, { useEffect, useState } from "react";
import APIResults from '../../components/APIResults/APIResults';
import MovieNominations from '../../components/MovieNominations/MovieNominations';
import { Form, Grid, Divider, Segment, Header, Icon, Container, Image } from "semantic-ui-react";


function SearchAndVote() {
  const [movieData, setMovieData] = useState("");
  const [searchText, setSearchText] = useState("");
  const [movieNomination, setMovieNomination] = useState([]);

  const addNomination = (nomination) => {
    if (movieNomination.length < 5) {
      setMovieNomination([...movieNomination, nomination]);
    }
    console.log(movieNomination)
  };

  const removeNomination = (index) => {
    const movieNominationArray = movieNomination.filter((d, i) => i !== index);
    setMovieNomination(movieNominationArray);
  }

  const handleChange = (e) => {
    let search = e.target.value;
    console.log(search)
    setSearchText(search);
    console.log(searchText);
  }


  useEffect(() => {
    if (searchText.length >= 3) {
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
      <Segment>
      <Header as='h2' floated='left'>
        <Icon name='trophy'/>
        <Header.Content>
          The Shoppies
          <Header.Subheader>Nominate your top 5 films!</Header.Subheader>
        </Header.Content>
      </Header>
      {(movieNomination.length===5) ? 
        <Header as='h2' floated='right'>
          <Header.Content>
            <Image src='' size='small' floated='right'/>
            Thanks for your nominations! Stay tuned for final results.
          </Header.Content>
        </Header>
      : (movieNomination.length < 5) ?
        <Header as='h3' textAlign='right'>
          You have nominated {movieNomination.length} movies. Total needed: 5
        </Header>
      : null}
      </Segment>
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
              <APIResults movie={movieData} addNomination={addNomination} movieNomination={movieNomination}/> 
            : searchText ? <Container>Sorry, no results for {searchText}</Container>
            : null}
          </Grid.Column>
          <Grid.Column >
            <Header as='h2'>Nominations:</Header>
            <MovieNominations movieNomination={movieNomination} removeNomination={removeNomination}/>
          </Grid.Column>
        </Grid>
        <Divider vertical>-</Divider>
      </Segment>
    </div>
  );
}

export default SearchAndVote;
