 import 'react-app-polyfill/ie9';
// import 'core-js/es6/map';
// import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//this function for IE and Edge browsers from https://tips.tutorialhorizon.com/2017/01/06/object-doesnt-support-property-or-method-foreach/
(function () {
    if ( typeof NodeList.prototype.forEach === "function" ) return false;
    NodeList.prototype.forEach = Array.prototype.forEach;
})();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
