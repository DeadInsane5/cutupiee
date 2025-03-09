import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Player from './components/Player.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Player />
  </StrictMode>,
)
