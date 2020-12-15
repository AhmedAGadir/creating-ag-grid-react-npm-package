import React, { Component } from 'react'
import './App.css';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import MyAgGrid from 'dummy-react-npm-module';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <MyAgGrid />
      </div>
    );
  }
}

export default App;
