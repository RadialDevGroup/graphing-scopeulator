import React, { Component } from 'react';

class Feature extends Component {
  render() {
    const {key, name, value, cost, dependencies} = this.props.feature;
    const change = (prop) => (e) => this.props.change(prop, e.target.value);
    return (
      <div className="feature">
        <span className="feature-key">{key}</span>:&nbsp;
        <input className="feature-name" autoFocus={!name} value={name} onChange={change('name')}/><br/>
        Value: <input type="number" value={value} onChange={change('value')} min="0" max="4" step="0.1"/>
        Effort: <input type="number" value={cost} onChange={change('cost')} min="0" max="4" step="0.1"/>
        Deps: <input type="text" value={dependencies} onChange={change('dependencies')}/>
        <button onClick={this.props.remove} className="button-delete">&times;</button>
      </div>
    );
  }
}

export default Feature;
