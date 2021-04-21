import React, { useState, useEffect } from "react";
import Webcam from "./Webcam";
import { Button } from "react-bootstrap";
import LoadingSpinner from "../Spinner/LoadingSpinner";
import "./Webcam.css";
import axios from "axios";

function DisplayMoods() {
  const [moodState, setMoodState] = useState([]);

  const [expressionState, setExpressionState] = useState("");
  const [expressionMsgState, setExpressionMsgState] = useState("");

  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  console.log(moodState);

  // useEffect(() => {
  //   fetch("/api/moods")
  //     .then((res) => res.json())
  //     .then((res) => console.log("moods are: ", setMoods(res)));
  // }, [reUpload]);

  function handleSave() {
    fetch("/api/moods", {
      method: "POST",
      body: expressionState,
    })
      .then(() =>
        console.log("this should have been sent to DB: ", expressionState)
      )
      .catch((err) => alert(err));
  }

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
        setExpressionState("Angry");
        setExpressionMsgState(
          "Would you like to check out some cat memes to calm you down a bit?"
        );
      } else if (
        disgusted > angry &&
        disgusted > fearful &&
        disgusted > happy &&
        disgusted > neutral &&
        disgusted > sad &&
        disgusted > surprised
      ) {
        console.log("Your mood is: Disgusted");
        setExpressionState("Disgusted");
        setExpressionMsgState(
          "Would you like to check out some videos to  make that gross feeling go away?"
        );
      } else if (
        fearful > angry &&
        fearful > disgusted &&
        fearful > happy &&
        fearful > neutral &&
        fearful > sad &&
        fearful > surprised
      ) {
        console.log("Your mood is: Fearful");
        setExpressionState("Fearful");
        setExpressionMsgState(
          "Would you like to check out some videos that will help you tackle that fear?"
        );
      } else if (
        happy > angry &&
        happy > disgusted &&
        happy > fearful &&
        happy > neutral &&
        happy > sad &&
        happy > surprised
      ) {
        console.log("Your mood is: Happy");
        setExpressionState("Happy");
        setExpressionMsgState(
          "Alright!! How about some funny cat videos to keep that GREAT mood going?"
        );
      } else if (
        neutral > angry &&
        neutral > disgusted &&
        neutral > fearful &&
        neutral > happy &&
        neutral > sad &&
        neutral > surprised
      ) {
        console.log("Your mood is: Neutral");
        setExpressionState("Neutral");
        setExpressionMsgState(
          "We have just the right thing to give that mood a jump start, would you like to check it out?"
        );
      } else if (
        sad > angry &&
        sad > disgusted &&
        sad > fearful &&
        sad > happy &&
        sad > neutral &&
        sad > surprised
      ) {
        console.log("Your mood is: Sad");
        setExpressionState("Sad");
        setExpressionMsgState(
          "Don't worry, be HAPPY!.We can turn that frown, upside down! Would you like to check out some memes or videos to help crack a smile?"
        );
      } else if (
        surprised > angry &&
        surprised > disgusted &&
        surprised > fearful &&
        surprised > happy &&
        surprised > neutral &&
        surprised > sad
      ) {
        console.log("Your mood is: Surprised");
        setExpressionState("Surprised");
        setExpressionMsgState(
          "Uh oh, did you see a ghost? We have some jokes that might have a underlying element of surprise. Would you like to check them out?"
        );
      } else {
        alert("An error has occurred");
      }
    }
  }

  return (
    <div className="WebcamFinal">
      <Webcam
        setIsLoaded={setIsLoaded}
        setIsLoading={setIsLoading}
        setMoodState={setMoodState}
      />

      {isLoaded && (
        <>
          <Button className="moodButton" onClick={click}>
            Check Mood
          </Button>
          <div className="expression">
            Your Current Mood Is: {expressionState}
          </div>
          <div className="expressionMsg">{expressionMsgState}</div>

          <Button onClick={handleSave} variant="contained" className="moodButton">
            Save Mood
          </Button>
        </>
      )}
      {isLoading && <LoadingSpinner />}
    </div>
  );
}

export default DisplayMoods;
