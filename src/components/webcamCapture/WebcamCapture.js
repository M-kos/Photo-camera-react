import React, { useState, useRef, useCallback } from 'react';
import './WebcamCapture.css';

import Webcam from "react-webcam";
import Button from '../button/Button';

import face from './face.svg';

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
};

const WebcamCapture = ({ onCapture, onEnter }) => {
    const webcamRef = useRef(null);

    const capture = useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            const key = Date.now();
            localStorage.setItem(key, imageSrc);
            onCapture(key);
        },
        [webcamRef]
    );
    return (
        <div className="webcamCapture">
            <div className="video-container">
                <Webcam
                    audio={false}
                    height={720}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={1280}
                    videoConstraints={videoConstraints}
                    mirrored={false}
                    onUserMediaError={onEnter}
                />
                <img className="face" src={face} alt="face" />
            </div>
            <div className="btn-group">
                <Button btnClassName="greenBtn" onBtnClick={capture} btnTitle="Capture"/>
                <Button btnClassName="whiteBtn" onBtnClick={onEnter} btnTitle="Back" />
            </div>
        </div>
    );
};

export default WebcamCapture;