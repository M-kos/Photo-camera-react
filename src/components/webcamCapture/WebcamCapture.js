import React from 'react';

import Webcam from "react-webcam";
import Button from '../button/Button';

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
};

const WebcamCapture = ({ onCapture, onEnter }) => {
    const webcamRef = React.useRef(null);

    const capture = React.useCallback(
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
            <Webcam
                audio={false}
                height={720}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={1280}
                videoConstraints={videoConstraints}
                mirrored={false}
            />
            <Button btnClassName="greenBtn" onBtnClick={capture} btnTitle="Capture"/>
            <Button btnClassName="whiteBtn" onBtnClick={onEnter} btnTitle="Back" />
        </div>
    );
};

export default WebcamCapture;