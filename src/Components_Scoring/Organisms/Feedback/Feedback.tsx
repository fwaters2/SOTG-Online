import React from "react";
import { Button, Typography } from "@material-ui/core";
import { PostAdd } from "@material-ui/icons";
import { GREEN } from "../../../Components/Atoms/mycolors";

interface Props {
  id?: string;
  feedbackPreview?: string;
  additionalFeedback?: string;
  setAdditionalFeedback?: any;
}

const Wrapper = (props: any) => <div style={{ margin: "1em 0" }} {...props} />;

const Feedback = ({ ...props }: Props) => {
  const { feedbackPreview } = props;
  return (
    <Wrapper {...props}>
      {feedbackPreview !== "" && (
        <Typography variant="caption">{feedbackPreview}</Typography>
      )}
    </Wrapper>
  );
};

export default Feedback;
