import React from "react";
import { ListItemIcon, ListItemText, ListItem } from "@material-ui/core";
import { CheckBox, CheckBoxOutlineBlank } from "@material-ui/icons";

export default function ListCheckBox({
  examples,
  formResponses,
  setFormResponses,
  example
}) {
  const [isChecked, toggleChecked] = React.useState(false);
  const handleClick = () => {
    if (isChecked) {
      const filteredExamples = formResponses[examples].filter(
        x => x !== example
      );
      setFormResponses({
        ...formResponses,
        [examples]: filteredExamples
      });
    } else {
      setFormResponses({
        ...formResponses,
        [examples]: [...formResponses[examples], example]
      });
    }
    toggleChecked(!isChecked);
  };
  return (
    <ListItem style={{ padding: "4px 2em" }} onClick={handleClick}>
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
