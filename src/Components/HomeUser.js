import React from "react";
import Events from "./LoggedIn/Events";

export default function HomeUser({ userEmail }) {
  return (
    <div>
      <Events email={userEmail} />
    </div>
  );
}
