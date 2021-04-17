import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";
import FaceAPI from "./FaceAPI";
import { Button } from "react-bootstrap";
import LoadingSpinner from "../Spinner/LoadingSpinner";
import "./Webcam.css";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

const WebcamCapture = ({ setMoodState }) => {
  const [externalImgSrc, setExternal] = useState({
    source: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const loadingHandler = () => {
    setIsLoading((current) => !current);
  };
  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);

  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    const imgEl = document.getElementById("imageUpload");
    setExternal({ source: imageSrc });
    FaceAPI(imgEl).then((detections) => {
      setMoodState(detections);
      setIsLoading((current) => !current);
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
      <img
        className="border"
        src={externalImgSrc.source}
        width="720px"
        height="406px"
        id="imageUpload"
        alt="Face will render here"
      />
      <br />
      <Button
        className="moodButton"
        onClick={() => {
          loadingHandler();
          capture();
        }}
      >
        Capture photo
      </Button>
      {isLoading ? <LoadingSpinner /> : null}
    </>
  );
};

export default WebcamCapture;
