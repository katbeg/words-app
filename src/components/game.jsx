import React from "react";
import Card from "./card";
import words from "./words";
import './styles/game.scss';

export default function Game(){
    return(
        <div className='game-container'>
        {
          words.map((w) =>
            <Card word={w.word} 
            preposition={w.preposition} transcription={w.transcription} translation = {w.translation}></Card>
          )
        }
        </div>
    )
}