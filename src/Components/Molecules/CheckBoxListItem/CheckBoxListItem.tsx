import React from "react";
import { ListItemIcon, ListItemText, ListItem } from "@material-ui/core";
import { CheckBox, CheckBoxOutlineBlank } from "@material-ui/icons";
import ThemeContext from "../../themes/default";

interface Props {
  primary: string;
  isChecked: boolean;
  index: number;
  onClick: any;
}

const ListCheckBox = ({ isChecked, onClick, ...props }: Props) => {
  const theme = React.useContext(ThemeContext);
  const { palette } = theme;
  const checkbox = isChecked ? (
    <CheckBox style={{ color: palette.secondary }} />
  ) : (
    <CheckBoxOutlineBlank style={{ color: palette.onPrimary }} />
  );

  return (
    <ListItem style={{ padding: "4px 2em" }} onClick={onClick}>
      <ListItemIcon style={{ minWidth: "2.5em" }}>{checkbox}</ListItemIcon>
      <ListItemText
        {...props}
        style={isChecked ? { color: palette.secondary } : {}}
      />
    </ListItem>
  );
};
export default ListCheckBox;
