import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'normalize.css';
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import ContextProvider from './contex/ContexProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ContextProvider>
  </StrictMode>,
)
