import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Quiz from './Pages/Quiz';


const App = () => (
  <div className="app">
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/quiz' component={Quiz}/>
    </Switch>
  </div>
)


export default App;
