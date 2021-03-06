import * as faceapi from "face-api.js";

function faceAPI(imageElement) {
  return Promise.all([
    faceapi.nets.faceRecognitionNet.loadFromUri("./weights"),
    faceapi.nets.faceExpressionNet.loadFromUri("./weights"),
    faceapi.nets.ssdMobilenetv1.loadFromUri("./weights"),
  ]).then(start);

  function start() {
    const container = document.createElement("div");
    container.style.position = "relative";
    document.body.append(container);
    return faceapi.detectAllFaces(imageElement).withFaceExpressions();
  }
}

export default faceAPI;
