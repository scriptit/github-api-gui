import React, { Component, PropTypes } from 'react';

import ObjectDescription from './object-description';
import ObjectPreview from './object-preview';

const DEFAULT_EXPANDED_TREE = {};

function isExpandable(data){
  return (typeof data === 'object' && data !== null && Object.keys(data).length > 0);
}

export default class ObjectInspector extends Component {

  constructor(...args) {
    super(...args);
    this.handleClick = this.handleClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  
  shouldComponentUpdate(nextProps) {
    return (
      nextProps.data !== this.props.data ||
      nextProps.expandedTree !== this.props.expandedTree ||
      nextProps.expandedDepth !== this.props.expandedDepth ||
      nextProps.depth !== this.props.depth ||
      nextProps.overrideLength !== this.props.overrideLength
    );
  }

  handleClick() {
    if (isExpandable(this.props.data)) {
      let oldValue = this.props.expandedTree;
      this.props.onChange({
        ...oldValue,
        expanded: !this.getExpanded()
      }, this.props.name);
    }
  }

  componentWillMount(){
    if (typeof React.initializeTouchEvents === 'function') {
      React.initializeTouchEvents(true);
    }
  }

  getExpanded() {
    if (typeof this.props.expandedTree.expanded === 'boolean') {
      return this.props.expandedTree.expanded;
    }
    if (this.props.expandedDepth >= this.props.depth) {
      return true;
    }
    return false;
  }

  onChange(newValue, name) {
    let oldValue = this.props.expandedTree;
    this.props.onChange({
      ...oldValue,
      ['!' + name]: newValue
    }, this.props.name);
  }

  _renderProperty(propertyName, propertyValue) {
    if (!isExpandable(propertyValue)) {
      return (
        <BasicProperty
          key={propertyName}
          name={propertyName}
          data={propertyValue}
        />
      );
    }
    return (
      <ObjectInspector expandedTree={this.props.expandedTree['!' + propertyName]}
        onChange={this.onChange}
        expandedDepth={this.props.expandedDepth}
        depth={this.props.depth + 1}
        key={propertyName}
        name={propertyName}
        data={propertyValue}/>
    );
  }

  render() {
    const data = this.props.data;
    const name = this.props.name;

    const expanded = isExpandable(data) && this.getExpanded();

    const expandGlyph = isExpandable(data) ? (expanded ? '▼' : '▶') : (typeof name === 'undefined' ? '' : ' ');

    let propertyNodesContainer;
    if(expanded){
      let propertyNodes = [];
      if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
          propertyNodes.push(this._renderProperty('' + i, data[i]));
        }
      } else {
        for(let propertyName in data){
          if(data.hasOwnProperty(propertyName)){
            propertyNodes.push(this._renderProperty(propertyName, data[propertyName]));
          }
        }
      }
      propertyNodesContainer = (<div className="ObjectInspector-property-nodes-container">{propertyNodes}</div>);
    }

    return (
      <div className="ObjectInspector">
        <span className="ObjectInspector-property" onTouchStart={this.handleClick} onClick={this.handleClick}>
          <span className="ObjectInspector-expand-control ObjectInspector-unselectable">{expandGlyph}</span>
          {
            typeof name !== 'undefined'
            ? (
              <span>
                <span className="ObjectInspector-object-name">{name}</span>
                <span>: </span>
                <ObjectDescription object={data} overrideLength={this.props.overrideLength} />
              </span>
            )
            : <ObjectPreview object={data}/>
          }
        </span>
        {propertyNodesContainer}
      </div>
    );
  }
}


ObjectInspector.propTypes = {
  name: PropTypes.string,
  data: PropTypes.any,
  depth: PropTypes.number,
  expandedDepth: PropTypes.number,
  expandedTree: PropTypes.object,
  // if the top level entry is a named array, you can override the length used in the description here
  overrideLength: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

ObjectInspector.defaultProps = {
  name: undefined,
  data: undefined,
  depth: 0,
  expandedDepth: -1,
  expandedTree: DEFAULT_EXPANDED_TREE
};

function BasicProperty(props) {
  return (
    <div className="ObjectInspector">
      <span className="ObjectInspector-property">
        <span className="ObjectInspector-expand-control ObjectInspector-unselectable"> </span>
        <span>
          <span className="ObjectInspector-object-name">{props.name}</span>
          <span>: </span>
          <ObjectDescription object={props.data} />
        </span>
      </span>
    </div>
  );
}
BasicProperty.propTypes = {
  name: PropTypes.string,
  data: PropTypes.any
};