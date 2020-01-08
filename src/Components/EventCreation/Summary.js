import React from "react";
import AlreadySignedIn from "./AlreadySignedIn";

export default function Summary(props) {
  const { formResponses, createEvent } = props;
  const email = "forrest";

  return (
    <React.Fragment>
      <AlreadySignedIn
        formResponses={formResponses}
        email={email}
        createEvent={createEvent}
      />
    </React.Fragment>
  );
}
