import React, { Component } from "react";
import Quiz from './Quiz';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
    } from 'react-router-dom';
import MainPath from './MainPath';

class Start extends Component {
    
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

export default Start