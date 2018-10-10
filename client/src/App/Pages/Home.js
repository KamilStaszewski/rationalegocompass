import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
    <div className="App">
      <h1>Ego compass</h1>
      <Link to={'./quiz'}>
        <button variant="raised">
            Play the game
        </button>
      </Link>
    </div>
    );
  }
}
export default Home;