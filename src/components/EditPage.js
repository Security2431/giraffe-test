import React from 'react';
import Header from './Header';
import MainWrapper from './MainWrapper';
import EditForm from './EditForm';
import Auth from '../decorators/auth';

// eslint-disable-next-line
class EditPage extends React.Component {
  render() {
    const {
      isAuthenticated, auth, logout, activeUser, match, filterSingleAd,
    } = this.props;

    return (
      <React.Fragment>
        <Header
          isAuthenticated={isAuthenticated}
          activeUser={activeUser}
          auth={auth}
          logout={logout}
        />
        <MainWrapper>
          <EditForm ad={filterSingleAd(match)} activeUser={activeUser} />
        </MainWrapper>
      </React.Fragment>
    );
  }
}

export default Auth(EditPage);
