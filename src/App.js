import React, { Component } from "react";
import * as ReactBootStrap  from "react-bootstrap"; 
import Home from './Home';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Detail from "./Detail";
import News from "./News";

function App(){
    return (
     
      <div>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/Home" component={Home} />
            <Route path="/Detail" component={Detail} />
            <Route path="/News" component={News} />
          </div>
        </Router>
        
      </div>
     
    );
  }

export default App;
