import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class AuthForm extends React.Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    activeUser: PropTypes.string.isRequired,
    logout: PropTypes.func.isRequired,
  };

  state = {
    username: {
      value: '',
      isValid: true,
    },
    password: {
      value: '',
      isValid: true,
    },
  };

  handleInputChange = (event) => {
    event.persist();
    const { name, value } = event.target;

    this.setState(prevState => ({
      [name]: {
        ...prevState[name],
        value,
      },
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { username, password } = this.state;

    // eslint-disable-next-line
    this.props.onSubmit(username.value, password.value);
  };

  render() {
    const { isAuthenticated, activeUser, logout } = this.props;
    const { username, password } = this.state;

    return (
      <React.Fragment>
        {!isAuthenticated ? (
          <form className="form-inline" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    name="username"
                    placeholder="Username"
                    autoComplete="username"
                    value={username.value}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="********"
                    value={password.value}
                    autoComplete="password"
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="col">
                <button className="btn btn-primary" type="submit">
                  Sign in
                </button>
              </div>
            </div>
          </form>
        ) : (
          <div className="row align-items-center">
            <div className="col">
              <b>{activeUser}</b>
            </div>
            <div className="col">
              <button className="btn btn-link" type="button" onClick={logout}>
                <Link to="/">Log out</Link>
              </button>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default AuthForm;
