import React from "react";
import { Grid } from "@material-ui/core";
import NavLink from "../Components/NavLink";

export default function Signature() {
  const currentYear = new Date().getFullYear().toString();
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%"
      }}
    >
      <Grid container spacing={3} justify="space-around">
        <Grid item>{"Ⓒ" + currentYear + " UltiDeveloper"}</Grid>
        <Grid item>
          <NavLink label="Home" extension="" />
        </Grid>
      </Grid>
    </div>
  );
}
