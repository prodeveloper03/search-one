import React from "react";

import ReactDom from "react-dom";
import App from './App';
import './global.css';
import { BrowserRouter as Router } from 'react-router-dom';


ReactDom.render( 
    <Router>
        < App / >
    </Router>,
    
  document.getElementById('root'));