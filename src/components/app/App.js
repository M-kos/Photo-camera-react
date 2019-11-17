import React, { Component } from 'react';
import './App.css';

import WebcamCapture from '../webcamCapture/WebcamCapture';

class App extends Component{

  state = {
    img: '',
    img2: ''
  }

  render() {
    return (
      <div className="App">
        
        <WebcamCapture />
        
      </div>
    );
  }
}

export default App;
