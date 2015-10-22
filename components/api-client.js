'use strict';

import util from 'util';
import React from 'react';
import Switch from 'rc-switch';
import createInfiniteScroll from 'react-infinite-scroll';
import api from '../lib/api.js';
import ObjectInspector from './object-inspector';

const InfiniteScroll = createInfiniteScroll(React);

var methods = Object.keys(api).sort();
var pathsByMethod = {};
methods.forEach(function (method) {
  var pathsByLength = {};
  Object.keys(api[method]).sort().forEach(function (path) {
    path = path.split('/');
    for (var i = 2; i <= path.length; i++) {
      pathsByLength[i] = pathsByLength[i] || [];
      var p = path.slice(0, i).join('/');
      if (pathsByLength[i].indexOf(p) === -1) {
        pathsByLength[i].push(p);
      }
    }
  });
  pathsByMethod[method] = pathsByLength;
});

var inputsByParamType = {};

function arrayOfInput(ChildInput, name) {
  return React.createClass({
    displayName: name,
    getInitialState() {
      return {
        nextValue: ''
      };
    },
    addItem(e) {
      e.preventDefault();
      var value = this.props.value || [];
      value = value.concat(this.state.nextValue);
      this.setState(
        {nextValue: ''},
        () => this.props.onChange(value)
      );
    },
    onKeyDown(e) {
      if (e.keyCode === 13) {
        this.addItem(e);
      }
    },
    onRemove(i) {
      var value = this.props.value || [];
      this.props.onChange(value.filter((v, index) => index !== i));
    },
    render() {
      var value = this.props.value || [];
      return (
        <div>
          <ul>
            {
              value.map((val, i) => (
                <li key={i}>
                  <code>{util.inspect(val)}</code>
                  <button
                    type="button"
                    className="close"
                    style={{outline: 'none', float: 'none'}}
                    onClick={() => this.onRemove(i)}
                  ><span>×</span></button>
                </li>
              ))
            }
          </ul>
          <div className="row">
            <div className="col-xs-9" onKeyDown={this.onKeyDown}>
              <ChildInput
                value={this.state.nextValue}
                onChange={nextValue => this.setState({nextValue})}
              />
            </div>
          </div>
          <div className="col-xs-3">
            <button className="btn btn-default btn-block" type="button" onClick={this.addItem}>
              Add
            </button>
          </div>
        </div>
      );
    }
  });
}
inputsByParamType['boolean'] = React.createClass({
  render() {
    return (
      <Switch
        value={this.props.value || false}
        checkedChildren={'T'}
        unCheckedChildren={'F'}
        onChange={e => this.props.onChange(!this.props.value)}
      />
    );
  }
});
inputsByParamType['object'] = React.createClass({
  getInitialState(props) {
    return {
      str: util.inspect(this.props.value),
      invalid: false,
    };
  },
  componentWillReceiveProps(newProps) {
    if (newProps.value !== this.props.value) {
      this.setState({
        str: util.inspect(newProps.value),
        invalid: false,
      });
    }
  },
  render() {
    return (
      <div className={this.state.invalid ? 'has-error' : null}>
        <input
          className="form-control"
          placeholder="JavaScript object"
          value={this.state.str === 'undefined' ? '' : this.state.str}
          onChange={e => {
            this.setState({str: e.target.value},
              () => {
                var value;
                try {
                  value = Function('', 'return (' + e.target.value + ')')();
                  this.setState({invalid: false});
                } catch (ex) {
                  this.setState({invalid: true});
                  return;
                }
                this.props.onChange(value);
              }
            );
          }}
        />
      </div>
    );
  }
});
inputsByParamType['integer'] = React.createClass({
  render() {
    return (
      <input
        type="number"
        className="form-control"
        value={this.props.value || ''}
        onChange={e => this.props.onChange(+e.target.value)}
      />
    );
  }
});
inputsByParamType['string'] = React.createClass({
  displayName: 'string',
  render() {
    return (
      <input
        type="text"
        className="form-control"
        value={this.props.value || ''}
        onChange={e => this.props.onChange(e.target.value)}
      />
    );
  }
});
inputsByParamType['type'] = inputsByParamType['string'];
inputsByParamType['integer || string'] = React.createClass({
  render() {
    return (
      <input
        type="text"
        className="form-control"
        value={this.props.value || ''}
        onChange={e => this.props.onChange(/^\d+$/.test(e.target.value) ? +e.target.value : e.target.value)}
      />
    );
  }
});

inputsByParamType['array<object>'] = arrayOfInput(inputsByParamType['object'], 'array<object>');
inputsByParamType['array<string>'] = arrayOfInput(inputsByParamType['string'], 'array<string>');
inputsByParamType['array'] = arrayOfInput(inputsByParamType['string'], 'array');

methods.reduce(function (types, method) {
  return Object.keys(api[method]).reduce(function (types, path) {
    return types.concat(
      api[method][path].map(
        p => ({path: path, type: p.type})
      ).filter(
        p => !types.some(t => t.type === p.type)
      )
    );
  }, types);
}, []).sort().forEach(function (p) {
  if (!(p.type in inputsByParamType)) {
    console.warn('No editor defined for ' + p.type + '(e.g. ' + p.path + ')');
  }
});

export default React.createClass({
  getInitialState() {
    return {
      method: 'GET',
      path: '/orgs/:org/repos',//'/user',
      paramValues: {'org': 'scriptit'},
      expandedTree: {},
      error: null,
      result: null,
      fullResult: null
    };
  },
  componentWillMount() {
    this._requestId = 0;
  },
  componentWillUnmount() {
    this._requestId = Infinity;
  },
  onSubmit(e) {
    e.preventDefault();
    var id = ++this._requestId;
    this.setState({loading: true, result: null});
    var params = {};
    this.getParams().forEach(
      p => params[p.name] = this.state.paramValues[p.name]
    );
    this.props.client[this.state.method.toLowerCase()](this.state.path, params).done(
      result => {
        if (id !== this._requestId) return;
        if (Array.isArray(result)) {
          this.setState({
            loading: false,
            result: result.slice(0, 10),
            fullResult: result,
            error: null
          });
        } else {
          this.setState({loading: false, result: result, error: null});
        }
      },
      err => {
        if (id !== this._requestId) return;
        this.setState({loading: false, error: err.message});
      }
    );
  },
  render() {
    return (
      <div>
        {this.renderForm()}
        {this.renderResults()}
      </div>
    );
  },
  renderForm() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="row">
          <div className="col-xs-3">
            <select
              className="form-control"
              value={this.state.method}
              onChange={e => this.setState({method: e.target.value})}
            >
              {
                methods.map(method => (<option key={method} value={method}>{method}</option>))
              }
            </select>
          </div>
          <div className="col-xs-6">
            <input
              type="text"
              className="form-control"
              placeholder="path"
              list="paths"
              value={this.state.path}
              onChange={e => this.setState({path: e.target.value})}
            />,
            <datalist id="paths">
              {
                (
                  pathsByMethod[this.state.method][this.state.path.split('/').length] || []
                ).filter(
                  p => p.indexOf(this.state.path) === 0
                ).concat(
                  (
                    pathsByMethod[this.state.method][this.state.path.split('/').length + 1] || []
                  ).filter(p => p.indexOf(this.state.path + '/') === 0)
                ).filter(
                  p => (p !== this.state.path || !!api[this.state.method][this.state.path])
                )/*.slice(0, 10)*/.map(function (p) {
                  return <option key={p} value={p} />;
                })
              }
            </datalist>
          </div>
          <div className="col-xs-3">
            <button type="submit" className="btn btn-primary btn-block">Submit</button>
          </div>
        </div>
        <br />
        {this.renderParams()}
      </form>
    );
  },
  getParams() {
    var params = api[this.state.method][this.state.path];
    if (!params) return [];
    params = params.slice();
    this.state.path.replace(/\:([^\/]+)/g, function (_, name) {
      params.push({name: name, type: 'string', description: '<b>Required</b> url parameter'});
    });
    var namesSeen = {};
    params = params.filter(
      p => {
        if (namesSeen[p.name]) return false;
        return namesSeen[p.name] = true;
      }
    );
    return params;
  },
  renderParams() {
    var params = this.getParams();
    return params.map(p => {
      if (!inputsByParamType[p.type]) {
        return <div className="alert alert-danger" key={p.name}>Unkown field type {p.type}</div>;
      }
      var InputElement = inputsByParamType[p.type];
      return (
        <div className="row" key={p.name} style={{paddingBottom: 10}}>
          <div className="col-xs-1">
            <label>{p.name}</label>
          </div>
          <div className="col-xs-4">
            <InputElement
              value={this.state.paramValues[p.name]}
              onChange={
                value => this.setState({
                  paramValues: {
                    ...this.state.paramValues,
                    [p.name]: value
                  }
                })
              }
            />
          </div>
          <div className="col-xs-7" dangerouslySetInnerHTML={{__html: p.description || ''}} />
        </div>
      );
    });
  },
  renderResults() {
    var loadingIndicator = <div className="alert alert-info" role="alert">Loading...</div>;
    if (this.state.loading) {
      return loadingIndicator;
    }
    if (!this.state.result && this.state.error) {
      return (
        <div className="alert alert-danger" role="alert">
          <button
            type="button"
            className="close"
            style={{outline: 'none'}}
            onClick={() => this.setState({error: null})}
          ><span>×</span></button>
          {this.state.error}
        </div>
      );
    }
    if (!this.state.result) return null;
    var inspector = (
      <ObjectInspector
        data={this.state.result}
        overrideLength={Array.isArray(this.state.result) ? this.state.fullResult.length : null}
        name="Results"
        expandedDepth={1}
        expandedTree={this.state.expandedTree}
        onChange={tree => this.setState({expandedTree: tree})}
      />
    );
    if (!Array.isArray(this.state.result)) return inspector;
    if (this.state.error) {
      loadingIndicator = (
        <div className="alert alert-danger" role="alert">
          <button
            type="button"
            className="btn btn-link alert-link pull-right"
            style={{padding: 0, outline: 'none'}}
            onClick={() => {
              e.preventDefault();
              this._nextPageRequested = false;
              this.nextPage();
            }}
          >retry</button>
          {'Error loading next page: ' + this.state.error}
        </div>
      );
    }
    return (
      <InfiniteScroll
        threshold={500}
        pageStart={this.state.result.length}
        loadMore={this.nextPage}
        hasMore={this.state.fullResult.length > this.state.result.length || this.state.fullResult.getNext}
        loader={loadingIndicator}
      >{inspector}</InfiniteScroll>
    );
  },
  nextPage() {
    if (this._nextPageRequested) return;
    this._nextPageRequested = true;
    if (this.state.result.length < this.state.fullResult.length) {
      var count = this.state.result.length + 10;
      if (count > this.state.fullResult.length) {
        count = this.state.fullResult.length;
      }
      this._nextPageRequested = false;
      this.setState({result: this.state.fullResult.slice(0, count)});
    } else if (this.state.fullResult.getNext) {
      var id = ++this._requestId;
      this.state.fullResult.getNext().done(nextPage => {
        if (id !== this._requestId) return;
        var fullResult = this.state.fullResult.concat(nextPage);
        fullResult.getNext = nextPage.getNext;
        var count = this.state.result.length + 10;
        if (count > fullResult.length) {
          count = fullResult.length;
        }
        this._nextPageRequested = false;
        this.setState({
          result: fullResult.slice(0, count),
          fullResult: fullResult
        });
      }, err => {
        if (id !== this._requestId) return;
        this.setState({error: err.message});
      });
    }
  }
});
