import _ from 'lodash';

const letters = String.fromCharCode(...Array(91).keys()).slice(65).split('');

export const setValue = (list, key, prop, newValue) => {
  return list.map((item) => {
    if (item.key === key) {
      return {...item, [prop]: newValue};
    } else {
      return item;
    }
  });
}

export const newItem = (features, properties={}) => {
  const maxLetterIndex = _.max([...features.map(({key}) => letters.indexOf(key)), -1]);
  const nextLetter = letters[maxLetterIndex + 1];
  return {key: nextLetter, name: '', value: 0, cost: 0, dependencies: '', ...properties};
}

export const appendItem = (features, properties={}) => {
  return [...features, newItem(features, properties)];
}

export const isLast = (features, key) => {
  return _.findIndex(features, (f) => f.key === key) === features.length - 1;
}

export const focusNextItem = (features, key) => {
  const nextKey = letters[letters.indexOf(key) + 1];
  return features.map((feature) => ({...feature, focus: feature.key === nextKey}));
}

export const focusPreviousItem = (features, key) => {
  const nextKey = letters[letters.indexOf(key) - 1];
  return features.map((feature) => ({...feature, focus: feature.key === nextKey}));
}

export const focusFirst = ([first={}, ...features]=[]) => {
  return [{...first, focus: true}, ...features];
}
