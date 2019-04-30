import React from "react";
import AuthForm from "./AuthForm";

const styles = {
  headerStyle: {
    padding: "15px 0",
    borderBottom: "1px solid #eee"
  }
};

const Header = ({ isAuthenticated, activeUser, auth, logout }) => {
  return (
    <header style={styles.headerStyle}>
      <div className="container-fluid">
        <div className="row justify-content-end align-items-center">
          {isAuthenticated && (
            <div className="col-auto">
              <button className="btn btn-success">Create Ad</button>
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
};

export default Header;
