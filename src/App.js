import "./App.css";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

import useStorage from "./hooks/useStorage";

function App() {
  const [todos, setTodos, deleteTodo] = useStorage();

  return (
    <div className="App sm:flex block">
      <AddTodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
