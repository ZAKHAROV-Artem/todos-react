import "./App.css";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import { useEffect, useState } from "react";

function App() {
  let [todos, setTodos] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("todos"));
    if (items) {
      setTodos(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const deleteTodo = (delete_id) => {
    todos = setTodos(todos.filter((todo) => todo.id !== delete_id));
  };

  return (
    <div className="App sm:flex block">
      <AddTodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
