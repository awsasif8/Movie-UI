import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom'
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import SearchTicket from './Components/SearchTicket/SearchTicket';
import ViewTicket from './Components/ViewTicket/ViewTicket';
import SearchResult from './Components/SearchResults/SearchResult';
function App() {
  return (
    <div className="App">
       <HashRouter>
        <Header />
          <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/search-movie' exact component={SearchTicket}></Route>
          <Route path='/view-ticket' exact component={ViewTicket}></Route>
          <Route path='/search-result' exact component={SearchResult}></Route>     
          </Switch> 
  
        </HashRouter>
    </div>
  );
}

export default App;
