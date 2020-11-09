import Header from './Header';
import './App.css';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from './Footer';
import Books from './Books';
import Start from './Start';

export default function App() {
  // render() {
  //   return (
  //     <div className="App">
  //       <Header/>
  //       <Books />
  //     </div>
  //   );
  // }

  return (

    <Router>
      <div>
        

         {/* A <Switch> looks through its children <Route>s and
        //     renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Search">
            <Search />
          </Route>
          <Route path="/">
          <Home/>
          </Route>
        </Switch>
      </div>

    </Router>

  );

  function Home() {
    return (
      <div className="Home">
        <Start/>
      </div>
    );
  }
  
  function Search() {
      return (
        <div className="App">
          <Header/>
          <Books />
          <Footer />
        </div>
      );
    }

}

