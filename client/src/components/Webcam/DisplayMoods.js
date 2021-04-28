import React, { useState } from "react";
import Webcam from "./Webcam";
import { Button } from "react-bootstrap";
import LoadingSpinner from "../Spinner/LoadingSpinner";
import "./Webcam.css";
import API from "../../utils/API";

function DisplayMoods(props) {
  console.log(props);
  const [moodState, setMoodState] = useState([]);

  const [expressionState, setExpressionState] = useState("");
  const [expressionMsgState, setExpressionMsgState] = useState("");

  const [showCurrentMood, setShowCurrentMood] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const profile = JSON.parse(localStorage.getItem("Profile"));
  console.log(profile);
  console.log(moodState);

  function handleAPI(mood) {
    if (localStorage.getItem("Profile") !== null) {
      API.updateLocalStorage(profile[0].googleId);
      console.log("profile[0].googleId: ", profile[0].googleId);
      API.createMood({
        googleId: profile[0].googleId,
        expressions: mood,
      }).then((res) => {
        console.log(res);
      });
    }
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
        props.setMood("Angry");
        setExpressionMsgState(
          "Would you like to check out a puppy gif to calm you down a bit?"
        );
        handleAPI("Angry");
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
        props.setMood("Disgusted");
        setExpressionMsgState(
          "Would you like an inspirational quote to make that gross feeling go away?"
        );
        handleAPI("Disgusted");
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
        props.setMood("Fearful");
        setExpressionMsgState(
          "You know what you should really fear? Dad jokes!!"
        );
        handleAPI("Fearful");
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
        props.setMood("Happy");
        setExpressionMsgState(
          "Alright!! How about a quote to keep that GREAT mood going?"
        );
        handleAPI("Happy");
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
        props.setMood("Neutral");
        setExpressionMsgState(
          "We have just the right thing to give that mood a jump start, would you like to check out a meme?"
        );
        handleAPI("Neutral");
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
        props.setMood("Sad");
        setExpressionMsgState(
          "Some terrible dad jokes will help turn that frown upside down!"
        );
        handleAPI("Sad");
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
        props.setMood("Surprised");
        setExpressionMsgState(
          "Uh oh, did you see a ghost? You know what's even more surprising?? A random gif!!"
        );
        handleAPI("Surprised");
      } else {
        alert("An error has occurred");
      }
      props.setIsMoodSet(true);
      setShowCurrentMood(true);
    }
  }
  function reloadPage() {
    window.location.reload();
    setShowCurrentMood(false);
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
          <br />
          <Button className="moodButton btn-md" onClick={click}>
            Reveal Mood
          </Button>
          <Button className="moodButton btn-md" onClick={reloadPage}>
            New Reading
          </Button>
          {showCurrentMood && (
            <>
              <div className="expression">
                Your Current Mood Is: {expressionState}
              </div>
              <div className="expressionMsg">{expressionMsgState}</div>
            </>
          )}
        </>
      )}
      {isLoading && <LoadingSpinner />}
    </div>
  );
}

export default DisplayMoods;
