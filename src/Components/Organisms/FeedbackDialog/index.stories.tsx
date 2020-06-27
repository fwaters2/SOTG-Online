import React from "react";
import { storiesOf } from "@storybook/react";

import FeedbackDialog from ".";

storiesOf("ScoringForm", module).add("Dialog", () => (
  <FeedbackDialog
    isOpen={true}
    onClose={() => alert("attempting to close")}
    additionalFeedback={"Test"}
    setAdditionalFeedback={() => "changed feedback"}
  />
));
