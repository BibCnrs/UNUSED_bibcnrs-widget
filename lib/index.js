import 'es5-shim';
import 'babel-polyfill';

import React from 'react';
import ReactDom from 'react-dom';
import Hello from './components/Hello';

window.React = React;
window.ReactDom = ReactDom;
window.bibcnrsWidget = {
    Hello
};
