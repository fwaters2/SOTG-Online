import React from "react";
import { Tabs, Tab, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  tabs: { background: "white", color: "black" },
  tab: { minWidth: 0, padding: "1em", fontWeight: "bold" }
}));

export default function PlayerTabs({ currentTab, setCurrentTab }) {
  const classes = useStyles();

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        margin: "0.5em 1em"
      }}
    >
      <Tabs
        value={currentTab}
        className={classes.tabs}
        variant="fullWidth"
        style={{ borderRadius: "8px" }}
        //indicatorColor="white"
      >
        <Tab
          className={classes.tab}
          label="Submitted"
          key={0}
          style={currentTab === 0 ? { background: "#8FDE58" } : null}
          selected={currentTab === 0}
          onClick={() => setCurrentTab(0)}
        />

        <Tab
          className={classes.tab}
          label={"Received"}
          key={1}
          style={currentTab === 1 ? { background: "#8FDE58" } : null}
          selected={currentTab === 1}
          onClick={() => setCurrentTab(1)}
        />
      </Tabs>
    </div>
  );
}
