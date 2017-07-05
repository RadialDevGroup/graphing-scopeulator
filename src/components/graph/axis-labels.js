import _ from 'lodash';
import React from 'react';

export default ({xScale, yScale, GRAPH_MARGIN, GRAPH_HEIGHT, GRAPH_WIDTH}) => {
  return (
    <g className="axis-labels">
      {_.times(4).map((i) => {
        const yAnchor = (i+1)*yScale + GRAPH_MARGIN;
        return <text key={i} x={10} y={-yAnchor}>{i+1}</text>;
      })}
      {_.times(4).map((i) => {
        const xAnchor = (i+1)*xScale + GRAPH_MARGIN;
        return <text key={i} x={xAnchor} y={-10}>{i+1}</text>;
      })}
    </g>
  );
}
