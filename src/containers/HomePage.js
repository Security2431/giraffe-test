import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { auth, recieveAuth, logout } from '../actions/auth';
import {
  fetchAllAds, fetchAd, createAd, deleteAd,
} from '../actions/adv';
import HomePage from '../components/HomePage';
import * as fromAdv from '../reducers/adv';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  activeUser: state.auth.user,
  ads: fromAdv.getValues(state.adv.allAds),
  error: state.services.errors.auth,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    auth,
    recieveAuth,
    logout,
    fetchAllAds,
    fetchAd,
    createAd,
    deleteAd,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
