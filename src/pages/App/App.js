import React, { useEffect, useState } from "react";
import { Route, Link, Redirect, Switch } from 'react-router-dom'
import APIResults from '../../components/APIResults/APIResults';
import MovieNominations from '../../components/MovieNominations/MovieNominations';
import Credits from '../Credits/Credits'
import Home from '../HomePage/HomePage'
import About from '../AboutPage/AboutPage'
import SearchAndVote from '../SearchAndVote/SearchAndVote'
import { Form, Grid, Divider, Segment, Header, Icon, Container, Image, Menu } from "semantic-ui-react";

import './App.css';

function App() {
  

  return (
    <div className="App">
      <Menu inverted size='huge'>
        <Menu.Item as={Link} to='/'><Icon name='home'/>Home</Menu.Item>
        <Menu.Item as={Link} to='/about'><Icon name='question'/>About</Menu.Item>
        <Menu.Item as={Link} to='/vote'><Icon name='search plus'/>Search/Vote</Menu.Item>
        <Menu.Item as={Link} to='/credits' position='right'><Icon name='hand point right'/>Credits</Menu.Item>
      </Menu>
      <Container>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route 
            path='/about'
            render={() => <About />}
          />
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
