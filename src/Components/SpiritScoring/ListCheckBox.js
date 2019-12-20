import React from "react";
import { ListItemIcon, ListItemText, ListItem } from "@material-ui/core";
import { CheckBox, CheckBoxOutlineBlank } from "@material-ui/icons";
import { SnackbarProvider, useSnackbar } from "notistack";

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
  const isChecked = formResponses[examples]
    .map(
      x =>
        x.category === category &&
        x.categoryScore === categoryScore &&
        x.index === index
    )
    .includes(true);
  const { enqueueSnackbar } = useSnackbar();

  const handleAddNotification = variant => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar("Added to Feedback!", { variant });
  };
  const handleRemoveNotification = variant => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar("Removed from Feedback!", { variant });
  };
  const handleClick = () => {
    if (isChecked) {
      const filteredExamples = formResponses[examples].filter(
        x =>
          !(
            x.category === category &&
            x.categoryScore === categoryScore &&
            x.index === index
          )
      );
      handleRemoveNotification("error");
      setFormResponses({
        ...formResponses,
        [examples]: filteredExamples
      });
    } else {
      handleAddNotification("success");
      setFormResponses({
        ...formResponses,
        [examples]: [
          ...formResponses[examples],
          { category, categoryScore, index }
        ]
      });
    }
  };
  return (
    <SnackbarProvider maxSnack={3}>
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
    </SnackbarProvider>
  );
}
