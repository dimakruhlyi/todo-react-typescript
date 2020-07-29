import React, {useState} from 'react';
import { Navbar } from './components/Navbar';
import {TodoForm} from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { ITodo } from './interfaces';

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const AddHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    }
    //setTodos([newTodo, ...todos])
    setTodos(prev => {
      return [newTodo, ...prev]
    })
  }

  const toggleHandler = (id: number) => {
    setTodos(prev =>
      prev.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo;
    }))
  }

  const removeHandler = (id: number) => {
    const shouldRemove = window.confirm("Are you sure?");
    if(shouldRemove){
      setTodos(prev => prev.filter(todo => todo.id !== id));
    }
  }

  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <TodoForm onAdd = {AddHandler}/>
        <TodoList todos = {todos} onToggle = {toggleHandler} onRemove = {removeHandler}/>
      </div>
    </React.Fragment>
    
  );
}

export default App;
