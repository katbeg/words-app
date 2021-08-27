import React from "react";

function WordsList(props){
    const words = props.wordsList;
    return(
        <div className='wordsList'>
            <p>Добавить новое слово +</p>
            {words.map((w) => 
            <p>{w.word} <sup>x</sup></p>)
            }
        </div>
    );
}
export default WordsList;