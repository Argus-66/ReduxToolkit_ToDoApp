import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setTodos } from './features/todo/todoSlice'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const todos = useSelector(state => state.todos.todos)
  const dispatch = useDispatch()

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos')
    if (storedTodos !== null) {
      try {
        const parsedTodos = JSON.parse(storedTodos)
        if (Array.isArray(parsedTodos)) {
          dispatch(setTodos(parsedTodos))
        }
      } catch (error) {
        console.error('Error parsing stored todos:', error)
        // If there's an error parsing, we'll clear the localStorage
        localStorage.removeItem('todos')
      }
    }
  }, [dispatch])

  useEffect(() => {
    if (todos && todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos))
    } else {
      localStorage.removeItem('todos')
    }
  }, [todos])


  return (
    <>
    <h1>React and Redux Toolkits</h1>
    <AddTodo />
    <Todos />
    </>
  )
}

export default App
