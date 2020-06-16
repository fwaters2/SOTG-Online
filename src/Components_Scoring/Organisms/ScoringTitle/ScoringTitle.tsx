import React from "react";
import { Typography } from "@material-ui/core";

interface Props {
  children?: any;
}

const Wrapper = (props: any) => (
  <div
    {...props}
    style={{
      padding: "0 0 2em 0",
      marginBottom: 0,
    }}
  />
);

const ScoringTitle = ({ children, ...props }: Props) => {
  return (
    <Wrapper {...props}>
      <Typography variant="h5">{children}</Typography>
    </Wrapper>
  );
};

export default ScoringTitle;
