import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [todos, setTodos] = useState([])

  return (
    <>
    <h1>React and Redux Toolkits</h1>
    <AddTodo/ >
    <Todos />
    </>
  )
}

export default App
