import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Quiz from './Components/Quiz';


const App = () => (
  <div className="app">
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/quiz' component={Quiz}/>
    </Switch>
  </div>
)


export default App;
