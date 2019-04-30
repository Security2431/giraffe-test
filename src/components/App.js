import React from "react";
import Header from "./Header";
import AdList from "./AdList";
import MainWrapper from "./MainWrapper";

import "bootstrap/dist/css/bootstrap.min.css";

import { users, ads } from "../mock-data";

const signup = (username, password) => {
  localStorage.setItem("activeUser", JSON.stringify({ username, password }));
};

const login = (username, password, userData) => {
  if (password === userData.password) {
    localStorage.setItem("activeUser", JSON.stringify({ username, password }));
  } else {
    console.error("Check your login/password");
  }
};

const auth = (username, password) => {
  const userData = users.filter(item => {
    return item.username === username;
  })[0];

  if (!userData) {
    signup(username, password);
  }

  login(username, password, userData);
};

const isAuthenticated = () => {
  const user = JSON.parse(localStorage.getItem("activeUser"));
  if (!user) return false;

  return true;
};

const logout = () => {
  localStorage.removeItem("activeUser");
};

const activeUser = () => {
  const user = JSON.parse(localStorage.getItem("activeUser"));
  if (!user) return;

  return user.username;
};

const App = () => (
  <React.Fragment>
    <Header
      isAuthenticated={isAuthenticated()}
      activeUser={activeUser()}
      auth={auth}
      logout={logout}
    />
    <MainWrapper>
      <AdList
        ads={ads}
        isAuthenticated={isAuthenticated()}
        activeUser={activeUser()}
      />
    </MainWrapper>
  </React.Fragment>
);

export default App;
