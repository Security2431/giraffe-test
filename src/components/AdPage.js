import React from 'react';
import Header from './Header';
import MainWrapper from './MainWrapper';
import AdListItem from './AdListItem';
import Auth from '../decorators/auth';

// eslint-disable-next-line
class AdPage extends React.Component {
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
          <div className="col-md-6 col-lg-5">
            <AdListItem activeUser={activeUser} {...filterSingleAd(match)} />
          </div>
        </MainWrapper>
      </React.Fragment>
    );
  }
}

export default Auth(AdPage);
