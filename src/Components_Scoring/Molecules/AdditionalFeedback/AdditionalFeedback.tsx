import React from "react";
import { Button } from "@material-ui/core";
import { PostAdd } from "@material-ui/icons";
import { GREEN } from "../../../Components/Atoms/mycolors";

interface Props {
  id?: string;
  feedbackPreview?: string;
  additionalFeedback?: string;
  setAdditionalFeedback?: any;
}
const Wrapper = (props: any) => <div style={{ margin: "1em 0" }} {...props} />;

const Molecule = ({ feedbackPreview, ...props }: Props) => {
  return (
    <Wrapper {...props}>
      <Button
        fullWidth
        variant="outlined"
        style={
          feedbackPreview === ""
            ? { margin: "1em 0", color: "white" }
            : { margin: "1em 0", color: GREEN }
        }
        onClick={() => alert("clicked current Feedback button")}
      >
        <PostAdd />
      </Button>
    </Wrapper>
  );
};

export default Molecule;
