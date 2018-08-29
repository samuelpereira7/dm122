import React, { Component } from 'react';
import Props from './Props'
import ElementState from './ElementState';
import Render from './Render';

class App extends Component {
  constructor(props){
    super(props);

    this.title = "DM122";
  }

  render() {
    return (
      <div>
        <Props title={this.title}/>
        <ElementState />
        <Render />
      </div>
    );
  }
}

export default App;
