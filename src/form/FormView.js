import React from "react";
import Router from "./Router";
import { Container } from "@material-ui/core";

export default function FormView({ state, data }) {
  return (
    <div className="form-content-view">
      <div
        style={{
          position: "fixed",
          right: "5px",
          top: "5px",
          justifySelf: "flex-end"
        }}
      ></div>
      <Container maxWidth="xs">
        <Router state={state} data={data} />
      </Container>
    </div>
  );
}
