import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer.js'
import SmartRouter from './router.js'

// const wassups = [ 
//     {
//         "user": 'Michael',
//         "id": 6,
//         "content": "If I had a gun with two bullets and I was in a room with Hitler, Bin Laden, and Toby, I would shoot Toby twice.",
//     },
//     {
//         "user": 'Jim',
//         "id": 5,
//         "content": "Beets, Bears, Battlestar Galactica."
//     },
//     {
//         "user": 'Kelly',
//         "id": 4,
//         "content": "I have alot of questions. Number one, how dare you?"
//     },
//     {
//         "user": 'Andy',
//         "id": 3,
//         "content": "Sorry I annoyed you with my friendship."
//     },
//     {
//         "user": 'Pam',
//         "id": 2,
//         "content": "I feel God in this Chili’s tonight."
//     },
//     {
//         "user": 'Dwight',
//         "id": 1,
//         "content": "Whenever I'm about to do something, I think, 'Would an idiot do that?' And if they would, I do not do that thing."
//     },
//     {
//         "user": "Michael",
//         "id": 0,
//         "content": "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me."
//     }
// ]



let initialState = {
    wassups: [],
    id: 7
}

const state = createStore(
    reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

const myApp =
  <Provider store={state}>
      <SmartRouter />
  </Provider>

ReactDOM.render(myApp, document.getElementById('root'));
registerServiceWorker();

export default state;
