import React from "react";
import words from "./words";
import './styles/table.scss';
import Row from "./TableRowClass";

function Table(){
    
    return(
        <div className='app-main__table'>
            <thead>
              <th>Слово с предлогом</th>
              <th>Транскрипция</th>
              <th>Перевод</th>
              <th>Управление</th>
            </thead>
            <tbody>
            {
              words.map((w) =>
              <Row preposition = {w.preposition} word={w.word} transcription = {w.transcription} translation = {w.translation}></Row>
              )
            }
            </tbody>
        </div>
    )
}

export default Table;
