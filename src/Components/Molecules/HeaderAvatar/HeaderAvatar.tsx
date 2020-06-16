import React from "react";
import { Grid, IconButton } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import ProfileMenu from "../../ProfileMenu";

interface Props {
  children?: any;
  id?: string;
}

const Wrapper = (props: any) => {
  const [isPopperOpen, handlePopperToggle] = React.useState(false);
  const anchorRef = React.useRef(null);
  return (
    <Grid
      item
      onClick={() => handlePopperToggle(!isPopperOpen)}
      ref={anchorRef}
      {...props}
    >
      <ProfileMenu
        anchorRef={anchorRef}
        open={isPopperOpen}
        setOpen={handlePopperToggle}
      />
    </Grid>
  );
};

const HeaderAvatar = ({ ...props }: Props) => {
  return (
    <Wrapper {...props}>
      <IconButton color="secondary">
        <AccountCircle />
      </IconButton>
    </Wrapper>
  );
};

export default HeaderAvatar;
