import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const FiltrationSelect = ({ value, onChange }) => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { width: "40ch" },
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
  );
};

export default FiltrationSelect;
