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
