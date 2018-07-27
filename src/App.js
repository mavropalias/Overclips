import React from 'react';
import { Switch, Route } from 'react-router-dom';

import QueryClips from './components/QueryClips';
import Clip from './components/Clip';
import Header from './components/Header';

import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={QueryClips} />
          <Route exact path="/:id" component={Clip} />
        </Switch>
      </React.Fragment>
    );
  }
}
