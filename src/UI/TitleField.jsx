import React from "react";

const TitleField = ({ onChange }) => {
  return (
    <div>
      <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">
        Title
      </h3>
      <input
        className="outline-none w-full h-10 rounded-md p-5 mb-5"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default TitleField;
