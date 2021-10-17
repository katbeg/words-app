import { action, makeAutoObservable, observable } from "mobx";

class WordsStore{

  words = [];
  isLoading = false;

  constructor(){
    makeAutoObservable(this)
  }

  getWords = () => {
    this.isLoading = true;
    return fetch('/api/words')
          .then(response => response.json())
          .then(response => this.words = response)
          .then(this.isLoading = false)
  }

  @action addWord = (word) => {
    fetch(`/api/words/add`, 
            {method: 'POST',
            body: JSON.stringify({
                transcription: word.transcription,
                russian: word.russian,
                english: word.english,
                tags: word.tags}
            )})
            .then(response => response.json())
    this.words.push(word)
  }

  @action deleteWord = (id) => {
      fetch(`/api/words/${id}/delete`, {method: 'POST'})
        .then(response => response.json())
      let word = this.words.find(item => item.id === id);
      let index = this.words.indexOf(word);
      return this.words.splice(index, 1)
  }

  // @action updateWord = (id, transcription, russian, english, tags) => {
  //   let updatedWord = {
  //     transcription: transcription,
  //     russian: russian,
  //     english: english,
  //     tags: tags,
  //     id: id
  //   }
  //   fetch(`/api/words/${id}/update`, {
  //     method: 'POST',
  //     body: JSON.stringify({updatedWord})
  //   })
  //   .then(response => response.json())
  // }
}

export default WordsStore;