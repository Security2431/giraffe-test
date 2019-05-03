import React from 'react';
import Header from './Header';
import MainWrapper from './MainWrapper';
import EditForm from './EditForm';

class EditPage extends React.Component {
  componentDidMount() {
    const {
      match: { params },
      fetchAd,
      unsetAd,
    } = this.props;

    if (!params.adId) {
      unsetAd();
      return;
    }

    fetchAd(params.adId);
  }

  componentWillReceiveProps(nextProps) {
    const {
      match: { params },
      fetchAd,
      unsetAd,
    } = this.props;
    const { params: nextParams } = nextProps.match;

    if (!nextParams.adId) {
      unsetAd();
      return;
    }

    // If we change route, then fetch ad from ad by adID
    if (nextParams.adId && params.adId !== nextParams.adId) {
      fetchAd(params.adId);
    }
  }

  render() {
    const {
      isAuthenticated, logout, activeUser, createAd, ad,
    } = this.props;

    return (
      <React.Fragment>
        <Header activeUser={activeUser} isAuthenticated={isAuthenticated} logout={logout} />
        <MainWrapper>
          <EditForm activeUser={activeUser} ad={ad} onSubmit={createAd} />
        </MainWrapper>
      </React.Fragment>
    );
  }
}

export default EditPage;
