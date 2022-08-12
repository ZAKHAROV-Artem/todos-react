import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const FiltrationSelect = ({ value, onChange, options }) => {
  return (
    <div className="w-2/5 mr-1">
      <FormControl className="w-full" size="big">
        <InputLabel id="demo-simple-select-helper-label">Importance</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={value}
          label="Importance"
          onChange={(e) => onChange(e.target.value)}
        >
          <MenuItem value="none" disabled>
            <em>None</em>
          </MenuItem>
          {options.map((el) => {
            return (
              <MenuItem key={el.value} value={el.value}>
                {el.title}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default FiltrationSelect;
