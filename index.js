import ReactDOM from 'react-dom/client';
import './index.css';
import BalanceAdjustment from './BalanceAdjustment';
import reportWebVitals from './reportWebVitals';
import React, { Component } from "react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BalanceAdjustment />
  </React.StrictMode>
);

