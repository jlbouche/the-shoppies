import React, { useEffect, useState } from "react";
import { Route, Link, Redirect, Switch } from 'react-router-dom'
import APIResults from '../../components/APIResults/APIResults';
import MovieNominations from '../../components/MovieNominations/MovieNominations';
import Credits from '../Credits/Credits'
import Home from '../Home/Home'
import SearchAndVote from '../SearchAndVote/SearchAndVote'
import { Form, Grid, Divider, Segment, Header, Icon, Container, Image, Menu } from "semantic-ui-react";

import './App.css';

function App() {
  

  return (
    <div className="App">
      <Menu pointing>
        <Menu.Item as={Link} to='/'>Home</Menu.Item>
        <Menu.Item as={Link} to='/vote'>Search/Vote</Menu.Item>
        <Menu.Item as={Link} to='/credits' position='right'>Credits</Menu.Item>
      </Menu>
      <Container>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route
            path='/vote'
            render={() => <SearchAndVote />}
          />
          <Route path='/credits' 
            render={() => <Credits />}
          />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
