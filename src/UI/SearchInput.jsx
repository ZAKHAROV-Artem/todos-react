import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const FiltrationSelect = ({ value, onChange }) => {
  return (
    <div className="w-3/5">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { width: "100%" },
        }}
        noValidate
        autoComplete="on"
      >
        <TextField
          value={value}
          onChange={(e) => onChange(e.target.value)}
          id="outlined-search"
          label="Search field"
          type="search"
        />
      </Box>
    </div>
  );
};

export default FiltrationSelect;
