import React from "react";
import FiltrationSelect from "../UI/FiltrationSelect";
import SearchInput from "../UI/SearchInput";
import TodoItem from "./TodoItem";
import { useState } from "react";
import { useSelect } from "../hooks/useSelect";

const TodoList = ({ todos, deleteTodo }) => {
  const [select, setSelect] = useState("by_date");
  const [query, setQuery] = useState("");

  const sorted_and_searched_todos = useSelect(todos, select, query);
  return (
    <div className="sm:w-3/5 h-screen list flex flex-col items-center">
      <div className="w-10/12 mt-5 flex">
        <FiltrationSelect
          value={select}
          onChange={setSelect}
          options={[
            { value: "by_title", title: "By title" },
            { value: "by_importance", title: "By importance" },
            { value: "by_date", title: "By date" },
          ]}
        />
        <SearchInput value={query} onChange={setQuery} />
      </div>

      <div className="w-10/12 h-fit mt-5 px-3 py-2 rounded-md text-white flex justify-between items-center">
        <div>
          <h3>Importance</h3>
          <h3>Title</h3>
        </div>
        <h3>Controls</h3>
      </div>

      <div
        className="w-10/12 overflow-scroll pb-3"
        style={{ maxHeight: "100vh", maxWidth: "90%" }}
      >
        {todos.length ? (
          <div>
            {sorted_and_searched_todos.map((el) => {
              return (
                <TodoItem
                  key={el.id}
                  deleteTodo={deleteTodo}
                  todos={todos}
                  todo={el}
                />
              );
            })}
          </div>
        ) : (
          <h1 className="mt-5 text-center text-white text-bold text-3xl">
            No todos 🎉
          </h1>
        )}
      </div>
    </div>
  );
};

export default TodoList;
