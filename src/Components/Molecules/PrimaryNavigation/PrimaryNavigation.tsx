import React from "react";
import { Grid } from "@material-ui/core";
import Link from "../../Atoms/Link";

interface MenuItems {
  extension: string;
  text: string;
}

interface Props {
  menuLinks: Array<MenuItems>;
  id?: string;
}

const styles = {
  gridItem: {
    borderRadius: "8px",
    "&:hover": {
      backgroundColor: "rgba(143, 222, 88,.6)",
    },
    textDecoration: "none",
  },
};
//const Wrapper = (props: any) => < {...props} />;

const InnerWrapper = (props: any, link: any) => (
  <Grid
    item
    component={Link}
    style={styles.gridItem}
    to={link.extension}
    {...props}
  />
);

const PrimaryNavigation = (props: Props) => {
  return props.menuLinks.map((link) => (
    <InnerWrapper key={link.text} link={link} {...props}>
      {link.text}
    </InnerWrapper>
  ));
};

export default PrimaryNavigation;
