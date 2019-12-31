import React from "react";
import { Grid, Typography, Box, Button } from "@material-ui/core";
import BoxScores from "./BoxScores";

export default function ScoreExpanded({
  index,
  opponent,
  subscores,
  total,
  feedback,
  handleClick
}) {
  return (
    <div
      style={{
        background: "#0038ae",
        margin: "0px -1em",
        boxShadow: "inset 5px 5px 5px rgba(0,0,0,0.2)"
        //height: "30vh",
        //overflow: "auto"
      }}
    >
      <Grid
        container
        alignItems="center"
        style={{ margin: "0.5em 0", padding: "0 1em" }}
        // style={
        //   index % 2 === 1
        //     ? { background: "darkgray" }
        //     : { background: "lightgray" }
        // }
        direction="column"
      >
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs container direction="column" spacing={1}>
            <Grid item container spacing={1} alignItems="center">
              <Grid item>
                <Box
                  style={{
                    //minWidth: "2.2em",
                    //minHeight: "2.2em",
                    padding: ".5em",
                    border: "1px solid lightgray",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "8px"
                  }}
                >
                  <Typography style={{ fontSize: "8pt" }}>Opponent:</Typography>
                </Box>
              </Grid>
              <Grid item>
                <Typography>{opponent}</Typography>
              </Grid>
            </Grid>
            <Grid item container>
              <BoxScores subscores={subscores} type="secondary" />
            </Grid>
          </Grid>
          <Grid item style={{ minWidth: "3em" }}>
            <Box
              style={{
                minWidth: "2.2em",
                minHeight: "2.2em",
                border: "1px solid lightgray",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "8px"
              }}
            >
              <Typography variant="h5" align="right">
                {total}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid item container alignItems="center">
          <Grid item xs>
            <Typography
              variant="caption"
              style={{
                margin: "1em 0",
                //maxWidth: "60vw",
                display: "block"
                //whiteSpace: "nowrap",
                //overflow: "hidden",
                //textOverflow: "ellipsis"
              }}
            >
              {feedback}
              {/* {truncateString(feedback, 25)} */}
            </Typography>
          </Grid>
          {/* <Grid item>
            <Button
              variant="outlined"
              style={{ color: "black", padding: ".1em .3em" }}
              onClick={handleClick(feedback)}
            >
              More
            </Button>
          </Grid> */}
        </Grid>
      </Grid>
    </div>
  );
}
