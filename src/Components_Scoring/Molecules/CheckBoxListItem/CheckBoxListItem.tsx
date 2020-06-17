import React from "react";
import { ListItemIcon, ListItemText, ListItem } from "@material-ui/core";
import { CheckBox, CheckBoxOutlineBlank } from "@material-ui/icons";
import { GREEN } from "../../../Components/Atoms/mycolors";

interface Props {
  example: string;
  isLastListItem: boolean;
  isChecked: boolean;
  index: number;
}

const ListCheckBox = ({
  //examples,
  //formResponses,
  //setFormResponses,
  example,
  isLastListItem,
  isChecked,
}: // for international example
//category,
//categoryScore,
//index,
Props) => {
  const handleClick = () => {
    if (isChecked) {
      alert("already selected");
      return null;
    }
    alert("wants to become selected");
  };
  // const handleClick = () => {
  //   if (isChecked) {
  //     const filteredExamples = formResponses[examples].filter(
  //       (x) =>
  //         !(
  //           x.category === category &&
  //           x.categoryScore === categoryScore &&
  //           x.index === index
  //         )
  //     );
  //     // handleRemoveNotification("error");
  //     setFormResponses({
  //       //...formResponses,
  //       [examples]: filteredExamples,
  //     });
  //   } else {
  //     // handleAddNotification("success");
  //     setFormResponses({
  //       ...formResponses,
  //       [examples]: [
  //         ...formResponses[examples],
  //         { category, categoryScore, index },
  //       ],
  //     });
  //   }
  // };

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
