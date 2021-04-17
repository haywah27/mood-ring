import React, { useState } from "react";
import WebcamCapture from "./WebcamCapture";
import { Button } from "react-bootstrap";
import "./Webcam.css";

function WebcamFinal() {
  const [moodState, setMoodState] = useState([]);

  let expression = "";
  let expressionMsg = "";

  const [expressionState, setExpressionState] = useState("");
  const [expressionMsgState, setExpressionMsgState] = useState("");

  console.log(moodState);

  function click() {
    if (moodState.length === 0) {
      alert(
        "An error has occurred. To avoid such errors, please make sure your face is clearly visible and is in the center of the screen."
      );
    } else {
      const angry = moodState[0].expressions.angry;
      const disgusted = moodState[0].expressions.disgusted;
      const fearful = moodState[0].expressions.fearful;
      const happy = moodState[0].expressions.happy;
      const neutral = moodState[0].expressions.neutral;
      const sad = moodState[0].expressions.sad;
      const surprised = moodState[0].expressions.surprised;

      if (
        angry > disgusted &&
        angry > fearful &&
        angry > happy &&
        angry > neutral &&
        angry > sad &&
        angry > surprised
      ) {
        console.log("Your mood is: Angry");
        expression = "Angry";
        expressionMsg =
          "Would you like to check out some cat memes to calm you down a bit?";
        setExpressionState(expression);
        setExpressionMsgState(expressionMsg);
        console.log(expression);
      } else if (
        disgusted > angry &&
        disgusted > fearful &&
        disgusted > happy &&
        disgusted > neutral &&
        disgusted > sad &&
        disgusted > surprised
      ) {
        console.log("Your mood is: Disgusted");
        expression = "Disgusted";
        expressionMsg =
          "Would you like to check out some videos to  make that gross feeling go away?";
        setExpressionState(expression);
        setExpressionMsgState(expressionMsg);
        console.log(expression);
      } else if (
        fearful > angry &&
        fearful > disgusted &&
        fearful > happy &&
        fearful > neutral &&
        fearful > sad &&
        fearful > surprised
      ) {
        console.log("Your mood is: Fearful");
        expression = "Fearful";
        expressionMsg =
          "Would you like to check out some videos that will help you tackle that fear?";
        setExpressionState(expression);
        setExpressionMsgState(expressionMsg);
        console.log(expression);
      } else if (
        happy > angry &&
        happy > disgusted &&
        happy > fearful &&
        happy > neutral &&
        happy > sad &&
        happy > surprised
      ) {
        console.log("Your mood is: Happy");
        expression = "Happy";
        expressionMsg =
          "Alright!! How about some funny cat videos to keep that GREAT mood going?";
        setExpressionState(expression);
        setExpressionMsgState(expressionMsg);
        console.log(expression);
      } else if (
        neutral > angry &&
        neutral > disgusted &&
        neutral > fearful &&
        neutral > happy &&
        neutral > sad &&
        neutral > surprised
      ) {
        console.log("Your mood is: Neutral");
        expression = "Neutral";
        expressionMsg =
          "We have just the right thing to give that mood a jump start, would you like to check it out?";
        setExpressionState(expression);
        setExpressionMsgState(expressionMsg);
        console.log(expression);
      } else if (
        sad > angry &&
        sad > disgusted &&
        sad > fearful &&
        sad > happy &&
        sad > neutral &&
        sad > surprised
      ) {
        console.log("Your mood is: Sad");
        expression = "Sad";
        expressionMsg =
          "Don't worry, be HAPPY!.We can turn that frown, upside down! Would you like to check out some memes or videos to help crack a smile?";
        setExpressionState(expression);
        setExpressionMsgState(expressionMsg);
        console.log(expression);
      } else if (
        surprised > angry &&
        surprised > disgusted &&
        surprised > fearful &&
        surprised > happy &&
        surprised > neutral &&
        surprised > sad
      ) {
        console.log("Your mood is: Surprised");
        expression = "Surprised";
        expressionMsg =
          "Uh oh, did you see a ghost? We have some jokes that might have a underlying element of surprise. Would you like to check them out?";
        setExpressionState(expression);
        setExpressionMsgState(expressionMsg);
        console.log(expression);
      } else {
        alert("An error has occurred");
      }
    }
  }

  return (
    <div className="WebcamFinal">
      <WebcamCapture setMoodState={setMoodState} />

      <Button className="moodButton" onClick={click}>
        Check Mood
      </Button>

      <div className="expression">Your Current Mood is: {expressionState} </div>
      <div>
        <div className="expressionMsg">
          {expressionMsgState}
          {/* <Button className="moodyButton" onClick={moodRemedy} >
            Moody Times
          </Button> */}
        </div>
      </div>
    </div>
  );
}

export default WebcamFinal;
