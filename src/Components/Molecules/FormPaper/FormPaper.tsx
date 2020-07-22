import React from "react";
import ThemeContext from "../../themes/default";
import { Paper } from "@material-ui/core";

interface Props {
  children?: any;
  id?: string;
}

const FormPaper = ({ children, ...props }: Props) => {
  const { palette } = React.useContext(ThemeContext);
  return (
    <Paper
      style={{
        color: palette.onPrimary,
        backgroundColor: palette.primary,
        borderRadius: "12px",
        padding: "2em",
      }}
      {...props}
    >
      {children}
    </Paper>
  );
};

export default FormPaper;
