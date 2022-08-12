import { FcTodoList } from "react-icons/fc";
import React from "react";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Radiogroup from "../UI/Radiogroup";

import TitleField from "../UI/TitleField";

const AddTodoForm = ({ todos, setTodos }) => {
  const [title, setTitle] = useState("");
  const [importance, setImportance] = useState("simple");

  const addTodo = (e) => {
    e.preventDefault();

    setTodos([...todos, { title, importance, id: Date.now() }]);
  };

  return (
    <div className="bg-white mb-5 mt-3 sm:m-0 sm:h-screen sm:w-2/5 flex justify-center items-center">
      <FormControl className="w-4/5 m-auto flex flex-col">
        <FcTodoList size="2.5em" className="mb-5" />
        <TitleField onChange={setTitle} />
        <Radiogroup
          options={[
            { value: "3", label: "Simple task" },
            { value: "2", label: "Medium" },
            { value: "1", label: "Important" },
          ]}
          onChange={setImportance}
        />
        <button
          type="submit"
          onClick={addTodo}
          className="w-full bg-sky-400 mt-4 px-3 py-2 text-white rounded-md"
        >
          Add
        </button>
      </FormControl>
    </div>
  );
};

export default AddTodoForm;
