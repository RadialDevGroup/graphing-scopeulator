import _ from 'lodash';
import React, { Component } from 'react';
import {setValue, appendItem} from '../stateHelpers/feature';

import Feature from './feature.js';

class List extends Component {
  render() {
    const {features=[], setFeatures} = this.props;

    const change = (key) => (prop, newValue) => setFeatures(setValue(features, key, prop, newValue));
    const remove = (key) => () => setFeatures(_.reject(features, {key}));
    const addItem = () => setFeatures(appendItem(features))
    return (
      <div className="list">
        {features.map((feature) => <Feature key={feature.key} feature={feature} change={change(feature.key)} remove={remove(feature.key)}/>)}
        <button onClick={addItem}>+ Add Feature</button>
      </div>
    );
  }
}

export default List;
