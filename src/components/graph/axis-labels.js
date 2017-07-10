import _ from 'lodash';
import React from 'react';

const Label = ({x, y, size}) => (
  <circle className="axis-label-symbol" cx={x} cy={y} r={size*(size*2/3)+1}/>
);

export default ({xScale, yScale, GRAPH_MARGIN, GRAPH_HEIGHT, GRAPH_WIDTH}) => {
  return (
    <g className="axis-labels">
      {_.times(4).map((i) => {
        const yAnchor = (i+1)*yScale + GRAPH_MARGIN;
        return <Label key={i} x={25} y={-yAnchor} size={i+1}/>;
      })}
      {_.times(4).map((i) => {
        const xAnchor = (i+1)*xScale + GRAPH_MARGIN;
        return <Label key={i} x={xAnchor} y={-25} size={i+1}/>;
      })}
    </g>
  );
}
