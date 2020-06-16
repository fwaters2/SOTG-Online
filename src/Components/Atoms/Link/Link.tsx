import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { BLACK_OLIVE } from "../mycolors";

interface NavProps {
  to: string;
  children: any;
  style?: any;
}

interface Props {
  to?: string | undefined;
  children: string;
  href: string | undefined;
  style?: any;
}
const styles = {
  menuItems: {
    fontWeight: "bold",
    color: BLACK_OLIVE,
  },
};
const StyledNavLink = (props: NavProps) => {
  return (
    <RouterLink {...props}>
      <Typography variant="h6" style={styles.menuItems}>
        {props.children}
      </Typography>
    </RouterLink>
  );
};

const Link = (props: Props) => {
  const { to } = props;
  if (to) {
    return <StyledNavLink {...props} />;
  }
  return <a {...props}>{props.children}</a>;
};

export default Link;
