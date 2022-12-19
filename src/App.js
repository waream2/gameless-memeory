import { useState } from 'react';
import cardData from "./cardData.js";
import Card from './Components/Card';
import Header from './Components/Header';
import './App.css';


function App() {
  // you dont need this anymore! see below.
  // const [invisibleScore, setInvisibleScore] = useState(0);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [randomArray, setRandomArray] = useState([cardData]);
  const [idArray, setIdArray] = useState([]);

  // NOTE: I dont think this function name is very descriptive as to what this function is actually doing, "addId" to what?
  // Also it can probably be broken out more but I took the apporach of consolidating what you had into one function
  // just to eliminate some of the extra stateful data you had, namely invisibleHighScore, as you didnt need it
  const addId = (id) => {
      // if it's not in the selectedArray,
      if(!idArray.includes(id)) {
        // add it to the selected array
        setIdArray(prevArray => [...prevArray, id]);
        // increase the score by 'score + 1)
        setScore(score + 1)
        // if it IS in the array, we need to reset the game
      } else {
        // but first let's check if the score when the user double clicked was above the high score
        if(score > highScore){
          // if so, set the new high score
          setHighScore(score)
        }
        // reset the score
        setScore(0);
        // erase the selected ID
        setIdArray([]);
      }}

  function shuffle (e) {
    for(let i = cardData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = cardData[i];
        cardData[i] = cardData[j];
        cardData[j] = temp;
    }
    setRandomArray([...cardData]);
  }

  // this is really clean, i like this pattern. Go create the cards here and shove them into the components return
  const cardsMap = cardData.map(item => {
    return(
      <Card
        id={item.id}
        img={item.imgLocation}
        title={item.title}
        shuffle={shuffle}
        addId={addId}
      />
    )
  })

  return (
    <div className="App">
      <Header />
      <h2>High Score: {highScore}</h2>
      <h2>Score: {score}</h2>
      <div className="card__div">
        {cardsMap}
      </div>
    </div>
  );
}

export default App;
