import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './components/counter'; //we don't need curly braces around counter since it is a default class



ReactDOM.render(<Counter />, document.getElementById("root"));
 
reportWebVitals();
