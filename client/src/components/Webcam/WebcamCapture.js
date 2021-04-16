import React, { useState } from "react";
import Webcam from "react-webcam";
import FaceAPI from './FaceAPI'

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

const WebcamCapture = ({ setMoodState }) => {

  const [externalImgSrc, setExternal] = useState({
    source: '',
  });

  const webcamRef = React.useRef(null);

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      const imgEl = document.getElementById('imageUpload')
      setExternal({ source: imageSrc })
      FaceAPI(imgEl).then(detections => setMoodState(detections))
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
      <img src={externalImgSrc.source} width="780px" height="520px" id="imageUpload" alt="This is your face"/>
      <button onClick={capture}>Capture photo</button>
    </>
  );
};

export default WebcamCapture