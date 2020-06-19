import React from "react";
import { ListItemIcon, ListItemText, ListItem } from "@material-ui/core";
import { CheckBox, CheckBoxOutlineBlank } from "@material-ui/icons";
import { GREEN } from "../../../Components/Atoms/mycolors";

interface Props {
  example: string;
  isLastListItem: boolean;
  isChecked: boolean;
  index: number;
  onClick: any;
}

const ListCheckBox = ({
  example,
  isLastListItem,
  isChecked,
  onClick,
}: Props) => {
  const handleClick = () => {
    onClick();
  };

  const checkbox = isChecked ? (
    <CheckBox style={{ color: GREEN }} />
  ) : (
    <CheckBoxOutlineBlank style={{ color: "white" }} />
  );
  const listText = isChecked ? (
    <ListItemText primary={example} style={{ color: "#8FDE58" }} />
  ) : (
    <ListItemText primary={example} />
  );

  const lastItemStyle = isLastListItem
    ? { padding: "4px 2em" }
    : {
        padding: "4px 2em",
        // borderTop: "1px solid rgba(255,255,255,0.4)",

        // borderBottom: "1px solid rgba(255,255,255,0.4)"
      };
  return (
    <ListItem style={lastItemStyle} onClick={handleClick}>
      <ListItemIcon style={{ minWidth: "2.5em" }}>{checkbox}</ListItemIcon>
      {listText}
    </ListItem>
  );
};
export default ListCheckBox;
