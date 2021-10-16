import React, { useEffect } from "react";
import './styles/table.scss';
import Row from "./TableRowClass";
import { inject, observer } from "mobx-react";
import Loader from "./loader";

// const Table = inject(['wordStore'])(observer(({ wordStore }) => {
  
//     return(
//         <div className='app-main__table'>
//             <thead>
//               <th>Слово с предлогом</th>
//               <th>Транскрипция</th>
//               <th>Перевод</th>
//               <th>Управление</th>
//             </thead>
//             <tbody>
//             {
//               wordStore.isLoading ? <Loader/> : 
//               wordStore.words.map((w) =>
//               <Row english={w.english} transcription = {w.transcription} russian = {w.russian}></Row>
//               )
//             }
//             </tbody>
//         </div>
//     )
// }));

@inject("wordStore")
@observer
class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            newWord:''
        }
    };

    render() {
        const {wordStore} = this.props;
        const {newWord} = this.state;

        return (
          <div className='app-main__table'>
                      <thead>
                         <th>Слово с предлогом</th>
                         <th>Транскрипция</th>
                         <th>Перевод</th>
                         <th>Управление</th>
                       </thead>
                       <tbody>
                       {
                         wordStore.isLoading ? <Loader/> : 
                         wordStore.words.map((w) =>
                         <Row english={w.english} transcription = {w.transcription} russian = {w.russian}></Row>
                         )
                       }
                       </tbody>
                   </div> 
        )
    }
}

export default Table;
