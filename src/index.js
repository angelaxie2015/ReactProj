import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import Counters from './components/counters'; //we don't need curly braces around counter since it is a default class



ReactDOM.render(<App />, document.getElementById("root"));
 
reportWebVitals();
