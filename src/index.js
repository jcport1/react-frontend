import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer } from './reducers/reducer'
import thunk from 'redux-thunk'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
 
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
          <App />
        </Provider>
   </Router> 
  </React.StrictMode>,
  document.getElementById('root')
);