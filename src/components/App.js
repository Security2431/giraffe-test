import React from 'react';
import {
  Router, Route, Switch, Redirect,
} from 'react-router-dom';
import PrivateRoute from '../containers/PrivateRoute';
import HomePage from '../containers/HomePage';
import EditPage from '../containers/EditPage';
import AdPage from '../containers/AdPage';
import history from '../utils/history';

const App = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <PrivateRoute path="/edit/:adId?" component={EditPage} />
      <PrivateRoute path="/:adId?" component={AdPage} />
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default App;
