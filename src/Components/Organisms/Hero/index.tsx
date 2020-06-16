import React from "react";
import { Box } from "@material-ui/core";

interface Props {
  Logo?: JSX.Element;
}

const Hero = (props: Props) => {
  const { Logo } = props;
  return (
    <div>
      <Box m="3em" mt={0}>
        {() => Logo}
      </Box>
    </div>
  );
};

export default Hero;
