import React, { Component } from "react";
import Quiz from './Quiz';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
    } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    hover: {
        borderBottom: `3px solid #fff`,
        paddingBottom: 3,
        fontSize: 60
    }
    }
);

class MainPath extends Component {
    render() {
      return (
          <div>
              <h1 className="Logo">Rational Ego Compass</h1>         
            <Link to='/Quiz' className="link">
            <div>
                <button onClick={this.startQuiz}>Start Quiz</button>
            </div>
            </Link>
        </div>
      )
    }
}

export default MainPath