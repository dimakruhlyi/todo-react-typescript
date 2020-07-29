import React, {useState} from 'react';
import { Navbar } from './components/Navbar';
import {TodoForm} from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([]);

  const AddHandler = (title: string) => {
    console.log('Add new ToDo ', title);
  }

  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <TodoForm onAdd = {AddHandler}/>

      </div>
    </React.Fragment>
    
  );
}

export default App;
