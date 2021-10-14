// import { render } from "@testing-library/react";
// import { words } from "lodash";
import { words } from "lodash";
import React from "react";
import Button from "./button";

export default class Row extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isEdited: false,
          transcription: this.props.transcription,
          russian: this.props.russian,
          english: this.props.english,
          isDisabled: false,
          words: this.props.words ,
          id: this.props.id,
          tags: this.props.tags || 'tags'
        };
      }

    handleEdit = () => {
            this.setState({
                isEdited: !this.state.isEdited
              });
    }

    handleSave = () => {
        if(this.state.english.match(/[А-Яа-яЁё]/gm)){
            alert('Word field should contain only latin letters!');
        } else if(this.state.russian.match(/[A-Za-z]/gm)){
            alert('Translation field should contain only russian letters!');
        } else {
            this.handleEdit();
        }
    }

    cancelChanges = () => {
        this.setState({
            isEdited: !this.state.isEdited,
            russian: this.props.russian,
            transcription: this.props.transcription,
            english: this.props.english
          });
    }

    handleInputChange= (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        if(value === ''){
            this.setState({
                isDisabled: true
            })
        } else {
            this.setState({
                isDisabled: false
            })
        }
        
        this.setState({
            [name]: value
        });
    }
    
    handleDelete = () => {
        let id = this.state.id;
        fetch(`/api/words/${id}/delete`, {method: 'POST'})
            .then(response => response.JSON)
            .then((response) => this.props.setWords(response))
            .then(this.props.setLoaded(false));
    }

    render(){
        return(
            this.state.isEdited ? <tr>
                        <td><input name='word' id='wordInput'  className={this.state.english === '' ? 'empty-input' : ''} onChange={this.handleInputChange} value={this.state.english}/></td>
                        <td><input name='transcription' id='transcriptionInput'  className={this.state.transcription === '' ? 'empty-input' : ''} onChange={this.handleInputChange} value={this.state.transcription}/></td>
                        <td><input name='russian' id='russianInput'  className={this.state.russian === '' ? 'empty-input' : ''} onChange={this.handleInputChange} value={this.state.russian}/></td>
                        <td><Button text='Cancel' onClick={this.cancelChanges} ></Button>
                        <Button isDisabled={this.state.isDisabled} id='save-btn' text='Save' onClick={this.handleSave}></Button></td>
                    </tr> :
                    <tr>
                        <td>{this.state.english}</td>
                        <td>{this.state.transcription}</td>
                        <td>{this.state.russian}</td>
                        <td><Button text='Удалить' onClick={this.handleDelete} ></Button>
                        <Button text='Редактировать' onClick={this.handleEdit}></Button></td>
                    </tr>
        );
    }
}