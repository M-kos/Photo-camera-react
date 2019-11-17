import React, { Component } from 'react';
import './App.css';

import Home from '../home/Home';
import WebcamCapture from '../webcamCapture/WebcamCapture';

class App extends Component{

  state = {
    img: '',
    img2: ''
  }

  render() {
    return (
      <div className="App">

        <Home />
        
        <WebcamCapture />
        
      </div>
    );
  }
}

export default App;
