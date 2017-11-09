import axios from 'axios'

export const saveTodo = (todo) =>
  axios.post('http://localhost:3030/api/todos', todo)

export const loadTodos = () =>
  axios.get('http://localhost:3030/api/todos')

export const destroyTodo = (id) =>
  axios.delete(`http://localhost:3030/api/todos/${id}`)
