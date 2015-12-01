import React, { Component } from 'react';

/**
 * A short description of the object
 */
export default function ObjectDescription(props) {
  const object = props.object;
  switch (typeof object){
    case 'number':
      return (<span className="ObjectInspector-object-value-number">{object}</span>);
    case 'string':
      return (<span className="ObjectInspector-object-value-string">&quot;{object}&quot;</span>);
    case 'boolean':
      return (
        object
        ? <span className="ObjectInspector-object-value-boolean">true</span>
        : <span className="ObjectInspector-object-value-boolean">false</span>
      );
    case 'undefined':
      return (<span className="ObjectInspector-object-value-undefined">undefined</span>);
    case 'object':
      if(object === null){
        return (<span className="ObjectInspector-object-value-null">null</span>)
      }
      if(object instanceof Date){
        return (<span>{object.toString()}</span>);
      }
      if(Array.isArray(object)){
        return (<span>{`Array[${props.overrideLength || object.length}]`}</span>);
      }
      return (<span className="ObjectInspector-object-value-object">Object</span>);
    case 'function':
      return (<span>
                <span className="ObjectInspector-object-value-function-keyword">function</span>
                <span className="ObjectInspector-object-value-function-name">&nbsp;{object.name}()</span>
              </span>);
    case 'symbol':
      return (<span className="ObjectInspector-object-value-symbol">Symbol()</span>)
    default:
      return (<span></span>);
  }
}
