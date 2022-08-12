import { useState } from "react";
import { useEffect } from "react";

export default function useStorage() {
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

  return [todos, setTodos, deleteTodo];
}
