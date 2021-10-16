import { action, observable } from "mobx";
class WordsStore {
  @observable words = [];

//   useEffect(() => {
//     setLoaded(true);
//     fetch('/api/words')
//         .then((response) => response.json())
//         .then((response) => setWords(response))
//         .then(setLoaded(false))
// }, []);

  componentDidMount(){
    fetch('/api/words')
      .then((response) => response.json())
      .then((response) => this.setState.words(response))
      .then(setLoaded(false))
  }

  @action deleteWord() {
    return this.counter + 1
  }

  @action updateWord() {
    return this.counter + 1
  }

  @action addWord() {
    return this.counter + 1
  }
}

export default WordsStore;