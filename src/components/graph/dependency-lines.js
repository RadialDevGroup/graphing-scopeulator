import _ from 'lodash';
import React from 'react';

export default ({features, xScale, yScale, GRAPH_MARGIN, GRAPH_HEIGHT, GRAPH_WIDTH}) => {
  const connections = _.compact(_.flatten(features.map(({key, dependencies=''}) => (
    dependencies.split('').map((d) => {
      const start = _.find(features, {key});
      const end = _.find(features, {key: d});
      return start && end ? [start, end] : null;
    })
  ))));
  const xFor = ({cost}) => cost * xScale + GRAPH_MARGIN;
  const yFor = ({value}) => value * yScale + GRAPH_MARGIN;
  return (
    <g className="dependency-lines">
      {connections.map(([start, end]) => (
        <line key={start.key+end.key}
          className="dependency-line"
          x1={xFor(start)} y1={-yFor(start)}
          x2={xFor(end)} y2={-yFor(end)}/>
      ))}
    </g>
  );
}
