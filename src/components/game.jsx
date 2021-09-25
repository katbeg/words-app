import React, {useState} from "react";
import words from "./words";
import {shuffle} from 'lodash';
import './styles/game.scss';

export default function Game(){
    let translations = [];
    let originalWords = [];
    words.map((w) => {
        originalWords.push(w.word);
        translations.push(w.translation);
    })

    const [cards,setCards] = useState( shuffle([...originalWords, ...originalWords]) );
    const [clicks, setClicks] = useState(0);
    const [won,setWon] = useState(false);
    const [activeCards,setActiveCards] = useState([]);
    const [foundPairs,setFoundPairs] = useState([]);
  
    function flipCard(index) {
    console.log(index);
      if (won) {
        setCards(shuffle([...originalWords, ...originalWords]));
        setFoundPairs([]);
        setWon(false);
        setClicks(0);
      }
      if (activeCards.length === 0) {
        setActiveCards([index]);
      }
      if (activeCards.length === 1) {
        const firstIndex = activeCards[0];
        const secondsIndex = index;
        if (cards[firstIndex] === cards[secondsIndex]) {
          if (foundPairs.length + 2 === cards.length) {
            setWon(true);
          }
          setFoundPairs( [...foundPairs, firstIndex, secondsIndex] );
        }
        setActiveCards([...activeCards, index]);
      }
      if (activeCards.length === 2) {
        setActiveCards([index]);
      }
      setClicks(clicks + 1);
    }
  
    return (
      <div>
          <div className="stats">
          {won && (
            <>You won the game! Congratulations!<br />
              Click any card to play again.<br /><br />
            </>
          )}
          Clicks: {clicks} &nbsp;&nbsp;&nbsp; Found pairs:{foundPairs.length/2}
        </div>
        <div className="board">
          {cards.map((card, index) => {
            const flippedToFront =  (activeCards.indexOf(index) !== -1) || foundPairs.indexOf(index) !== -1;
            return (
              <div className={"card-outer " + (flippedToFront ? 'flipped' : '')}
                   onClick={() => flipCard(index)}>
                <div className="gameCard">
                  <div className="front">
                    <p>{card}</p>
                  </div>
                  <div className="back" />
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    );
}