import React from "react";
// import words from "./words";
import './styles/table.scss';
// import Row from "./tableRow";
import Row from "./TableRowClass";
import { useWords} from "../context/WordsContext"; 
import Button from "./button";

function Table(){
    const {words, setWords} = useWords();

    const handleDelete = (id) => {
      fetch(`/api/words/${id}/delete`, {method: 'POST'});
    } 

    const handleAdd = () => {
      console.log('add');
    }

    return(
        <div className='app-main__table'>
            <thead>
              <th>Слово с предлогом</th>
              <th>Транскрипция</th>
              <th>Перевод</th>
              {/* <th>Управление</th> */}
              <th><Button onClick={handleAdd}>Добавить</Button></th>
            </thead>
            <tbody>
            {
              words.map((w) =>
              <Row words={words} handleDelete={handleDelete} setWords={setWords} id={w.id} russian={w.russian} transcription = {w.transcription} english = {w.english}></Row>
              ) 
            }
            </tbody>
        </div>
    )
}

export default Table;
