import React, { Component } from 'react';
import FileSaver from 'file-saver';

import logo from './logo.svg';
import './App.css';

import Graph from './components/graph.js';
import List from './components/list.js';

class App extends Component {
  state = {features: []}

  setFeatures = (features=[]) => this.setState({features})

  download = () => {
    const blob = new Blob([JSON.stringify(this.state.features)], {type: 'text/json'});
    FileSaver.saveAs(blob, `valuation.json`);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Project Valuator</h2>
          <button onClick={this.download}>Download</button>
        </div>
        <Graph features={this.state.features}/>
        <List features={this.state.features} setFeatures={this.setFeatures}/>
      </div>
    );
  }
}

export default App;
