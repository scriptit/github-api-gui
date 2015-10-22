'use strict';

import React from 'react';
import storage from 'localforage';
import github from '../lib/github-basic';

function getClient(token) {
  var client = github({
    version: 3,
    auth: token.token,
  });
  client.logout = function () {
    //can't actually delete the token without re-requesting username, password & otp :(
    //return client.delete('/authorizations/:id', {id: token.id}).then(function () {
      return storage.removeItem('auth');
    //});
  };
  return client;
}
export default React.createClass({
  getInitialState() {
    return {
      loading: true,
      twoFactor: false,
      error: null,
      username: '',
      password: '',
      token: '',
    };
  },
  componentDidMount() {
    storage.getItem('auth').done(token => {
      if (token) {
        this.props.onLogin(getClient(token));
      } else {
        this.setState({loading: false});
      }
    }, err => this.setState({loading: false, error: err.message}));
  },
  attemptLogin(e) {
    e.preventDefault();
    this.setState({
      loading: true
    });
    const client = github({
      version: 3,
      auth: {
        username: this.state.username,
        password: this.state.password,
        otp: this.state.token,
      }
    });
    client.post('/authorizations', {
      scopes: [
        'user',
        'user:email',
        'user:follow',
        'public_repo',
        'repo',
        'repo_deployment',
        'repo:status',
        'delete_repo',
        'notifications',
        'gist',
        'read:repo_hook',
        'write:repo_hook',
        'admin:repo_hook',
        'admin:org_hook',
        'read:org',
        'write:org',
        'admin:org',
        'read:public_key',
        'write:public_key',
        'admin:public_key',
      ],
      note: 'github-api-gui',
      //note_url: '',
    }).done(res =>{
      storage.setItem('auth', res);
      this.props.onLogin(getClient(res));
    }, err => {
      var match;
      if (
        err.statusCode === 401 &&
        err.headers['x-github-otp'] &&
        (match = /^required\; *(.*)$/i.exec(err.headers['x-github-otp']))
      ) {
        this.setState({loading: false, twoFactor: match[0], error: null});
      } else if (err.statusCode === 422) {
        client.get('/authorizations').then(authorizations => {
          var token = authorizations.filter(a => a.note === 'github-api-gui')[0];
          return client.delete('/authorizations/:id', {id: token.id});
        }).done(
          () => this.attemptLogin({preventDefault(){}}),
          e => {
            this.setState({loading: false, error: err.message});
          }
        );
      } else {
        this.setState({loading: false, error: err.message});
      }
    });
  },
  render() {
    if (this.state.loading) {
      return <div className="alert alert-info" role="alert">Loading...</div>;
    }
    var form = this.renderForm();
    if (this.state.error) {
      form = React.createElement(
        'div',
        {},
        <div className="alert alert-danger" role="alert">
          <button
            type="button"
            className="close"
            style={{outline: 'none'}}
            onClick={() => this.setState({error: null})}
          ><span>×</span></button>
          {this.state.error}
        </div>,
        form
      );
    }
    return form;
  },
  renderForm() {
    if (this.state.twoFactor) {
      return (
        <form onSubmit={this.attemptLogin}>
          <div className="form-group">
            <label htmlFor="token">Two factor authentication token</label>,
            <input
              type="text"
              id="token"
              className="form-control"
              placeholder="token"
              value={this.state.token}
              onChange={e => this.setState({token: e.target.value})}
            />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
          <button
            type="button"
            className="btn btn-link"
            onClick={e => {
              e.preventDefault();
              this.setState({twoFactor: false, token: ''});
            }}
          >back</button>
        </form>
      );
    }
    return (
      <form onSubmit={this.attemptLogin}>
        <div className="form-group">
          <label htmlFor="username">Username</label>,
          <input
            type="text"
            id="username"
            className="form-control"
            placeholder="username"
            value={this.state.username}
            onChange={e => this.setState({username: e.target.value})}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>,
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="password"
            value={this.state.password}
            onChange={e => this.setState({password: e.target.value})}
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    );
  }
});
