import React from 'react';
import Header from './Header';
import AdList from './AdList';
import MainWrapper from './MainWrapper';
import Auth from '../decorators/auth';

// eslint-disable-next-line
const HomePage = ({ isAuthenticated, activeUser, auth, logout, ads }) => (
  <React.Fragment>
    <Header isAuthenticated={isAuthenticated} activeUser={activeUser} auth={auth} logout={logout} />
    <MainWrapper>
      <AdList activeUser={activeUser} ads={ads} />
    </MainWrapper>
  </React.Fragment>
);

export default Auth(HomePage);
