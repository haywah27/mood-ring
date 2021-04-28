import React, { useState } from "react";
import Webcam from "react-webcam";
import FaceAPI from "./FaceAPI";
import { Button } from "react-bootstrap";
import "./Webcam.css";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

const WebcamCapture = ({ setMoodState, setIsLoaded, setIsLoading }) => {
  const [viewCaptureButton, setViewCaptureButton] = useState(true);
  const [externalImgSrc, setExternal] = useState({
    source: "",
  });

  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    const imgEl = document.getElementById("imageUpload");
    setExternal({ source: imageSrc });
    setViewCaptureButton(true);
    setIsLoaded(false);
    setIsLoading(true);
    FaceAPI(imgEl).then((detections) => {
      setMoodState(detections);
      setViewCaptureButton(false);
      setIsLoaded(true);
      setIsLoading(false);
    });
  }, [webcamRef]);

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
      { externalImgSrc.source != "" ?
        <img
        className="border"
        src={externalImgSrc.source}
        width="720px"
        height="406px"
        id="imageUpload"
        alt="Face will render here"
        />
        :
        <img
        style={{display: "none"}}
        className="border"
        src={externalImgSrc.source}
        width="720px"
        height="406px"
        id="imageUpload"
        alt="Face will render here"
        />
      }
      <br />
      {viewCaptureButton && (
        <Button
          className="moodButton btn-huge"
          onClick={() => {
            capture();
          }}
        >
          Capture photo
        </Button>
      )}
    </>
  );
};

export default WebcamCapture;
