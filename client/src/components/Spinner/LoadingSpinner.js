import React from "react";
import { Spinner } from "react-bootstrap";
import "./loadingSpinner.css";

function LoadingSpinner() {
  return (
    <>
      <div>
        <Spinner animation="border" variant="info"></Spinner>
        <span className="loadingMsg"> Preparing to Analyze Mood</span>
      </div>
    </>
  );
}

export default LoadingSpinner;
