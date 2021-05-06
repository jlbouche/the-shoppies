import React, { useEffect, useState } from "react";
import { Route, Link, Redirect, Switch } from 'react-router-dom'
import APIResults from '../../components/APIResults/APIResults';
import MovieNominations from '../../components/MovieNominations/MovieNominations';
import Credits from '../Credits/Credits'
import Home from '../HomePage/HomePage'
import SearchAndVote from '../SearchAndVote/SearchAndVote'

import './App.css';

function App() {

  return (

    <> 
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
        </>
  );
}

export default App;
