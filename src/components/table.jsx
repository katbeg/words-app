import React, { useState } from "react";
// import words from "./words";
import './styles/table.scss';
// import Row from "./tableRow";
import Row from "./TableRowClass";
import { useWords} from "../context/WordsContext"; 
import Button from "./button";

function Table(){
    const {words, setWords} = useWords();
    const [newWord, setNewWord] = useState({
      english: "",
      transcription: "",
      russian: "",
      tags: "",
    });
    const [isAdding, setAdding] = useState(false);

    const handleDelete = (id) => {
      fetch(`/api/words/${id}/delete`, {method: 'POST'});
    } 

    const handleInputChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setNewWord((word) => {
        return { ...word, [name]: value };
      });
    };

    const handleAdd = () => {
        setAdding(true);
    }

    const addNewWord = async () => {
      try {
        const res = await fetch("/api/words", {
          method: "POST",
          body: JSON.stringify(newWord),
        });
        setNewWord({ english: "", transcription: "", russian: "", tags: "" });
      } catch (err) {
        console.log(err);
      }
    };

    return(
        <div className='app-main__table'>
            <thead>
              <th>Слово с предлогом</th>
              <th>Транскрипция</th>
              <th>Перевод</th>
              <th onClick={handleAdd}> Добавить<img id='addImg' src='https://cdn-icons-png.flaticon.com/512/1828/1828817.png'/></th>
            </thead>
            <tbody>
            {isAdding && <tr>
                        <td>
                          <input           
                            value={newWord.english || ""}
                            name="english"
                            onChange={handleInputChange}/>
                        </td>
                        <td>
                          <input
                              value={newWord.transcription || ""}
                              name="transcription"
                              onChange={handleInputChange}/>
                        </td>
                        <td>
                          <input 
                              value={newWord.russian || ""}
                              name="russian"
                              onChange={handleInputChange}/>
                        </td>
                        <td><Button text='Cancel'></Button>
                        <Button onClick={addNewWord} id='save-btn' text='Save'></Button></td>
                    </tr>}
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
