import React from "react";
import './styles/button.scss'
export default function Button(props){
    return(
        <button ref={props.btnRef} onClick={props.onClick} className='customBtn'>{props.text}</button>
    )
}