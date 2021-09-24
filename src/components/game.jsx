import React, {useState,
              useRef,
              forwardRef,
            } from "react";
import Card from "./card";
import words from "./words";
import './styles/game.scss';

export default function Game(){
  const [isLearned, setLearned] = useState(0);

  const addToLearned = () => {
    setLearned(isLearned+1);
  }

    return(
        <div className='game-container'>
          <h1 className='game-container__title'>{isLearned === 1 ? `You have learned ${isLearned} word` :  `You have learned ${isLearned} words`}</h1>
          <div className='game-container__main'>
              {
              words.map((w) =>
                <Card word={w.word} 
                preposition={w.preposition} 
                transcription={w.transcription} 
                translation = {w.translation} 
                addToLearned={addToLearned}
                ></Card>)
            }
          </div> 
        </div>
    )
}