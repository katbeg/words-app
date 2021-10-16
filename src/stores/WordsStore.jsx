import { action, observable } from "mobx";

class WordsStore{

  @observable words = [];
  @observable isLoading = false;

  @action getWords = () => {
    this.isLoading = true;
    fetch('/api/words')
        .then(response => response.json())
        // .then(response => this.words = response)
        .then(response => console.log(response))
    this.isLoading = true;
  }

  @action addWord = (word) => {
    this.words.push(word)
  }
}

export default WordsStore;