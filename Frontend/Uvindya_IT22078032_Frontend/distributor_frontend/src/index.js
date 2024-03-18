import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AccountContextProvider } from './context/AccountContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AccountContextProvider>
      <App />
    </AccountContextProvider>
  </React.StrictMode>
);

