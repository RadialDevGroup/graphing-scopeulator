import _ from 'lodash';
import React, { Component } from 'react';
import Feature from './feature.js';

const letters = String.fromCharCode(...Array(91).keys()).slice(65).split('');

const setValue = (list, key, prop, newValue) => {
  return list.map((item) => {
    if (item.key === key) {
      return {...item, [prop]: newValue};
    } else {
      return item;
    }
  });
}

const newItem = (features) => {
  const maxLetterIndex = _.max([...features.map(({key}) => letters.indexOf(key)), -1]);
  const nextLetter = letters[maxLetterIndex + 1];
  return [...features, {key: nextLetter, name: '', value: 0, cost: 0, dependencies: ''}];
}

class List extends Component {
  render() {
    const {features=[], setFeatures} = this.props;

    const change = (key) => (prop, newValue) => setFeatures(setValue(features, key, prop, newValue));
    const remove = (key) => () => setFeatures(_.reject(features, {key}));
    const addItem = () => setFeatures(newItem(features))
    return (
      <div className="list">
        {features.map((feature) => <Feature key={feature.key} feature={feature} change={change(feature.key)} remove={remove(feature.key)}/>)}
        <button onClick={addItem}>+ Add Feature</button>
      </div>
    );
  }
}

export default List;
