import React from 'react';
import { Navbar } from './components/Navbar';
import {TodoForm} from './components/TodoForm';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <TodoForm />

      </div>
    </React.Fragment>
    
  );
}

export default App;
