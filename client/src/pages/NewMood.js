import React, {useState, useEffect} from "react";
import "./NewMood.css";
import { Jumbotron, Container, Button } from "react-bootstrap";
import Webcam from "../components/Webcam/DisplayMoods";
import axios from "axios";

function Home() {

const [isMoodSet, setIsMoodSet] = useState(false);
const [jokes, setJokes] = useState([]);
const [mood, setMood] = useState(false);
const [quote, setQuote] = useState(false);

useEffect(() => {
  if(isMoodSet){
    if(mood==="Happy") 
    {
    getQuotes()
    }
    getJokes()
  }
}, [isMoodSet])

const getJokes = async () => {
  axios.get(`https://dad-jokes.p.rapidapi.com/random/joke?count=5`, {
    headers: {
      "x-rapidapi-key": "d62e6f34f0msha0a4e23e56f8267p1e1473jsnb6ca869e4a1e",
      "x-rapidapi-host": "dad-jokes.p.rapidapi.com"
    }
  })    
  .then((res) => {
    console.log(res.data.body)
    setJokes(res.data.body)
  })
  .catch((error) => {
    console.error(error)
  })
}

const getQuotes = async () => {
  axios.get(`https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote`, {
    headers: {
      'x-rapidapi-key': 'd62e6f34f0msha0a4e23e56f8267p1e1473jsnb6ca869e4a1e',
      'x-rapidapi-host': 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com'
    }
  })    
  .then((res) => {
    console.log(res.data)
    setQuote(res.data)
  })
  .catch((error) => {
    console.error(error)
  })
}


console.log("isMoodSet:", isMoodSet);
  
return (
    <div>
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
            
            <Webcam className="webcam" setIsMoodSet={setIsMoodSet} setMood={setMood} />
          </Container>
        </Jumbotron>
        <Jumbotron className="dimension text-center" fluid>
          <Container>
            <div className="subtitle">Here's some relevant content:</div>
            {mood=="Neutral" || mood=="Sad"? jokes.map(joke => {
              return(
                <div key={joke._id} className="jokeContainer">
                  <h4>{joke.setup}</h4>
                  <p>{joke.punchline}</p>
                </div>
              )
            }):""}
            {quote? <div className="quoteContainer">
             <h4>Inspirational Quote</h4> 
              <h5>{quote.text}</h5>
             <p>{quote.author}</p>
             </div>: ""
            }
          </Container>
        </Jumbotron>
      </Container>
    </div>
  );
}

export default Home;
