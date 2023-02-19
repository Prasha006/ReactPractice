import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from "react-router-dom";

// If you want to view the page in old browser (ex I.E) also we have to enter the below line
// import { HarshRouter } from "react-router-dom";
// and below lines are
//   <React.StrictMode>
// <HarshRouter>
// <App />
// </HarshRouter>,
// </React.StrictMode>,




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </React.StrictMode>,
)
