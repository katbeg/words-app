import React from "react";
import './styles/button.scss'
export default function Button(props){
    return(
        <button onClick={props.onClick} className='customBtn'>{props.text}</button>
    )
}