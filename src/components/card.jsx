import React, {useState} from "react";
import './styles/card.scss'
import Button from "./button";

function Card(props){
    const [pressed, setPressed] = useState(false);
    
    const onClick = () => {
        setPressed(!pressed);
        if(pressed === false){
            props.addToLearned();
        }
    }

       return(
        <div className='card'>
            <p className='card__word'>{props.preposition} {props.word}</p>
            <p className='card__transcription'>{props.transcription}</p>
            {pressed ?
            <div><p className='card__translation'>{props.translation}</p>
                <Button onClick={onClick} text='Cancel'></Button>
            </div>
              :
            <Button text='Check' onClick={onClick}></Button>
            }   
        </div>
    );
}
export default Card;