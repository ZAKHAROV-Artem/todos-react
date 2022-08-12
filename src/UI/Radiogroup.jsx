import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const Radiogroup = ({ options, onChange }) => {
  return (
    <div className="">
      <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">
        Importance
      </h3>
      <RadioGroup
        row
        onChange={(e) => onChange(e.target.value)}
        name="row-radio-buttons-group"
        className="items-center justify-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        {options.map((el) => {
          return (
            <FormControlLabel
              key={el.value}
              value={el.value}
              control={<Radio />}
              label={el.label}
            />
          );
        })}
      </RadioGroup>
    </div>
  );
};

export default Radiogroup;
