import React, { Component } from 'react';
import Start from './Components/Start';
import { StyleSheet, css } from 'aphrodite';

class App extends Component {
  render() {
    return (
      <div className={css(styles.app)}>
        <Start />
      </div>
    );
  }
}

const fadeIn = {
  '0%': {
      opacity: 0,
  },

  '100%': {
      opacity: 1,
  },
};


const styles = StyleSheet.create({
  app: {
    height: `100vh`,
    width: `100vw`,
    paddingTop: 30,
    paddingBottom: 30,
    animationName: fadeIn,
    animationDuration: '2s, 1200ms',
  }
});

export default App;
