import React, { useState, useEffect } from 'react';
import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://localhost:3000/todo")  // Corrected URL
      .then(async function (res) {
        const json = await res.json();
        setTodos(json.todos);
      })
      .catch(error => {
        console.error('Error fetching todo:', error);
      });
  }, []); // Empty dependency array means this effect runs once after the component mounts

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  );
}

export default App;
