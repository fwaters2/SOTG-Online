import React from "react";
import { Button } from "@material-ui/core";
import { PostAdd } from "@material-ui/icons";
import { GREEN } from "../../../Components/Atoms/mycolors";
import FeedbackDialog from "../../Organisms/FeedbackDialog";

interface Props {
  additionalFeedback: string;
  setAdditionalFeedback: (e: string) => string;
  updateCurrentFeedback: () => void;
}
const Wrapper = (props: any) => <div style={{ margin: "1em 0" }} {...props} />;

const AdditionalFeedback = ({
  additionalFeedback,
  setAdditionalFeedback,
  updateCurrentFeedback,
  ...props
}: Props) => {
  const [isDialogOpen, toggleDialog] = React.useState(false);
  const handleClose = () => {
    updateCurrentFeedback();
    toggleDialog(false);
  };
  return (
    <Wrapper {...props}>
      <Button
        fullWidth
        variant="outlined"
        style={
          additionalFeedback === ""
            ? { margin: "1em 0", color: "white" }
            : { margin: "1em 0", color: GREEN }
        }
        onClick={() => toggleDialog(true)}
      >
        <PostAdd />
      </Button>
      <FeedbackDialog
        isOpen={isDialogOpen}
        onClose={handleClose}
        additionalFeedback={additionalFeedback}
        setAdditionalFeedback={setAdditionalFeedback}
      />
    </Wrapper>
  );
};

export default AdditionalFeedback;
