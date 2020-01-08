import React from "react";
import { Grid, Box, Typography, IconButton } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

export default function SubmissionSummary({
  team,
  total,
  submissions,
  toggleExpanded,
  isExpanded
}) {
  return (
    <Grid container spacing={1} alignItems="center" direction="row">
      <Grid item xs>
        <Grid container direction="column">
          <Box
            style={{
              width: "fit-content",
              marginLeft: "-.5em",
              padding: ".2em .5em",
              border: "1px solid black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "8px"
            }}
          >
            <Typography style={{ fontSize: "8pt" }}>Opponent:</Typography>
          </Box>

          <Grid item>{team}</Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Box
          style={{
            minWidth: "2.2em",
            minHeight: "2.2em",
            border: "1px solid black",
            padding: "0 .2em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "white",
            color: "black",
            boxShadow: "1px 1px 1px black",
            borderRadius: "8px"
          }}
        >
          <Typography variant="h6" style={{ fontWeight: "bold" }}>
            {total === -1 ? "--" : total}
          </Typography>
        </Box>
      </Grid>

      <Grid item>
        <Grid container direction="column" alignItems="center">
          {submissions === 0 ? null : (
            <Grid item>
              <IconButton
                style={{ padding: 0 }}
                onClick={() => toggleExpanded(!isExpanded)}
              >
                {isExpanded ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
