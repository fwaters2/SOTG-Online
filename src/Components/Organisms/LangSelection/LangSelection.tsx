import React from "react";
import { IconButton } from "@material-ui/core";
import LangDialog from "./LangDialog";

interface Props {
  children?: any;
  id?: string;
}

const Wrapper = (props: any) => <div {...props} />;

const LangSelection = ({ children, ...props }: Props) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Wrapper {...props}>
      <IconButton
        style={{
          color: "white",
          marginLeft: "20px",
          marginTop: "-10px",
          marginRight: "-10px",
        }}
        onClick={handleClickOpen}
      >
        {children}
      </IconButton>
      <LangDialog open={open} handleClose={handleClose} />
    </Wrapper>
  );
};

export default LangSelection;
