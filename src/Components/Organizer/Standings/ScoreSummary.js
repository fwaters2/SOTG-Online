import React from "react";
import {
  Grid,
  Typography,
  Box,
  ExpansionPanelActions,
  IconButton,
  Icon
} from "@material-ui/core";
import BoxScores from "./BoxScores";
import { ExpandMore, ExpandLess, EmojiEvents } from "@material-ui/icons";

export default function ScoreSummary({
  index,
  team,
  subscores,
  total,
  submissions,
  toggleExpanded,
  isExpanded
}) {
  return (
    // <Grid container alignItems="center" spacing={2}>
    //   <Grid
    //     item
    //     style={{
    //       minWidth: "2.2em",
    //       border: "1px solid lightgray"
    //       //borderRadius: "8px"
    //     }}
    //   >
    //     <Typography variant="body2" align="center">
    //       {index + 1}
    //     </Typography>
    //   </Grid>
    //   <Grid item xs container direction="column" spacing={1}>
    //     <Grid item>
    //       <Grid container alignItems="center">
    //         <Grid item xs>
    //           {team + " (" + submissions + ")"}
    //         </Grid>
    //         <Grid item>
    //           <Typography variant="h4" align="right">
    //             {total === -1 ? "--" : total}
    //           </Typography>
    //         </Grid>
    //       </Grid>
    //     </Grid>
    //     <Grid item container>
    //       <BoxScores subscores={subscores} />
    //     </Grid>
    //   </Grid>
    // </Grid>
    <Grid
      container
      //spacing={1}
      alignItems="center"
      direction="row"
    >
      {/* <Grid
        item
        container
        //direction="column"
        spacing={1}
        //added this so double digits don't bump down to new line
        //style={{ margin: "-6px" }}
      > */}
      <Grid
        item
        container
        alignItems="center"
        xs
        spacing={1}
        style={{ paddingTop: 0, paddingBottom: 0 }}
      >
        {/* <Grid item>
            <Typography color="white" variant="body2">
              #
            </Typography>
          </Grid> */}
        <Grid item>
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
            {index <= 2 ? (
              <Icon
                style={
                  index === 0
                    ? { color: "#ffd890" }
                    : index === 1
                    ? { color: "#E6E8FA" }
                    : { color: "#ff8a6d" }
                }
              >
                <EmojiEvents />
              </Icon>
            ) : (
              <Typography
                variant="body1"
                align="center"

                //style={{ height: "100%" }}
              >
                {index + 1}
              </Typography>
            )}
          </Box>
        </Grid>
        <Grid item>{team}</Grid>
        {/* </Grid> */}
        {/* <Grid item container>
          <BoxScores subscores={subscores} type="main" />
        </Grid> */}
      </Grid>

      <Grid item xs={2}>
        <Box
          style={{
            minWidth: "2.2em",
            minHeight: "2.2em",
            height: "100%",
            border: "1px solid black",
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
      <Grid
        item
        container
        direction="column"
        xs={2}
        //justify="center"
        alignItems="center"
        //spacing={1}
      >
        <Grid item>
          <Typography variant="subtitle1">{"(" + submissions + ")"}</Typography>
        </Grid>
        <Grid item>
          <IconButton
            style={{ padding: 0, color: "white" }}
            onClick={() => toggleExpanded(!isExpanded)}
          >
            {isExpanded ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
}
