import React, { useEffect, useState } from "react";
import APIResults from '../../components/APIResults/APIResults';
import MovieNominations from '../../components/MovieNominations/MovieNominations';
import { Route, Link, Redirect, Switch } from 'react-router-dom'
import { Menu, Form, Grid, Divider, Segment, Header, Icon, Container, Image, Modal, Button } from "semantic-ui-react";


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
    <Menu inverted size='huge'>
        <Menu.Item as={Link} to='/'><Icon name='home'/>Home</Menu.Item>
        <Menu.Item as={Link} to='/vote'><Icon name='search plus'/>Search/Vote</Menu.Item>
        <Menu.Item as={Link} to='/credits' position='right'><Icon name='hand point right'/>Credits</Menu.Item>
    </Menu>
      <Segment size='large' color='yellow' padded>
      <Header as='h2' floated='left'>
        <Icon name='trophy'/>
        <Header.Content>
          The Shoppies
          <Header.Subheader>Nominate your top 5 films!</Header.Subheader>
        </Header.Content>
      </Header>
      {(movieNomination.length < 5) ?
        <Header as='h3' textAlign='right'>
          You have nominated {movieNomination.length} movies. Total needed: 5
        </Header>
      : 
      <Modal trigger={<Button color='green'>Thanks for voting!</Button>} dimmer='blurring'>
        <Modal.Header>Thanks for your submission!</Modal.Header>
        <Modal.Content image>
            <Image src='https://media0.giphy.com/media/l1Lc1Kn9hImgpx5Re/giphy.gif'/>
            <Modal.Description>
                <Header>We have recorded your votes</Header>
                <p>Please stay tuned for The Shoppies to reveal final results, coming soon!</p>
            </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
            <Button
                as={Link} to='/'
                content="Back to homepage"
                labelPosition='right'
                icon='video'
                color='blue'
            />
            </Modal.Actions>
      </Modal>
    }
      </Segment>
      <Segment placeholder color='red' padded>
        <Grid columns={2} stackable>
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
