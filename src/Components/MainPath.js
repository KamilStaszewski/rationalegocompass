import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MainPath extends Component {
  render() {
    return (
      <div>
        <div>
            <h1 className="Logo">Rational Ego Compass</h1>         
            <Link to='/Quiz' className="link">
            <div>
                <button>Start Quiz</button>
            </div>
            </Link>
        </div>
      </div>
    )
  }
}
