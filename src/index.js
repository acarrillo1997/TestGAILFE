import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppWrapper from './App.js';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';



ReactDOM.createRoot( 
  document.querySelector('#root')
).render(<AppWrapper />);
