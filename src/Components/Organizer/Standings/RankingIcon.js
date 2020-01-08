import React from "react";
import { Box, Icon, Typography } from "@material-ui/core";
import { EmojiEvents } from "@material-ui/icons";

export default function RankingIcon({ children }) {
  return (
    <Box
      style={{
        minWidth: "2.2em",
        minHeight: "2.2em",
        border: "1px solid lightgray",
        display: "flex",
        background: "#0C61E1",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "8px",
        color: "white"
      }}
    >
      {children <= 2 ? (
        <Icon
          style={
            children === 0
              ? { color: "#ffd890" }
              : children === 1
              ? { color: "#E6E8FA" }
              : { color: "#ff8a6d" }
          }
        >
          <EmojiEvents />
        </Icon>
      ) : (
        <Typography variant="body1" align="center">
          {children + 1}
        </Typography>
      )}
    </Box>
  );
}
