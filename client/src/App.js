import './App.css';
import React from "react";
import Form from './components/Form';
import People from './components/People';
import {Router} from "@reach/router"
import Planets from './components/Planets';
import Starships from './components/Starships';


function App() {
  return (
    <div className="App">
      <Form/>
      <Router>
        <People path="/people/:id"/>
        <Planets path="/planets/:id"/>
        <Starships path="/starships/:id"/>
      </Router>
    </div>
  );
}

export default App;
