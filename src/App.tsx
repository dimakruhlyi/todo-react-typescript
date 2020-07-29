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

  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <TodoForm onAdd = {AddHandler}/>
        <TodoList todos = {todos}/>
      </div>
    </React.Fragment>
    
  );
}

export default App;
