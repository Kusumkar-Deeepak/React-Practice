import { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState([]); // State for storing todo items
  const [inputValue, setInputValue] = useState(""); // State for input field

  // Handle input change
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // Handle adding todo
  const handleTodo = () => {
    if (!inputValue.trim()) {
      alert("Please enter something");
      return;
    }

    // Add the new todo to the existing list
    setTodo([...todo, inputValue]);
    setInputValue(""); // Clear the input field after adding
  };

  // Handle deleting a todo
  const deleteTodo = (indexToDelete) => {
    const updatedTodos = todo.filter((_, index) => index !== indexToDelete);
    setTodo(updatedTodos); // Update state with the filtered todo list
  };

  return (
    <>
      <div style={styles.container}>
        <h1 style={styles.title}>Todo App</h1>
        <div style={styles.inputContainer}>
          <input
            type="text"
            placeholder="Add todo"
            value={inputValue}
            onChange={handleChange}
            style={styles.input}
          />
          <button onClick={handleTodo} style={styles.addButton}>
            Add
          </button>
        </div>
        <div>
          <ul style={styles.todoList}>
            {todo.map((todoItem, index) => (
              <li key={index} style={styles.todoItem}>
                {todoItem}
                <button
                  style={styles.deleteButton}
                  onClick={() => deleteTodo(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f4f4f9',
    padding: '20px',
  },
  title: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '20px',
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
  },
  input: {
    width: '300px',
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginRight: '10px',
  },
  addButton: {
    padding: '10px 20px',
    fontSize: '1rem',
    borderRadius: '5px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
  todoList: {
    listStyleType: 'none',
    padding: 0,
    width: '350px',
  },
  todoItem: {
    backgroundColor: '#fff',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    fontSize: '1rem',
    color: '#333',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#FF0000',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
