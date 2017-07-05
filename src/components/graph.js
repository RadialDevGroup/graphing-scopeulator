import React, { Component } from 'react';
import Svg from './graph/svg';
import ScheduleLines from './graph/schedule-lines';
import AxisLabels from './graph/axis-labels';


const GRAPH_WIDTH = 600;
const GRAPH_HEIGHT = 600;
const GRAPH_MARGIN = 50;

const xScale = (GRAPH_WIDTH - (GRAPH_MARGIN*2)) / 5;
const yScale = (GRAPH_HEIGHT - (GRAPH_MARGIN*2)) / 5;

class Graph extends Component {
  state = {
    showLines: false
  }

  toggleShowLines = () => this.setState({showLines: !this.state.showLines})

  render() {
    const {features=[]} = this.props;
    const {showLines} = this.state;
    return (
      <div className="graph">
        <label>
          <input type="checkbox" value={showLines} onChange={this.toggleShowLines}/>
          Show lines
        </label>
        <Svg top={-GRAPH_HEIGHT} width={GRAPH_WIDTH} height={GRAPH_HEIGHT}>
          {showLines && <ScheduleLines xScale={xScale} yScale={yScale} GRAPH_MARGIN={GRAPH_MARGIN} GRAPH_HEIGHT={GRAPH_HEIGHT} GRAPH_WIDTH={GRAPH_WIDTH}/>}
          <AxisLabels xScale={xScale} yScale={yScale} GRAPH_MARGIN={GRAPH_MARGIN} GRAPH_HEIGHT={GRAPH_HEIGHT} GRAPH_WIDTH={GRAPH_WIDTH}/>
          <line x1={GRAPH_MARGIN} x2={GRAPH_MARGIN} y1={-500} y2={-GRAPH_MARGIN} className="axis"/>
          <line x1={GRAPH_MARGIN} x2={500} y1={-GRAPH_MARGIN} y2={-GRAPH_MARGIN} className="axis"/>
          {features.map(({key, name, value, cost}) => {
            const x = cost * xScale + GRAPH_MARGIN;
            const y = value * yScale + GRAPH_MARGIN;
            return <text key={key} x={x} y={-y} className="feature" title={name}>{key}</text>;
          })}
        </Svg>
      </div>
    );
  }
}

export default Graph;
