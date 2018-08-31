import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css'
import { Provider } from 'react-redux';
import { createStore, combineReducers} from 'redux';
import answerReducer from './Reducers/answersReducer';
import Questions from './data.js';

const reducers = combineReducers({
    questions: () => Questions,
    answers: answerReducer
})

const store = createStore(reducers);




ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

