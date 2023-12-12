import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import { UserProvider } from './Context/user' 


ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <Router>
        <App/>
      </Router>  
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
