import React from 'react';
import Card from './components/card';
import WordsList from './components/words-list';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <Card></Card>
        <WordsList></WordsList>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
