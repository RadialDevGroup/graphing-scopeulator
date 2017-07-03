import _ from 'lodash';
import React from 'react';

export default ({xScale, yScale, GRAPH_MARGIN, GRAPH_HEIGHT, GRAPH_WIDTH}) => {
  return (
    <g className="scheduleLines">
      {_.times(4).map((i) => {
        const yAnchor = (i+0.5)*yScale + GRAPH_MARGIN;
        const xAnchor = ((5-(i+1))/2)*xScale + GRAPH_MARGIN;
        return <line key={i} x1={GRAPH_MARGIN} y1={-yAnchor} y2={-GRAPH_HEIGHT+GRAPH_MARGIN*2} x2={xAnchor}/>;
      })}
      {_.times(5).map((i) => {
        const yAnchor = ((i+0.5)/2)*yScale + GRAPH_MARGIN;
        const xAnchor = ((5+(i))/2)*xScale + GRAPH_MARGIN;
        return <line key={i} x1={yAnchor} y1={-GRAPH_MARGIN} y2={-GRAPH_HEIGHT+GRAPH_MARGIN*2} x2={xAnchor}/>;
      })}
      {_.times(4).map((i) => {
        const yAnchor = ((i+5.5)/2)*yScale + GRAPH_MARGIN;
        const yIntercept = ((-i+3.5))*yScale + GRAPH_MARGIN;
        return <line key={i} x1={yAnchor} y1={-GRAPH_MARGIN} y2={-yIntercept} x2={GRAPH_HEIGHT-GRAPH_MARGIN*2}/>;
      })}
    </g>
  );
}
