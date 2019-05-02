/* eslint no-underscore-dangle: 0 */
import React, { Component as ReactComponent } from 'react';
import { users, ads } from '../mock-data';

export default OriginalComponent => class WrappedComponent extends ReactComponent {
  render() {
    return (
      <OriginalComponent
        {...this.props}
        {...this.state}
        signup={this.signup}
        login={this.login}
        auth={this.auth}
        isAuthenticated={this.isAuthenticated()}
        logout={this.logout}
        activeUser={this.activeUser()}
        ads={ads}
        filterSingleAd={this.filterSingleAd}
      />
    );
  }

    signup = (username, password) => {
      localStorage.setItem('activeUser', JSON.stringify({ username, password }));
    };

    login = (username, password, userData) => {
      if (password === userData.password) {
        localStorage.setItem('activeUser', JSON.stringify({ username, password }));
      } else {
        console.error('Check your login/password');
      }
    };

    auth = (username, password) => {
      const userData = users.filter(item => item.username === username)[0];

      if (!userData) {
        this.signup(username, password);
      }

      this.login(username, password, userData);
    };

    isAuthenticated = () => {
      const user = JSON.parse(localStorage.getItem('activeUser'));
      if (!user) return false;

      return true;
    };

    logout = () => {
      localStorage.removeItem('activeUser');
    };

    activeUser = () => {
      const user = JSON.parse(localStorage.getItem('activeUser'));
      if (!user) return null;

      return user.username;
    };

    filterSingleAd = (matchParam) => {
      const {
        params: { adId },
      } = matchParam;

      if (adId) {
        return ads.filter(item => item._id === adId)[0];
      }

      return null;
    };
};
