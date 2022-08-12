import React from "react";
import { FcEmptyTrash } from "react-icons/fc";

const TodoItem = ({ deleteTodo, todos, todo }) => {
  const getColor = (importance) => {
    const color = {
      3: "black",
      2: "rgb(223, 190, 23)",
      1: "red",
    };

    return color[importance];
  };
  const getImportanceInText = (num) => {
    const importance = {
      3: "Simple",
      2: "Medium",
      1: "Important",
    };

    return importance[num];
  };

  return (
    <div className="w-full h-fit mt-3 px-3 py-2 rounded-md bg-white flex justify-between items-center">
      <div>
        <h3
          className="font-bold uppercase text-sm"
          style={{ color: getColor(todo.importance) }}
        >
          {getImportanceInText(todo.importance)}
        </h3>
        <h3 style={{ maxWidth: "70%" }}>{todo.title}</h3>
      </div>
      <div>
        <button>
          <FcEmptyTrash
            onClick={() => deleteTodo(todo.id)}
            size="1.7em"
          ></FcEmptyTrash>
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
