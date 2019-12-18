import React from "react";
import { Paper, Typography } from "@material-ui/core";

const myBlue = "#0C61E1";
//const myGreen = "#8FDE58";
//const myPurple = "#E82178";

export default function StyledPaper(props) {
  return (
    <Paper
      style={{
        color: "white",
        backgroundColor: myBlue,
        borderRadius: "12px",
        marginBottom: "1em",
        padding: "2em 0"
      }}
    >
      <div
        style={{
          padding: "0 0 2em 0",
          marginLeft: "2em",
          marginRight: "2em",
          marginBottom: 0
        }}
      >
        <Typography variant="h5">{props.title}</Typography>
      </div>
      {props.children}
    </Paper>
  );
}
