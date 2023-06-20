import './App.css';
import React from "react";
import Form from './components/Form';
import People from './components/People';
import {Router} from "@reach/router"

function App() {
  return (
    <div className="App">
      <Form/>
      <Router>
        <People path="/people/:id"/>
      </Router>
    </div>
  );
}

export default App;
