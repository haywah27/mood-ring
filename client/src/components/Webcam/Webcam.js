import React, { useState } from 'react';
import WebcamCapture from './WebcamCapture'
import "./Webcam.css"

function WebcamFinal() {

  const [moodState, setMoodState] = useState([])

  console.log(moodState)

  function click() {

    let expression = '';

    const angry = moodState[0].expressions.angry
    const disgusted = moodState[0].expressions.disgusted
    const fearful = moodState[0].expressions.fearful
    const happy = moodState[0].expressions.happy
    const neutral = moodState[0].expressions.neutral
    const sad = moodState[0].expressions.sad
    const surprised = moodState[0].expressions.surprised

    if (angry > disgusted && angry > fearful && angry > happy && angry > neutral && angry > sad && angry > surprised) {
        console.log("Your mood is: Angry")
        expression = 'Angry'
        console.log(expression)
    } else if(disgusted > angry && disgusted > fearful && disgusted > happy && disgusted > neutral && disgusted > sad && disgusted > surprised) {
        console.log("Your mood is: Disgusted")
        expression = 'Digusted'
        console.log(expression)
    } else if(fearful > angry && fearful > disgusted && fearful > happy && fearful > neutral && fearful > sad && fearful > surprised) {
        console.log("Your mood is: Fearful")
        expression = 'Fearful'
        console.log(expression)
    } else if(happy > angry && happy > disgusted && happy > fearful && happy > neutral && happy > sad && happy > surprised) {
        console.log("Your mood is: Happy")
        expression = 'Happy'
        console.log(expression)
    } else if(neutral > angry && neutral > disgusted && neutral > fearful && neutral > happy && neutral > sad && neutral > surprised) {
        console.log("Your mood is: Neutral")
        expression = 'Neutral'
        console.log(expression)
    } else if(sad > angry && sad > disgusted && sad > fearful && sad > happy && sad > neutral && sad > surprised) {
        console.log("Your mood is: Sad")
        expression = 'Sad'
        console.log(expression)
    } else if(surprised > angry && surprised > disgusted && surprised > fearful && surprised > happy && surprised > neutral && surprised > sad) {
        console.log("Your mood is: Surprised")
        expression = 'Surprised'
        console.log(expression)
    } else {
        alert("An error has occured")
    }
  }
  
  return (
    <div className="WebcamFinal">
      <WebcamCapture setMoodState = {setMoodState}/>
      <button onClick={click}>Check Mood</button>
    </div>
  );
}

export default WebcamFinal;