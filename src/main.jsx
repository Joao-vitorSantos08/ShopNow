import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/header/header'
import '../src/global.css'
import Main from './components/main/main'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Header/>
      <Main/>
  </StrictMode>,
)
