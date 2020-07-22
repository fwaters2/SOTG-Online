import React from "react";
import {
  ListItem,
  ListItemText,
  Typography,
  ListItemAvatar,
  Avatar,
  List,
} from "@material-ui/core";
import ThemeContext from "../../themes/default";
import ScoringFormContext from "../../../Contexts/ScoringFormContext";

const ScoreList = () => {
  const theme = React.useContext(ThemeContext);
  const formData = React.useContext(ScoringFormContext);
  //const { setStep } = formData;
  const subtotalText = [
    {
      name: "Rules Knowledge and Use",
      score: 4,
    },
    {
      name: "Fouls and Body Contact",
      score: 1,
    },
    {
      name: "Fair-Mindedness",
      score: 3,
    },
    {
      name: "Positive Attitude and Self-Control",
      score: 1,
    },
    {
      name: "Communication",
      score: 2,
    },
  ];
  const numberStyle = (value) => {
    switch (value) {
      case 0:
        return {
          color: "white",
          backgroundColor: "red",
          border: "gray 1px solid",
        };
      case 1:
        return {
          color: "salmon",
          backgroundColor: "white",
          border: "gray 1px solid",
        };
      case 2:
        return {
          color: "gray",
          backgroundColor: theme.palette.background,
          border: "gray 1px solid",
        };
      case 3:
        return {
          color: "lightgreen",
          backgroundColor: "white",
          border: "gray 1px solid",
        };
      case 4:
        return {
          color: "white",
          backgroundColor: theme.palette.secondary,
          border: "gray 1px solid",
        };
      default:
        return null;
    }
  };

  return (
    <List style={{ margin: "0 1em 1em", padding: "10px 0" }}>
      {subtotalText.map((category, index) => (
        <ListItem
          key={category.name}
          divider
          //onClick={() => formData.setStep(formData)}
        >
          <ListItemText primary={category.name} style={{ flex: 1 }} />
          <ListItemAvatar style={{ fontSize: "18pt", minWidth: "20px" }}>
            <Avatar style={numberStyle(category.score)}>
              <Typography
                variant={"h5"}
                style={{
                  fontWeight: "bolder",
                }}
                align="center"
              >
                {category.score}
              </Typography>
            </Avatar>
          </ListItemAvatar>
        </ListItem>
      ))}
      <ListItem>
        <ListItemText style={{ flex: 1, fontSize: "18pt" }} primary={"Total"} />
        <ListItemAvatar style={{ minWidth: "20px" }}>
          <Avatar style={{ backgroundColor: "white", color: "black" }}>
            <Typography variant={"h4"} style={{ fontWeight: "bolder" }}>
              10
            </Typography>
          </Avatar>
        </ListItemAvatar>
      </ListItem>
    </List>
  );
};

export default ScoreList;
