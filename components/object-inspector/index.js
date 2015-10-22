import React, { Component, PropTypes } from 'react';

import ObjectDescription from './object-description';
import ObjectPreview from './object-preview';

export default class ObjectInspector extends Component {

  static isExpandable(data){
    return (typeof data === 'object' && data !== null && Object.keys(data).length > 0);
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
    if (ObjectInspector.isExpandable(this.props.data)) {
      let oldValue = this.props.expandedTree || {};
      this.props.onChange({
        ...oldValue,
        expanded: !this.getExpanded()
      });
    }
  }

  componentWillMount(){
    if (typeof React.initializeTouchEvents === 'function') {
      React.initializeTouchEvents(true);
    }
  }

  getExpanded() {
    if (this.props.expandedTree && typeof this.props.expandedTree.expanded === 'boolean') {
      return this.props.expandedTree.expanded;
    }
    if (this.props.expandedDepth >= this.props.depth) {
      return true;
    }
    return false;
  }

  onChange(name, newValue) {
    let oldValue = this.props.expandedTree || {};
    this.props.onChange({
      ...oldValue,
      ['!' + name]: newValue
    });
  }

  render() {
    const data = this.props.data;
    const name = this.props.name;

    const expanded = ObjectInspector.isExpandable(this.props.data) && this.getExpanded();

    const expandGlyph = ObjectInspector.isExpandable(data) ? (expanded ? '▼' : '▶') : (typeof name === 'undefined' ? '' : ' ');

    let propertyNodesContainer;
    if(expanded){
      let propertyNodes = [];
      let onProperty = (propertyName) => {
        const propertyValue = data[propertyName];
        if(data.hasOwnProperty(propertyName)){
          propertyNodes.push(<ObjectInspector expandedTree={this.props.expandedTree && this.props.expandedTree['!' + propertyName]}
                                              onChange={newValue => this.onChange(propertyName, newValue)}
                                              expandedDepth={this.props.expandedDepth}
                                              depth={this.props.depth + 1}
                                              key={propertyName}
                                              name={propertyName}
                                              data={propertyValue}></ObjectInspector>);
        }
      }
      if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
          onProperty('' + i);
        }
      } else {
        for(let propertyName in data){
          onProperty(propertyName);
        }
      }
      propertyNodesContainer = (<div style={{paddingLeft:"12px"}} className="ObjectInspector-property-nodes-container">{propertyNodes}</div>);
    }

    return (
      <div className="ObjectInspector">
        <span className="ObjectInspector-property" onTouchStart={this.handleClick.bind(this)} onClick={this.handleClick.bind(this)}>
          <span className="ObjectInspector-expand-control ObjectInspector-unselectable">{expandGlyph}</span>
          {(() => {
            if (typeof name !== 'undefined') {
              return (<span>
                        <span className="ObjectInspector-object-name">{name}</span>
                        <span>: </span>
                        <ObjectDescription object={data} overrideLength={this.props.overrideLength} />
                      </span>);
            }
            else{
              return (<ObjectPreview object={data}/>);
            }
          })()}
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
  objectinspectorid: PropTypes.string
};

ObjectInspector.defaultProps = {
  name: undefined,
  data: undefined,
  depth: 0,
  objectinspectorid: '',
  expandedDepth: -1
};

