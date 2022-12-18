import { useState } from 'react';
import cardData from "./cardData.js";
import Card from './Components/Card';
import Header from './Components/Header';
import './App.css';
import { useEffect } from 'react';


function App() {
  const [invisibleScore, setInvisibleScore] = useState(0);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [randomArray, setRandomArray] = useState([cardData]);
  const [idArray, setIdArray] = useState([]);


let newHighScore = 0;

const currScore = () => {
  setScore(score + 1);
  if (score > highScore) {
    newHighScore = score;
    setInvisibleScore(newHighScore);
  }
}

const highestScore = () => {
  setHighScore(invisibleScore + 1);
}


const addId = (id) => {
    if(!idArray.includes(id)) {
      setIdArray(prevArray => [...prevArray, id]); 
      currScore();
    } else {
      setScore(0);
      highestScore();
      setIdArray([]);
    }}

// useEffect(() => console.log(newHighScore));
  
  function shuffle (e) {
    for(let i = cardData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = cardData[i];
        cardData[i] = cardData[j];
        cardData[j] = temp;
    }
    setRandomArray([...cardData]);

  }

  const cardsMap = cardData.map(item => {
    return(
      <Card
        id={item.id}
        img={item.imgLocation}
        title={item.title}
        shuffle={shuffle}
        addId={addId}
        // score={currScore}
      />
    )
  })

  return (
    <div className="App">
      <Header />
      <h2>High Score: {highScore}</h2>
      <h2>
        Score: {score}
      </h2>
      <div className="card__div">
        {cardsMap}
      </div>
     
    </div>
  );
}

export default App;
