import React from 'react'
import ReactDOM from 'react-dom/client'
import {HelmetProvider} from 'react-helmet-async'
import App from './App.jsx'
import './index.css'
import { StoreProvider } from '../Store/Store.jsx'
import {BrowserRouter} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <StoreProvider>
      <BrowserRouter>
      <HelmetProvider>
       <App />
  </HelmetProvider>
   </BrowserRouter>
   </StoreProvider>
)
