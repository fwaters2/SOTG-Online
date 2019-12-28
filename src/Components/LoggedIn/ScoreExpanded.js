import React from "react";
import { Grid, Typography, Box, Button } from "@material-ui/core";

export default function ScoreExpanded({
  index,
  opponent,
  subscores,
  total,
  feedback,
  handleClick
}) {
  return (
    <Grid
      container
      alignItems="center"
      style={
        index % 2 === 1
          ? { background: "darkgray" }
          : { background: "lightgray" }
      }
      direction="column"
    >
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs container direction="column" spacing={1}>
          <Grid item>
            <Typography variant="caption">opponent:</Typography> {opponent}
          </Grid>
          <Grid item container>
            {subscores.map(subscore => (
              <Grid item xs>
                <Box
                  border="1px black solid"
                  paddingX=".2em"
                  //minWidth="1.5em"
                  textAlign="center"
                >
                  <Typography variant="caption">{subscore}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item style={{ minWidth: "2em" }}>
          <Typography variant="h6" align="right">
            {total}
          </Typography>
        </Grid>
      </Grid>
      <Grid item container alignItems="center">
        <Grid item xs>
          <Typography
            variant="caption"
            style={{
              maxWidth: "60vw",
              display: "block",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
          >
            {feedback}
            {/* {truncateString(feedback, 25)} */}
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            style={{ color: "black", padding: ".1em .3em" }}
            onClick={handleClick(feedback)}
          >
            More
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
