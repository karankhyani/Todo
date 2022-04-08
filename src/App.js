import React, { useEffect, useState } from 'react';
import TodoForm from './Components/TodoForm';
import Todos from './Components/Todos';
import './App.css';
function App() {
  const [todos, setTodos] = useState([])
  const formSubmitHandler = (todo) => {
    setTodos(() => (
      [
        ...todos,
         todo,
      ]
    )
    )
  }

  const markAsDoneHandler=(id)=>{
      setTodos(todos.filter((todo)=>{return todo.id!==id}))
  }
  useEffect(() => {
    const localTodos = localStorage.getItem('todos')
    if (localTodos) {
      setTodos(JSON.parse(localTodos))
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  return (
    <div>
      <h3>Add Todo</h3>
      <TodoForm onSubmitHandler={formSubmitHandler} />
      <Todos todoList={todos} markDone={markAsDoneHandler}/>
    </div>
  );
}

export default App;
