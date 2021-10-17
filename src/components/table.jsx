import React, { useEffect, useState } from "react";
import './styles/table.scss';
import Row from "./TableRowClass";
import { inject, observer } from "mobx-react";
import Loader from "./loader";
import Button from "./button";

const Table = inject(['wordStore'])(observer(({ wordStore }) => {
    const [isAdding, setAdding] = useState(false);

    useEffect(() => {
        wordStore.getWords()
    }, [])

    const [newWord, setNewWord] = useState({
        english: "",
        transcription: "",
        russian: "",
        tags: ""
      });

      const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setNewWord((word) => {
          return { ...word, [name]: value };
        });
      };

    const handleAdd = () => {
        setAdding(!isAdding);
    }

    const addNewWord = (e) => {
        e.preventDefault();
        wordStore.addWord(newWord);
        setNewWord({
            english: "",
            transcription: "",
            russian: "",
            tags: ""
        })
        setAdding(false);
    }

    return(
        <div className='app-main__table'>
            <thead>
              <th>Слово с предлогом</th>
              <th>Транскрипция</th>
              <th>Перевод</th>
              <th onClick={handleAdd}> Добавить<img alt='Plus' id='addImg' src='https://cdn-icons-png.flaticon.com/512/1828/1828817.png'/></th>
            </thead>
            <tbody>
            {isAdding && <tr>
                        <td>
                          <input           
                            value={newWord.english}
                            name="english"
                            onChange={handleInputChange}
                            />
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
              wordStore.isLoading && !wordStore.words ? <Loader/> : 
              wordStore.words.map((w) =>
              <Row id={w.id} english={w.english} transcription = {w.transcription} russian = {w.russian}></Row>
              )
            }
            </tbody>
        </div>
    )
}));

// @inject("wordStore")
// @observer
// class Table extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state={
//             newWord:'',
//             isLoading: this.props.isLoading,
//             words: this.props.words
//         }
//     };

//     componentDidMount(){
//         this.state.isLoading = true;
//         fetch('/api/words')
//             .then(response => response.json())
//             .then(response => this.props.words = response)
//         this.state.isLoading = true;
//     }

//     render() {
//         const {wordStore} = this.props;
//         const {newWord} = this.state;

//         return (
//           <div className='app-main__table'>
//                       <thead>
//                          <th>Слово с предлогом</th>
//                          <th>Транскрипция</th>
//                          <th>Перевод</th>
//                          <th>Управление</th>
//                        </thead>
//                        <tbody>
//                        {
//                          this.state.isLoading && this.state.words ? <Loader/> : 
//                         <> {this.state.words.map((w) =>
//                          <Row english={w.english} transcription = {w.transcription} russian = {w.russian}></Row>
//                          )}</>
//                        }
//                        </tbody>
//                    </div> 
//         )
//     }
// }

export default Table;
