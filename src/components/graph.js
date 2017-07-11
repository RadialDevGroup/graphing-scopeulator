import _ from 'lodash';
import React, { Component } from 'react';
import Svg from './graph/svg';
import ScheduleLines from './graph/schedule-lines';
import DependencyLines from './graph/dependency-lines';
import AxisLabels from './graph/axis-labels';

const GRAPH_WIDTH = 600;
const GRAPH_HEIGHT = 600;
const GRAPH_MARGIN = 50;

const xScale = (GRAPH_WIDTH - (GRAPH_MARGIN*2)) / 5;
const yScale = (GRAPH_HEIGHT - (GRAPH_MARGIN*2)) / 5;

class Graph extends Component {
  state = {
    showLines: false,
    showDependencies: true
  }

  toggleShowLines = () => this.setState({showLines: !this.state.showLines})
  toggleShowDependencies = () => this.setState({showDependencies: !this.state.showDependencies})

  render() {
    const {features=[]} = this.props;
    const {showLines, showDependencies} = this.state;
    const filteredFeatures = _.reject(features, ({value}) => !value);
    return (
      <div className="graph">
        <div style={{maxWidth: '600px', margin: '0 auto'}}>
          <Svg top={-550} width={550} height={550}>
            {showLines && <ScheduleLines xScale={xScale} yScale={yScale} GRAPH_MARGIN={GRAPH_MARGIN} GRAPH_HEIGHT={GRAPH_HEIGHT} GRAPH_WIDTH={GRAPH_WIDTH}/>}
            {showDependencies && <DependencyLines features={filteredFeatures} xScale={xScale} yScale={yScale} GRAPH_MARGIN={GRAPH_MARGIN} GRAPH_HEIGHT={GRAPH_HEIGHT} GRAPH_WIDTH={GRAPH_WIDTH}/>}
            <text x={10} y={-GRAPH_HEIGHT/2} className="axis-label" textAnchor="middle" transform={`rotate(-90, ${10}, ${-GRAPH_HEIGHT/2})`}>Value</text>
            <text x={GRAPH_HEIGHT/2} y={-10} className="axis-label" textAnchor="middle">Effort</text>
            <AxisLabels xScale={xScale} yScale={yScale} GRAPH_MARGIN={GRAPH_MARGIN} GRAPH_HEIGHT={GRAPH_HEIGHT} GRAPH_WIDTH={GRAPH_WIDTH}/>
            <line x1={GRAPH_MARGIN} x2={GRAPH_MARGIN} y1={-500} y2={-GRAPH_MARGIN} className="axis"/>
            <line x1={GRAPH_MARGIN} x2={500} y1={-GRAPH_MARGIN} y2={-GRAPH_MARGIN} className="axis"/>
            {filteredFeatures.map(({key, name, value, cost}) => {
              const x = cost * xScale + GRAPH_MARGIN;
              const y = value * yScale + GRAPH_MARGIN;
              return <text key={key} x={x} y={-y} className="feature" title={name}>{key}</text>;
            })}
          </Svg>
        </div>
        <label>
          <input type="checkbox" checked={showLines} onChange={this.toggleShowLines}/>&nbsp;
          Show lines
        </label>
        &nbsp;&nbsp;
        <label>
          <input type="checkbox" checked={showDependencies} onChange={this.toggleShowDependencies}/>&nbsp;
          Show dependencies
        </label>
      </div>
    );
  }
}

export default Graph;
