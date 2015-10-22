'use strict';

import React from 'react';
import github from '../lib/github-basic';
import Login from './login';
import ApiClient from './api-client';

export default React.createClass({
  getInitialState() {
    return {
      client: github({version: 3}),
      authenticated: false
    };
  },
  logout(e) {
    e.preventDefault();
    this.state.client.logout().done(() => {
      this.setState(this.getInitialState());
    });
  },
  render() {
    var auth;
    if (this.state.authenticated === false) {
      auth = (
        <Login
          onLogin={client => this.setState({client: client, authenticated: true})}
        />
      );
    } else {
      auth = (
        <button
          type="button" className="btn btn-default" onClick={this.logout}
        >Logout</button>
      );
    }
    return (
      <div>
        <h1>Unofficial GitHub API GUI</h1>
        <p>
          This is a graphical tool to help explore the functionality of the GitHub API.
          It was made by <a href="http://www.forbeslindesay.co.uk/">Forbes Lindesay</a> and
          is <a href="https://github.com/scriptit/github-api-gui">open source</a> under the MIT license.
          I hope you find it useful!
        </p>
        <h2>Authentication</h2>
        <p>
          Authentication is totally optional, but it will let you play with the full API
          and gives you a much higher rate limit.
        </p>
        {auth}
        <h2>API Client</h2>
        <ApiClient client={this.state.client} />
      </div>
    );
  }
});
