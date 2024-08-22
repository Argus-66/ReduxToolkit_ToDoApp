import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
      addTodo: (state, action) => {
        const todo = {
          id: nanoid(),
          text: action.payload,
          completed: false,
        }
        state.todos.push(todo)
      },
      removeTodo: (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload)
      },
      toggleComplete: (state, action) => {
        const todo = state.todos.find((todo) => todo.id === action.payload)
        if(todo) {
          todo.completed = !todo.completed
        }
      },
      setTodos: (state, action) => {
        state.todos = action.payload
      }
    },
  })
  
  export const { addTodo, removeTodo, toggleComplete, setTodos } = todoSlice.actions
  
  export default todoSlice.reducer;