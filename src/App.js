import React, { useEffect, useState } from 'react';
import {  BrowserRouter,
          Switch,
          Route} from 'react-router-dom';
import Cards from './components/Cards.jsx';
import './components/styles/card.scss';
import './components/styles/loader.scss';
import './components/styles/variables.scss';
import Header from './components/header.jsx';
import Loader from './components/loader.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';
import Page404 from './components/Page404.jsx';
import Game from './components/Game.jsx';
import {observer, inject} from "mobx-react";

function App() {
  return (
    <BrowserRouter>
        <div className="App">
      <Header></Header>
      {isLoading? 
        <Loader/>:
        <>
        <main className='app-main'>
          <Switch>
            <Route exact path='/game' component={(props) => <Game {...props}/>}></Route>
            <Route exact path='/cards' component={(props) => <Cards {...props}/>}></Route>
            <Route exact path='/' component={(props) => <Main {...props}/>}></Route>
            <Route component={Page404} /> 
          </Switch>
        </main>
        <Footer></Footer>
        </>
        }       
    </div>
    </BrowserRouter>
  );
}

export default App;
