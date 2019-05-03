import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import { fetchAd, createAd, unsetAd } from '../actions/adv';
import EditPage from '../components/EditPage';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  activeUser: state.auth.user,
  ad: state.adv.ad,
  // error: state.services.errors.auth
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    logout,
    fetchAd,
    createAd,
    unsetAd,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditPage);
