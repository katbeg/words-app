import React from "react";

function Card(props){
    return(
        <div className='card'>
            <p className='card__word'>{props.preposition} {props.word}</p>
            <p className='card__transcription'>{props.transcription}</p>
            <p className='card__translation'>{props.translation}</p>
        </div>
    );
}
export default Card;