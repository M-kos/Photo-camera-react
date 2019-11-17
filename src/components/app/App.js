import React, { Component } from 'react';
import './App.css';

import Home from '../home/Home';
import WebcamCapture from '../webcamCapture/WebcamCapture';
import History from '../history/history';

class App extends Component{

  state = {
    isCameraEnter: false,
    imgArr: []
  }

  componentDidMount() {
    let allImg = [];

    for(let i = 0; i < localStorage.length; i++) {
      allImg.push({ 
        id: localStorage.key(i), 
        imgSrc: localStorage.getItem(localStorage.key(i)) 
      });
    }

    allImg.sort((a, b) => {
      return a.id - b.id;
    });

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
      return { imgArr: [...prevState.imgArr, {id: key, imgSrc: newImg}] }
    });
  }

  onClearHistory = () => {
    localStorage.clear();
    this.setState({
      imgArr: []
    });
  }

  render() {
    const { isCameraEnter, imgArr } = this.state;

    return (
      <div className="App">

        {isCameraEnter ? 
          <WebcamCapture onEnter={this.onEnter} onCapture={this.onCapture} /> : <Home onEnter={this.onEnter} onClearHistory={this.onClearHistory} btnClassName={imgArr.length ? "redBtn" : "grayBtn"}/>}

        {imgArr ? <History imgArr={imgArr} /> : null}

      </div>
    );
  }
}

export default App;
