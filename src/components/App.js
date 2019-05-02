import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import HomePage from './HomePage';
import EditPage from './EditPage';
import AdPage from './AdPage';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/edit/:adId?" component={EditPage} />
      <Route path="/:adId?" component={AdPage} />
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default App;
