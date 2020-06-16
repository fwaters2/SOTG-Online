import React from "react";
import PrimaryNavigation from "../../Molecules/PrimaryNavigation";
import { withStyles } from "@material-ui/styles";
import { ExpansionPanel, ExpansionPanelSummary, Grid } from "@material-ui/core";
import BrandLogo from "../../Molecules/BrandLogo";
import HeaderAvatar from "../../Molecules/HeaderAvatar";

interface Props {
  menuLinks: Elmement[];
}
const StyledExpansionPanel = withStyles({})(ExpansionPanel);
const StyledExpansionPanelSummary = withStyles({
  root: {},
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(ExpansionPanelSummary);

const Header = (props: Props) => {
  return (
    <div {...props}>
      <StyledExpansionPanel elevation={0}>
        <StyledExpansionPanelSummary>
          <BrandLogo />
          <Grid container spacing={3} alignItems="center" justify="flex-end">
            <PrimaryNavigation {...props} />
            <HeaderAvatar />
          </Grid>
        </StyledExpansionPanelSummary>
      </StyledExpansionPanel>
    </div>
  );
};

export default Header;
