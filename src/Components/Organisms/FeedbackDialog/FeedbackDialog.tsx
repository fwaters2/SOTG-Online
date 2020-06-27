import React from "react";
import {
  Dialog,
  DialogContent,
  TextField,
  Button,
  DialogActions,
} from "@material-ui/core";
import { Check } from "@material-ui/icons";
import ThemeContext from "../../themes/default";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  additionalFeedback: string;
  setAdditionalFeedback: (e: string) => string;
}

const Wrapper = (props: any) => <div {...props} />;

const FeedbackDialog = ({
  isOpen,
  onClose,
  additionalFeedback,
  setAdditionalFeedback,
  ...props
}: Props) => {
  const theme = React.useContext(ThemeContext);
  const { palette } = theme;

  const isFeebackBlank = additionalFeedback === "";

  return (
    <Wrapper {...props}>
      <Dialog
        fullWidth
        open={isOpen}
        onClose={onClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <TextField
            variant="outlined"
            fullWidth
            multiline
            label={"Additional Feeedback"}
            rows="4"
            value={additionalFeedback}
            onChange={(e) => setAdditionalFeedback(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button
            //color={isFeebackBlank ? "default" : "secondary"}
            variant={isFeebackBlank ? "outlined" : "contained"}
            style={isFeebackBlank ? {} : { background: palette.secondary }}
            onClick={onClose}
            fullWidth
          >
            <Check />
          </Button>
        </DialogActions>
      </Dialog>
    </Wrapper>
  );
};

export default FeedbackDialog;
