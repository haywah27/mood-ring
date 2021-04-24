import React, { useState, useEffect } from "react";
import "./NewMood.css";
import { Jumbotron, Container, Button } from "react-bootstrap";
import Webcam from "../components/Webcam/DisplayMoods";
import axios from "axios";
import Navigation from "../components/Nav/index";

function Home() {
  const [isMoodSet, setIsMoodSet] = useState(false);
  const [jokes, setJokes] = useState([]);
  const [mood, setMood] = useState(false);
  const [quote, setQuote] = useState(false);
  const [gif, setGif] = useState(false);
  const [meme, setMeme] = useState(false);

  useEffect(() => {
    if (isMoodSet) {
      if (mood === "Happy" || mood === "Disgusted") {
        getQuotes();
      } else if (mood === "Surprised" || mood === "Angry") {
        getGifs();
      } else if (mood === "Fearful" || mood === "Sad") {
        getJokes();
      } else if (mood === "Neutral") {
        getMemes();
      } else {
        console.log(mood);
      }
    }
  }, [isMoodSet]);

  const getJokes = async () => {
    axios
      .get(`https://dad-jokes.p.rapidapi.com/random/joke?count=5`, {
        headers: {
          "x-rapidapi-key":
            "d62e6f34f0msha0a4e23e56f8267p1e1473jsnb6ca869e4a1e",
          "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
        },
      })
      .then((res) => {
        console.log(res.data.body);
        setJokes(res.data.body);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getQuotes = async () => {
    axios
      .get(
        `https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote`,
        {
          headers: {
            "x-rapidapi-key":
              "d62e6f34f0msha0a4e23e56f8267p1e1473jsnb6ca869e4a1e",
            "x-rapidapi-host":
              "quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setQuote(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getGifs = async () => {
    axios
      .get(`https://giphy.p.rapidapi.com/v1/gifs/random`, {
        params: { api_key: "Sf6Lj6rQFasqHsLZgdmAc7jgaE4eQGUG", tag: "puppy" },
        headers: {
          "x-rapidapi-key":
            "d62e6f34f0msha0a4e23e56f8267p1e1473jsnb6ca869e4a1e",
          "x-rapidapi-host": "giphy.p.rapidapi.com",
        },
      })
      .then((res) => {
        console.log(res.data);
        setGif(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getMemes = async () => {
    axios
      .get(`https://ronreiter-meme-generator.p.rapidapi.com/meme`, {
        params: {
          meme: "Condescending-Wonka",
          bottom: "Yeah, that will work",
          top: "Meme to help your mood?",
          font_size: "50",
          font: "Impact",
        },
        headers: {
          "x-rapidapi-key":
            "d62e6f34f0msha0a4e23e56f8267p1e1473jsnb6ca869e4a1e",
          "x-rapidapi-host": "ronreiter-meme-generator.p.rapidapi.com",
        },
        responseType: "arraybuffer",
      })
      .then((res) => {
        console.log(res);

        const file = new Blob([res.data], { type: "image/jpeg" });
        console.log(file);
        let image = URL.createObjectURL(file);
        console.log(image);
        setMeme(image);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  console.log("isMoodSet:", isMoodSet);

  return (
    <div>
      <Navigation />
      <Container>
        <Jumbotron className="dimension text-center" fluid>
          <Container>
            <h1 className="title">Mood Catcher</h1>
            <h5 className="body">
              How it works: <br /> 1. Click the button to start the live mood
              reader
              <br /> 2. Click the camera icon to capture your current mood
              <br /> 3. Explore the remedy or boost to your mood
              <br /> 4. Login to save your mood!
            </h5>

            <Webcam
              className="webcam"
              setIsMoodSet={setIsMoodSet}
              setMood={setMood}
            />
          </Container>
        </Jumbotron>
        <Jumbotron className="dimension text-center" fluid>
          <Container>
            <div className="subtitle">Mood Ring Suggests:</div>
            {mood == "Neutral" || mood == "Sad"
              ? jokes.map((joke) => {
                  return (
                    <div key={joke._id} className="jokeContainer">
                      <h4>{joke.setup}</h4>
                      <p>{joke.punchline}</p>
                    </div>
                  );
                })
              : ""}
            {quote ? (
              <div className="quoteContainer">
                <h4>An Inspirational Quote</h4>
                <h5>{quote.text}</h5>
                <p>{quote.author}</p>
              </div>
            ) : (
              ""
            )}
            {gif ? (
              <div className="gifContainer">
                <h4>Enjoy a random Gif on us</h4>
                <img src={gif.data.image_original_url} />
              </div>
            ) : (
              ""
            )}
            {meme ? (
              <div className="memeContainer">
                <img src={meme} />
              </div>
            ) : (
              ""
            )}
          </Container>
        </Jumbotron>
      </Container>
    </div>
  );
}

export default Home;
