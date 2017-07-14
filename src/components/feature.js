import React, { Component } from 'react';
import {onEnter, onDownArrow, onUpArrow} from '../helpers/events';

class Feature extends Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.feature.focus && this.props.feature.focus) {
      this.titleInput.focus();
    }
  }

  render() {
    const {
      feature: {key, name, value, cost, dependencies},
      focusNext, focusPrevious
    } = this.props;
    const change = (prop) => (e) => this.props.change(prop, e.target.value);
    return (
      <div className="feature">
        <span className="feature-key">{key}</span>:&nbsp;
        <input className="feature-name"
          ref={(node) => this.titleInput = node}
          autoFocus={!name}
          value={name}
          onChange={change('name')}
          onKeyDown={onEnter(focusNext, onDownArrow(focusNext, onUpArrow(focusPrevious)))}/><br/>
        Value: <input type="number" value={value} onChange={change('value')} min="0" max="4" step="0.1"/>
        Effort: <input type="number" value={cost} onChange={change('cost')} min="0" max="4" step="0.1"/>
        Deps: <input type="text" value={dependencies} onChange={change('dependencies')}/>
        <button onClick={this.props.remove} className="button-delete">&times;</button>
      </div>
    );
  }
}

export default Feature;
