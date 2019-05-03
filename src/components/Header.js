import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthForm from './AuthForm';

const styles = {
  headerStyle: {
    padding: '15px 0',
    borderBottom: '1px solid #eee',
  },
};

const Header = ({
  isAuthenticated, activeUser, auth, logout,
}) => (
  <header style={styles.headerStyle}>
    <div className="container-fluid">
      <div className="row justify-content-end align-items-center">
        {isAuthenticated && (
          <div className="col-auto">
            <Link to="/edit">
              <button className="btn btn-danger" type="button">
                Create Ad
              </button>
            </Link>
          </div>
        )}

        <div className="col-auto">
          <AuthForm
            isAuthenticated={isAuthenticated}
            activeUser={activeUser}
            onSubmit={auth}
            logout={logout}
          />
        </div>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  activeUser: PropTypes.string.isRequired,
  auth: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

export default Header;
