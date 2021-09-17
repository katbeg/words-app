import React, { useEffect, useState } from 'react';
import {  BrowserRouter,
          Switch,
          Route} from 'react-router-dom';
import Game from './components/game.jsx';
import './components/styles/card.scss';
import './components/styles/variables.scss';
import Header from './components/header.jsx';
import Loader from './components/loader.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';


function App() {
  const [isLoading, setLoading] = useState(true);
  
  useEffect(() => {
    //запрос на сервер, после запроса setLoading меняется
    setLoading(false); 
  },[]);

  return (
    <BrowserRouter>
        <div className="App">
      <Header></Header>
    <Switch>
        {isLoading? 
        <Loader/>:
        <>
        <main className='app-main'>
          {<Route exact path='/game' component={(props) => <Game {...props}/>}></Route>}
          {<Route exact path='/' component={(props) => <Main {...props}/>}></Route>}
        </main>
        <Footer></Footer>
        </>
        }      

      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
