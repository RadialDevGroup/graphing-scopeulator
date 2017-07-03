import React, { Component } from 'react';

class Feature extends Component {
  render() {
    const {key, name, value, cost} = this.props.feature;
    const change = (prop) => (e) => this.props.change(prop, e.target.value);
    return (
      <div className="feature">
        {key}: <input value={name} onChange={change('name')}/><br/>
        Value: <input type="number" value={value} onChange={change('value')} min="0" max="4" step="0.1"/>
        Effort: <input type="number" value={cost} onChange={change('cost')} min="0" max="4" step="0.1"/>
      </div>
    );
  }
}

export default Feature;
