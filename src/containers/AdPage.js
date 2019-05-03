import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import { fetchAd, deleteAd } from '../actions/adv';
import AdPage from '../components/AdPage';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  activeUser: state.auth.user,
  ad: state.adv.ad,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    logout,
    fetchAd,
    deleteAd,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdPage);
