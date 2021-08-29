import React from 'react';
import Card from './components/card.jsx';
// import WordsList from './components/words-list';
// import DataGrid from 'react-data-grid';
import './components/styles/card.scss';
import './components/styles/variables.scss';
import Header from './components/header.jsx';

const words = [
  {preposition: 'das',
  word: 'Problem',
  transcription: '[proˈbleːm]',
  translation: 'Проблема'},
  {preposition: 'die',
  word: 'Arbeit',
  transcription: '[ˈaʁbaɪ̯t]',
  translation: 'Работа'},
  {preposition: 'die',
  word: 'Liebe',
  transcription: '[ˈliːbə]',
  translation: 'Любовь'},
  {preposition: 'der',
  word: 'Traum',
  transcription: '[tʁaʊ̯m]',
  translation: 'Мечта'},
  {preposition: 'das',
  word: 'Essen',
  transcription: '[ˈɛsn̩]',
  translation: 'Еда'},
  {preposition: 'die',
  word: 'Hochzeit',
  transcription: '[ˈhɔˌʦaɪ̯t]',
  translation: 'Свадьба'},
  {preposition: 'das',
  word: 'Kleid',
  transcription: '[klaɪ̯t]',
  translation: 'Платье'},
  {preposition: 'der',
  word: 'Computer',
  transcription: '[kɔmˈpjuːtɐ]',
  translation: 'Компьютер'},
  {preposition: 'die',
  word: 'Chefin',
  transcription: '[ˈʃɛfɪn]',
  translation: 'Начальница'},
  {preposition: 'das',
  word: 'Jahr',
  transcription: 'ˈjaːɐ̯',
  translation: 'Год'}
];

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main className='app-main'>
        {
          words.map((w) =>
            <Card word={w.word} 
            preposition={w.preposition} transcription={w.transcription} translation = {w.translation}></Card>
          )
        }
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
