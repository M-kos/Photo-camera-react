import React, { Component } from 'react';
import './App.css';

import Home from '../home/Home';
import WebcamCapture from '../webcamCapture/WebcamCapture';

class App extends Component{

  state = {
    isCameraEnter: false,
    imgArr: []
  }

  componentDidMount() {
    let allImg = [];

    for(let i = 0; i < localStorage.length; i++) {
      allImg.push(localStorage.getItem(localStorage.key(i)));
    }

    this.setState({ imgArr: [...allImg] });
  }

  onEnter = (e) => {
    e.preventDefault();

    this.setState(
      { isCameraEnter: !this.state.isCameraEnter }
    );
  };

  onCapture = (key) => {
    const newImg = localStorage.getItem(key);

    this.setState((prevState) => {
      return { imgArr: [...prevState.imgArr, newImg] }
    });
  }

  render() {
    const { isCameraEnter } = this.state;

    return (
      <div className="App">
        {isCameraEnter ? <WebcamCapture onEnter={this.onEnter} onCapture={this.onCapture} /> : <Home onEnter={this.onEnter} />}
      </div>
    );
  }
}

export default App;
