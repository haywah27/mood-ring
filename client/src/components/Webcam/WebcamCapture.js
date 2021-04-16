import React, { useState } from "react";
import Webcam from "react-webcam";
import FaceAPI from './FaceAPI';
import { Button } from "react-bootstrap";
import "./Webcam.css";

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
        height={406}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={720}
        videoConstraints={videoConstraints}
        className="border"
      />
      <br />
      <img className="border" src={externalImgSrc.source} width="720px" height="406px" id="imageUpload" alt="This will be your face"/>
      <br />
      <Button onClick={capture}>Capture photo</Button>
    </>
  );
};

export default WebcamCapture