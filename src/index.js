import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
// import managePainting from './reducers/managePainting';
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
