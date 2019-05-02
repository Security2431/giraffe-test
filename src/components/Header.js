import React from 'react';
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

export default Header;
