import React, {useState} from "react";
import './styles/card.scss'
import Button from "./button";

function Card(props){
    const [pressed, setPressed] = useState(false);
    function handleCheck(){
        setPressed(!pressed);
    }
       return(
        <div className='card'>
            <p className='card__word'>{props.preposition} {props.word}</p>
            <p className='card__transcription'>{props.transcription}</p>
            {pressed ?
            <div><p className='card__translation'>{props.translation}</p>
                <Button onClick={handleCheck} text='Cancel'></Button>
            </div>
              :
            <Button text='Check' onClick={handleCheck}></Button>
            }   
        </div>
    );
}
export default Card;