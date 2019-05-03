import React from 'react';
import Header from './Header';
import MainWrapper from './MainWrapper';
import AdListItem from './AdListItem';

class AdPage extends React.Component {
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
