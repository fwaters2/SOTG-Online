import React from "react";
import { ListItemIcon, ListItemText, ListItem } from "@material-ui/core";
import { CheckBox, CheckBoxOutlineBlank } from "@material-ui/icons";

export default function ListCheckBox({
  examples,
  formResponses,
  setFormResponses,
  example,
  isLastListItem,
  //for international example
  category,
  categoryScore,
  index
}) {
  const [isChecked, toggleChecked] = React.useState(false);
  const handleClick = () => {
    if (isChecked) {
      const filteredExamples = formResponses[examples].filter(
        x => x !== { category, categoryScore, index }
      );
      setFormResponses({
        ...formResponses,
        [examples]: filteredExamples
      });
    } else {
      setFormResponses({
        ...formResponses,
        [examples]: [
          ...formResponses[examples],
          { category, categoryScore, index }
        ]
      });
    }
    toggleChecked(!isChecked);
  };
  return (
    <ListItem
      style={
        isLastListItem
          ? { padding: "4px 2em" }
          : {
              padding: "4px 2em"
              //borderTop: "1px solid rgba(255,255,255,0.4)",

              //borderBottom: "1px solid rgba(255,255,255,0.4)"
            }
      }
      onClick={handleClick}
    >
      <ListItemIcon style={{ minWidth: "2.5em" }}>
        {isChecked ? (
          <CheckBox color="primary" />
        ) : (
          <CheckBoxOutlineBlank style={{ color: "white" }} />
        )}
      </ListItemIcon>
      {isChecked ? (
        <ListItemText primary={example} style={{ color: "#8FDE58" }} />
      ) : (
        <ListItemText primary={example} />
      )}
    </ListItem>
  );
}
