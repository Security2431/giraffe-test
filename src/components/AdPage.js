import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import MainWrapper from './MainWrapper';
import AdListItem from './AdListItem';

class AdPage extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object.isRequired,
    }).isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    activeUser: PropTypes.string.isRequired,
    ad: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      author_name: PropTypes.string.isRequired,
      created_at_datetime: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
    fetchAd: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    deleteAd: PropTypes.func.isRequired,
  };

  static defaultProps = {
    ad: null,
  };

  componentDidMount() {
    const { match, fetchAd } = this.props;
    const { adId } = match.params;

    fetchAd(adId);
  }

  render() {
    const {
      isAuthenticated, logout, activeUser, deleteAd, ad,
    } = this.props;

    return (
      <React.Fragment>
        <Header activeUser={activeUser} isAuthenticated={isAuthenticated} logout={logout} />

        <MainWrapper>
          <div className="col-md-6 col-lg-5">
            <AdListItem activeUser={activeUser} deleteAd={deleteAd} {...ad} />
          </div>
        </MainWrapper>
      </React.Fragment>
    );
  }
}

export default AdPage;
