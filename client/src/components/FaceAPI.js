import React from "react";
import './FaceAPI.css'
import Webcam from './Webcam'


function faceAPI() {
    return(
        <>
            <Webcam />
            <div id='mood'>
            </div>
            <div id='remedie'>
            </div>
        </>
    )
}

export default faceAPI;