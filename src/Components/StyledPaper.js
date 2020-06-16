import React from "react";
import { Paper } from "@material-ui/core";

const BLUE = "#0C61E1";

export default function StyledPaper({ children }) {
  return (
    <Paper
      style={{
        color: "white",
        backgroundColor: BLUE,
        borderRadius: "12px",
        marginBottom: "1em",
        padding: "2em 0",
      }}
    >
      {children}
    </Paper>
  );
}
