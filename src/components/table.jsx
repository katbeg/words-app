import React from "react";
import './styles/table.scss';
import Button from "./button";

function Table(props){
    const words = props.words;
    return(
        <div className='app-main__table'>
            <thead>
              <th>Слово с предлогом</th>
              <th>Транскрипция</th>
              <th>Перевод</th>
              <th>Управление</th>
            </thead>
            <tbody>
              {/* <tr>
                  <td><input type='text' placeholder='Word with a preposition'/></td>
                  <td><input placeholder='Transcription'/></td>
                  <td><input placeholder='Translation'/></td>
                  <td><Button text='Добавить'></Button></td>
              </tr> */}
            {
              words.map((w) =>
                <tr>
                  <td>{w.preposition} {w.word}</td>
                  <td>{w.transcription}</td>
                  <td>{w.translation}</td>
                  <td><Button text='Удалить'></Button>
                  <Button text='Редактировать'></Button></td>
                </tr>
              )
            }
            </tbody>
        </div>
    )
}

export default Table;
