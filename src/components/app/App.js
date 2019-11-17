import React, { Component } from 'react';
import './App.css';

import Home from '../home/Home';
import WebcamCapture from '../webcamCapture/WebcamCapture';

class App extends Component{

  state = {
    isCameraEnter: false,
    img2: ''
  }

  onEnter = (e) => {
    e.preventDefault();

    this.setState(
      { isCameraEnter: !this.state.isCameraEnter }
    );
  };

  render() {
    const { isCameraEnter } = this.state;

    return (
      <div className="App">
        {isCameraEnter ? <WebcamCapture /> : <Home onEnter={this.onEnter}/>}
      </div>
    );
  }
}

export default App;
