import React from 'react';
import Header from './Header';
import AdList from './AdList';
import MainWrapper from './MainWrapper';

class HomePage extends React.Component {
  componentDidMount() {
    const { recieveAuth, fetchAllAds } = this.props;

    recieveAuth();
    fetchAllAds();
  }

  render() {
    const {
      auth, isAuthenticated, logout, activeUser, deleteAd, ads,
    } = this.props;

    return (
      <React.Fragment>
        <Header
          activeUser={activeUser}
          auth={auth}
          isAuthenticated={isAuthenticated}
          logout={logout}
        />
        <MainWrapper>
          <AdList activeUser={activeUser} ads={ads} deleteAd={deleteAd} />
        </MainWrapper>
      </React.Fragment>
    );
  }
}

export default HomePage;
