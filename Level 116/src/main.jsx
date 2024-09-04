import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ColorChange from './App.jsx'
import ToDoList from './Components/ToDo.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ColorChange />
    <ToDoList />
  </StrictMode>,
)
