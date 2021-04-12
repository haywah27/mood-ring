import * as faceapi from 'face-api.js';

function FaceAPI(image) {

    const imageUpload = image;
    const imageUploadSrc = image.src

    const apiOfFace = async () => {
        const detections = await faceapi
            .detectAllFaces(imageUpload)
            .withFaceLandmarks()
            .withFaceExpressions()

        const angry = detections[0].expressions.angry
        const disgusted = detections[0].expressions.disgusted
        const fearful = detections[0].expressions.fearful
        const happy = detections[0].expressions.happy
        const neutral = detections[0].expressions.neutral
        const sad = detections[0].expressions.sad
        const surprised = detections[0].expressions.surprised

        console.log(detections[0].expressions)

        if (angry > disgusted && angry > fearful && angry > happy && angry > neutral && angry > sad && angry > surprised) {
            console.log("Your mood is: Angry")
            expression = 'Angry'
            console.log(expression)
            document.getElementById('mood').innerHTML = `<p id="mood">Your mood is: ${expression} </p>`
            document.getElementById('remedie').innerHTML = '<p> this is a remedy </p>'
        } else if(disgusted > angry && disgusted > fearful && disgusted > happy && disgusted > neutral && disgusted > sad && disgusted > surprised) {
            console.log("Your mood is: Disgusted")
            expression = 'Digusted'
            console.log(expression)
            document.getElementById('mood').innerHTML = `<p id="mood">Your mood is: ${expression} </p>`
            document.getElementById('remedie').innerHTML = '<p> this is a remedy </p>'
        } else if(fearful > angry && fearful > disgusted && fearful > happy && fearful > neutral && fearful > sad && fearful > surprised) {
            console.log("Your mood is: Fearful")
            expression = 'Fearful'
            console.log(expression)
            document.getElementById('mood').innerHTML = `<p id="mood">Your mood is: ${expression} </p>`
            document.getElementById('remedie').innerHTML = '<p> this is a remedy </p>'
        } else if(happy > angry && happy > disgusted && happy > fearful && happy > neutral && happy > sad && happy > surprised) {
            console.log("Your mood is: Happy")
            expression = 'Happy'
            console.log(expression)
            document.getElementById('mood').innerHTML = `<p id="mood">Your mood is: ${expression} </p>`
            document.getElementById('remedie').innerHTML = '<p> this is a remedy </p>'
        } else if(neutral > angry && neutral > disgusted && neutral > fearful && neutral > happy && neutral > sad && neutral > surprised) {
            console.log("Your mood is: Neutral")
            expression = 'Neutral'
            console.log(expression)
            document.getElementById('mood').innerHTML = `<p id="mood">Your mood is: ${expression} </p>`
            document.getElementById('remedie').innerHTML = '<p> this is a remedy </p>'
        } else if(sad > angry && sad > disgusted && sad > fearful && sad > happy && sad > neutral && sad > surprised) {
            console.log("Your mood is: Sad")
            expression = 'Sad'
            console.log(expression)
            document.getElementById('mood').innerHTML = `<p id="mood">Your mood is: ${expression} </p>`
            document.getElementById('remedie').innerHTML = '<p> this is a remedy </p>'
        } else if(surprised > angry && surprised > disgusted && surprised > fearful && surprised > happy && surprised > neutral && surprised > sad) {
            console.log("Your mood is: Surprised")
            expression = 'Surprised'
            console.log(expression)
            document.getElementById('mood').innerHTML = `<p id="mood">Your mood is: ${expression} </p>`
            document.getElementById('remedie').innerHTML = '<p> this is a remedy </p>'
        } else {
            alert("An error has occured")
        }
    }

    let expression = '';

    Promise.all([
        faceapi.nets.faceLandmark68Net.loadFromUri('./FaceAPImodels'),
        faceapi.nets.faceRecognitionNet.loadFromUri('./FaceAPImodels'),
        faceapi.nets.faceExpressionNet.loadFromUri('./FaceAPImodels'),
        faceapi.nets.ssdMobilenetv1.loadFromUri('./FaceAPImodels'),
    ]).then(start)

    function start() {
        const container = document.createElement('div')
        container.style.position = 'relative'
        document.body.append(container)
        if(imageUploadSrc != '') { 
            apiOfFace().then()
        }
    }
}

export default FaceAPI