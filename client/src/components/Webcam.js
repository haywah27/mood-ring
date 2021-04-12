import React, { useState } from "react";
import Webcam from "react-webcam";
import FaceAPI from '../js/faceAPI'

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

const WebcamCapture = () => {

  let [externalImgSrc, setExternal] = useState('');

  const webcamRef = React.useRef(null);

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setExternal = imageSrc
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
        width={720}
        videoConstraints={videoConstraints}
      />
      <img src={externalImgSrc} width="780px" height="520px" id="imageUpload"/>
      <button onClick={capture}>Capture photo</button>
    </>
  );
};

export default WebcamCapture