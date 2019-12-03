import React from "react";
import {
  ButtonGroup,
  Button,
  List,
  ListItem,
  TextField,
  Paper,
  ListItemText,
  Typography,
  Dialog,
  DialogTitle
} from "@material-ui/core";

export default function Summary({ state, text, categories, summaryText }) {
  const {
    step,
    setStep,
    formResponses,
    setFormResponses,
    handleSubmit
  } = state;
  const [isDialogOpen, toggleDialog] = React.useState(false);
  const handleFormSubmit = () => {
    toggleDialog(true);
    handleSubmit();
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%"
      }}
    >
      <div
        style={{
          margin: "3vh 0",
          flex: 1,
          display: "flex",
          flexDirection: "column"
        }}
      >
        <h1 style={{ marginBottom: "5vh" }}>{formResponses.opponent}</h1>
        <div style={{ flex: 1, justifyContent: "center", overflow: "auto" }}>
          <Paper>
            <List dense>
              {categories.map((x, y) => (
                <ListItem key={x} divider={y === categories.length - 1}>
                  <ListItemText primary={summaryText[categories[y]].title} />
                  <Typography variant="h6">{formResponses[x]}</Typography>
                </ListItem>
              ))}

              <ListItem dense={false}>
                <ListItemText primary="Total" />
                <Typography variant="h4" color="secondary">
                  {categories
                    .map(x => formResponses[x])
                    .reduce((x, y) => x + y)}
                </Typography>
              </ListItem>
            </List>
          </Paper>
        </div>
      </div>

      <Paper>
        <TextField
          variant="filled"
          fullWidth
          multiline
          label="Optional Feedback"
          rows="2"
          rowsMax="4"
          value={formResponses.feedback}
          onChange={e =>
            setFormResponses({ ...formResponses, feedback: e.target.value })
          }
        />
      </Paper>
      <ButtonGroup variant="contained" fullWidth style={{ marginTop: "10px" }}>
        <Button className="btn" onClick={() => setStep(step - 1)}>
          Back
        </Button>
        <Button className="btn" color="secondary" onClick={handleFormSubmit}>
          Submit
        </Button>
      </ButtonGroup>
      <Dialog open={isDialogOpen} onClose={() => setStep(1)}>
        <DialogTitle>Thanks for Scoring!</DialogTitle>
      </Dialog>
    </div>
  );
}
