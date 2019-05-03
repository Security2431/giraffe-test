import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import AdList from './AdList';
import MainWrapper from './MainWrapper';
import ErrorMessage from './ErrorMessage';

class HomePage extends React.Component {
  static propTypes = {
    activeUser: PropTypes.string.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    ads: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      author_name: PropTypes.string.isRequired,
      created_at_datetime: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
    auth: PropTypes.func.isRequired,
    recieveAuth: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    fetchAllAds: PropTypes.func.isRequired,
    deleteAd: PropTypes.func.isRequired,
    error: PropTypes.instanceOf(Error),
  };

  static defaultProps = {
    ads: null,
    error: null,
  };

  componentDidMount() {
    const { recieveAuth, fetchAllAds } = this.props;

    recieveAuth();
    fetchAllAds();
  }

  render() {
    const {
      auth, isAuthenticated, logout, activeUser, deleteAd, ads, error,
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
        <ErrorMessage error={error} />
      </React.Fragment>
    );
  }
}

export default HomePage;
