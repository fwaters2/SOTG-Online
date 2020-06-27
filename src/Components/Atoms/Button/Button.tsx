import React from "react";
import { Button as MuiButton } from "@material-ui/core";

interface Props {
  children?: any;
  style?: any;
  variant?: any;
  color?: any;
  onClick?: any;
}

const Button = (props: Props) => {
  return (
    <MuiButton
      // style={{
      //   borderRadius: 8,
      //   margin: ".5em 0",
      //   padding: ".5em",
      //   textTransform: "none",
      //   fontSize: "14pt",
      // }}
      {...props}
    >
      {props.children}
    </MuiButton>
  );
};

export default Button;
