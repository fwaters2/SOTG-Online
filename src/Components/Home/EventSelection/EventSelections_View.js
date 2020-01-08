import React from "react";
import StyledPaper from "../../General/StyledPaper";
import AddIcon from "../../General/AddIcon";
import StyledTitle from "../../General/StyledTitle";
import DemoBar from "../DemoBar/Index";

//demo tools
//add event button
//TEMPORARY
const isDemo = true;
export default function EventSelections_View(props) {
  //const {isDemo, title, events }= props
  return (
    <div>
      {isDemo ? <DemoBar /> : null}
      <StyledPaper>
        <StyledTitle>Choose Event</StyledTitle>
        Map of Events
        <br />
        <AddIcon />
        <br />
      </StyledPaper>
    </div>
  );
}
