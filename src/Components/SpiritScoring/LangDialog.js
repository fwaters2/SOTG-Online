import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import {
  List,
  ListItem,
  Avatar,
  ListItemAvatar,
  ListItemText
} from "@material-ui/core";
import { LangSelection } from "../../Assets/Lang/Languages";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function LangDialog({
  open,
  onClose,
  setLang,
  currentLanguage
}) {
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Language Selection"}
        </DialogTitle>
        <DialogContent>
          <List>
            {LangSelection.map(language => (
              <ListItem
                onClick={() => setLang(language.nameShort)}
                key={language.avatar}
              >
                <Avatar
                  style={{
                    background: "#0038ae",
                    marginRight: "1em",
                    fontWeight: "bold"
                  }}
                >
                  {language.avatar}
                </Avatar>
                <ListItemText primary={language.name} />
              </ListItem>
            ))}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            {currentLanguage.general.ready}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
