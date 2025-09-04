import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
     {/* Entry point: render App inside BrowserRouter so routing works */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
