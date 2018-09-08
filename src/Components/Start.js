import React, { Component } from "react";
import Quiz from './Quiz';
import {
    HashRouter,
    Route,
    Switch,
    } from 'react-router-dom';
import MainPath from './MainPath';
import { StyleSheet, css } from 'aphrodite';

class Start extends Component {
    
    render() {
      return (
        <HashRouter>
            <div className={css(styles.start)}>
                <Switch>
                    <Route exact path='/' component={MainPath} />
                    <Route exact path='/Quiz' component={Quiz} />
                </Switch>
            </div>
        </HashRouter>
      )
    }
}

const styles = StyleSheet.create({
    start: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: `100%`
    }
  });

export default Start