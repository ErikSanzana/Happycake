import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const rootElement = document.getElementById('root');
rootElement.style.width = '100%';
rootElement.style.height = '100%';
rootElement.style.position = 'absolute';
rootElement.style.top = '0';
rootElement.style.left = '0';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)