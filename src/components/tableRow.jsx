import React, {useState} from "react";
import Button from "./button";

export default function Row(props){
    const [edited, setEdited] = useState(false);
    const [transcription, setTranscription] = useState(props.transcription);
    const [translation, setTranslation] = useState(props.translation);
    const [word, setWord] = useState(`${props.preposition} ${props.word}`);

    function handleEdit(){
            setEdited(!edited);
    }

    function cancelChanges(){
        setTranslation(props.translation);
        setTranscription(props.transcription);
        setWord(`${props.preposition} ${props.word}`);
        setEdited(!edited);
    }

    return(
            edited ? <tr>
                        <td><input id='wordInput' onChange={(val) => setWord(val.target.value)} value={word}/></td>
                        <td><input id='transcriptionInput' onChange={(val) => setTranscription(val.target.value)} value={transcription}/></td>
                        <td><input id='translationInput' onChange={(val) => setTranslation(val.target.value)} value={translation}/></td>
                        <td><Button text='Cancel' onClick={cancelChanges} ></Button>
                        <Button text='Save' onClick={handleEdit}></Button></td>
                    </tr> :
                    <tr>
                        <td>{word}</td>
                        <td>{transcription}</td>
                        <td>{translation}</td>
                        <td><Button text='Удалить'></Button>
                        <Button text='Редактировать' onClick={handleEdit}></Button></td>
                    </tr>
    )
}