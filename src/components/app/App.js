import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Navigation from "../navigation/Navigation";
import HomePage from "../home/HomePage";

import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Navigation />
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                </Switch>
            </div>
        </Router>
    );
  }
}

export default App;
