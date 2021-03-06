import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter, Route, Redirect } from 'react-router-dom';
import { recieveAuth } from '../actions/auth';

class PrivateRoute extends React.Component {
  static propTypes = {
    component: PropTypes.instanceOf(React.Component).isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    // eslint-disable-next-line
    this.props.recieveAuth();
  }

  render() {
    const { component: Component, isAuthenticated, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={props => (isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location },
            }}
          />
        ))
        }
      />
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    recieveAuth,
  },
  dispatch,
);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(PrivateRoute),
);
