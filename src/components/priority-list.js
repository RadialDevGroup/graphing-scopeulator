import _ from 'lodash';
import React from 'react';

const ROTATION = -2.09;
function prioritize({value, cost}) {
  return -cost * Math.sin(ROTATION) + value * Math.cos(ROTATION);
}

export default function PriorityList({features=[]}) {
  const sortedFeatures = _.sortBy(features, [prioritize])
  return (
    <ol className="">
      {sortedFeatures.map(({key, name}) => <li key={key}>{name} ({key})</li>)}
    </ol>
  );
}
