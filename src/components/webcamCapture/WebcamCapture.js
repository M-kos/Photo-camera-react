import React from 'react';

import Webcam from "react-webcam";
import Button from '../button/Button';

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
};

const WebcamCapture = (props) => {
    const webcamRef = React.useRef(null);

    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            console.log(imageSrc);
        },
        [webcamRef]
    );
    return (
        <>
            <Webcam
                audio={false}
                height={720}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={1280}
                videoConstraints={videoConstraints}
                mirrored={true}
            />
            <Button btnClassName="greenBtn" onBtnClick={capture} btnTitle="Capture"/>
            <Button btnClassName="whiteBtn" onBtnClick={props.onEnter} btnTitle="Back" />
        </>
    );
};

export default WebcamCapture;