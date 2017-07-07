import React, { Component } from 'react';
import FileSaver from 'file-saver';
import FileReaderInput from 'react-file-reader-input';

import logo from './logo.svg';
import './normalize.css';
import './App.css';

import Graph from './components/graph.js';
import List from './components/list.js';

const initialState = {
  projectName: '',
  features: []
}

class App extends Component {
  state = initialState

  setProjectName = (e) => this.setState({projectName: e.target.value})
  setFeatures = (features=[]) => this.setState({features})

  download = () => {
    const blob = new Blob([JSON.stringify(this.state)], {type: 'text/json'});
    const projectName = this.state.projectName.replace(/\W/g, '-') || 'project';
    FileSaver.saveAs(blob, `${projectName}.json`);
  }
  load = (e, files) => {
    if (files.length) {
      const file = files[0][1];
      const reader = new FileReader();
      reader.onload = ({target: {result}}) => {
        try {
          this.setState(JSON.parse(result));
        } catch (error) {
          alert('invalid file');
        }
      }
      reader.readAsText(file);
    }
  }
  reset = () => this.setState(initialState)

  render() {
    const {projectName, features} = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <div className="menu-right">
            <button onClick={this.download}>save</button>
            <FileReaderInput as="text" onChange={this.load}>
              <button>load</button>
            </FileReaderInput>
            <button onClick={this.reset}>reset</button>
          </div>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
            Graphing Scopeulator:&nbsp;
            <input className="project-name"
              placeholder="project name"
              autoFocus={!projectName}
              value={projectName}
              onChange={this.setProjectName}/>
          </h2>
        </div>
        <Graph features={features}/>
        <List features={features} setFeatures={this.setFeatures}/>
      </div>
    );
  }
}

export default App;
