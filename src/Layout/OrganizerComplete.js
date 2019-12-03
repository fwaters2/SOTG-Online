import React from "react";
import { Typography } from "@material-ui/core";
import NavLink from "../Components/NavLink";

export default function OrganizerComplete() {
  return (
    <div>
      <Typography>Congrats! You're League is created!</Typography>
      <NavLink label="Go to my event" extension="myleague/WTF" />
    </div>
  );
}
