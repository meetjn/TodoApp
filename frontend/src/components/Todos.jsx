import React from 'react';

export function Todos({ todos }) {
  const markAsCompleted = (id) => {
    // Assuming you have an API endpoint to update the completion status
    fetch(`https://localhost:3000/todo/${id}/complete`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed: true }),
    })
      .then((response) => response.json())
      .then((updatedTodo) => {
        // Update the state with the updated todo
        // Assuming you have a function like setTodos to update the state
        // setTodos((prevTodos) =>
        //   prevTodos.map((todo) =>
        //     todo.id === updatedTodo.id ? updatedTodo : todo
        //   )
        // );
        console.log('Todo marked as completed:', updatedTodo);
      })
      .catch((error) => {
        console.error('Error marking todo as completed:', error);
      });
  };

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
          <button onClick={() => markAsCompleted(todo.id)}>
            {todo.completed ? 'Completed' : 'Mark as completed'}
          </button>
        </div>
      ))}
    </div>
  );
}
