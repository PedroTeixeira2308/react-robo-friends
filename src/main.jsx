import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CardList from './components/CardList.jsx'
import 'tachyons'
import {robots} from './data/robots.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardList robots={robots}/>
  </StrictMode>,
)
