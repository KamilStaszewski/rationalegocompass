import React, { Component } from "react";
import Quiz from './Quiz';
import MainPath from './MainPath';
import {
    HashRouter,
    Route,
    Switch,
    } from 'react-router-dom';


export default class Start extends Component {
  render() {
    return (
    <HashRouter>
        <div className="start">
            <Switch>
                <Route exact path='/' component={MainPath} />
                <Route exact path='/Quiz' component={Quiz} />
            </Switch>
         </div>
    </HashRouter>
    )
  }
}
