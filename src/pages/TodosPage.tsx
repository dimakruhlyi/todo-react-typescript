import React, {useState, useEffect} from 'react';
import {TodoList} from '../components/TodoList';
import {TodoForm} from '../components/TodoForm';
import { ITodo } from '../interfaces';

export const TodosPage: React.FC = () => {

    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
      const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
  
      setTodos(saved)
    }, [])
  
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
  
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

    return(
        <React.Fragment>
            <TodoForm onAdd = {AddHandler}/>
            <TodoList todos = {todos} onToggle = {toggleHandler} onRemove = {removeHandler}/>
        </React.Fragment>
    )
}