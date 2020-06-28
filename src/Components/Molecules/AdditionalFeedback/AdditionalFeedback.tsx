import React from "react";
import { Button } from "@material-ui/core";
import { PostAdd } from "@material-ui/icons";

import FeedbackDialog from "../../Organisms/FeedbackDialog";
import ThemeContext from "../../themes/default";

interface Props {
  additionalFeedback: string;
  setAdditionalFeedback: any;
  updateCurrentFeedback: () => void;
}
const Wrapper = (props: any) => <div style={{ margin: "1em 0" }} {...props} />;

const AdditionalFeedback = ({
  additionalFeedback,
  setAdditionalFeedback,
  updateCurrentFeedback,
  ...props
}: Props) => {
  const theme = React.useContext(ThemeContext);
  const { palette } = theme;
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
            ? { margin: "1em 0", color: palette.onPrimary }
            : { margin: "1em 0", color: palette.secondary }
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
