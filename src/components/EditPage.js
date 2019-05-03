import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import MainWrapper from './MainWrapper';
import EditForm from './EditForm';

class EditPage extends React.Component {
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
    logout: PropTypes.func.isRequired,
    fetchAd: PropTypes.func.isRequired,
    createAd: PropTypes.func.isRequired,
    unsetAd: PropTypes.func.isRequired,
  };

  static defaultProps = {
    ad: null,
  };

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
